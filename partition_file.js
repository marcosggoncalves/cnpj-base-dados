
const linebyline = require('linebyline');
const fs = require('fs');

let globais = {
    linhas: [],
    rl: linebyline('./arquivos/K3241.K03200DV.D00422.L00020'),
    blocoQuantidade: 8000,
    autoIncrement: 1
};

globais.rl.on('line', (line, count, tamanho) => {
    if (globais.linhas.length <= globais.blocoQuantidade) {
        globais.linhas.push(line);
    } else {
        let utils = {
            nomeArquivo: `C:\\Users\\Marcos Lopes G\\Documents\\cnpj-imports\\blocos\\bloco-${globais.autoIncrement++}.txt`
        };
        globais.linhas.forEach((linha) => {
            let createArquivo = fs.createWriteStream(utils.nomeArquivo, {
                flags: 'a'
            });

            if (!createArquivo.write(linha + '\n')) {
                console.error('Não foi possivel gravar linha');
            } else {
                console.error(`${count} - linha gravada no bloco de arquivo ${utils.nomeArquivo}, número arquivo ${globais.autoIncrement - 1}.`);
            }
            createArquivo.end();
        });
        globais.linhas = [];
    }
});

// node--max - old - space - size=8192 index.js