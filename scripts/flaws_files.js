const linebyline = require('linebyline');
const fs = require('fs');

const consultas = require('../database/consultas.js');
const format = require('../utils/format.js');

fs.readdir('./tratamentos/falhas', (error, files) => {
    let filesNaoProcessados = [];

    // Filtrar arquivos não foram processados ainda,
    files.forEach(file => {
        if (file.search('processar_') != -1) {
            filesNaoProcessados.push(file);
        }
    });

    if (filesNaoProcessados && filesNaoProcessados.length > 0) {
        filesNaoProcessados.forEach(file => {
            fs.createReadStream('./tratamentos/falhas/' + file, { encoding: 'utf-8' }).on('data', (data) => {
                let cadastro = format.array(data, file);

                if (cadastro.length === 36) {
                    consultas.insertCadastroSingle([cadastro], 'empresas');
                }
                if (cadastro.length === 4) {
                    consultas.insertCadastroSingle([cadastro], 'cnaes');
                }
                if (cadastro.length === 13) {
                    consultas.insertCadastroSingle([cadastro], 'socios');
                }
            }).on('close', function () {
                fs.rename('./tratamentos/falhas/' + file, `./tratamentos/falhas/reprocessado-${new Date().getTime()}.txt`, (error) => {
                    console.log(file + ' - Leitura finalizada !');
                });
            });
        });
    } else {
        console.log('Nenhuma falha registrada !');
    }
}); 