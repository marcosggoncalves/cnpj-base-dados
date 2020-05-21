const linebyline = require('linebyline');
const fs = require('fs');

const consultas = require('../database/consultas.js');
const format = require('../utils/format.js');

let count = {
	empresas: 0,
    socios: 0,
    cnaes: 0
}

fs.readdir('./tratamentos/falhas', (error, files) => {
    let filesNaoProcessados = [];

    // Filtrar arquivos não foram processados ainda,
    files.forEach(file => {
        if (file.search('processar_') != -1) {
            filesNaoProcessados.push(file);
        }
    });

    if (filesNaoProcessados && filesNaoProcessados.length > 0) {
        files.forEach(file => {
            linebyline('./tratamentos/falhas/' + file).on('line', (line) => {
                let cadastro = format.array(line, file);

                if (cadastro.length === 36) {
                    consultas.insertCadastroSingle([cadastro], 'empresas');
                    count.empresas++;
                }
                if (cadastro.length === 4) {
                    consultas.insertCadastroSingle([cadastro], 'cnaes');
                    count.cnaes++;
                }
                if (cadastro.length === 13) {
                    consultas.insertCadastroSingle([cadastro], 'socios');
                    count.socios++;
                }
            }).on('close', function () {
                fs.rename('./tratamentos/falhas/' + file, `./tratamentos/falhas/reprocessado-${file}`, (error) => {
                    let mensagem = `Leitura de falha realizada: ${file}` + 
                    `\n=========== Leitura finalizada ===============` + 
                    `\n(${count.empresas}) Empresas cadastrados` + 
                    `\n(${count.socios}) Socios cadastrados.`+
                    `\n(${count.cnaes}) Cnaes cadastrados. \n`;

                    let txt = fs.createWriteStream("log_reprocessamento.txt", {
                        flags: 'a'
                    });

                    if (!txt.write(mensagem + '\n')) {
                        console.error('Não foi possivel gravar log !');
                    }
                    console.log(mensagem);
                    txt.end();
                });
            });
        });
    } else {
        console.log('Nenhuma falha registrada !');
    }
}); 