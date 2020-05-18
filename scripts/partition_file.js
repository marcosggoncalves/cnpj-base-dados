
const linebyline = require('linebyline');
const fs = require('fs');
const process = require('process');

let argv = process.argv;
let params = argv[2];

if (params === null) {
    console.log('Arquivo não informado !');
    return false;
}

let globais = {
    linhas: [],
    rl: linebyline(`./tratamentos/arquivos/K3241.K03200DV.D00422.L000${params}`),
    blocoQuantidade: 8000,
    autoIncrement: 1,
    totalRowsArquivo: 0
};

globais.rl.on('line', (line) => {
    if (globais.linhas.length < globais.blocoQuantidade) {
        globais.linhas.push(line);
    } else {
        let pasta = `blocos_20${params}`;

        if (!fs.existsSync('./tratamentos/' + pasta)) {
            fs.mkdirSync('./tratamentos/' + pasta);
        }

        let utils = {
            nomeArquivo: `D:\\cnpj-base-dados\tratamentos\\blocos_20${params}\\bloco-${globais.autoIncrement++}.txt`
        };
        globais.linhas.forEach((linha) => {
            let createArquivo = fs.createWriteStream(utils.nomeArquivo, {
                flags: 'a'
            });

            if (!createArquivo.write(linha + '\n')) {
                console.error('Não foi possivel gravar linha');
            } else {
                globais.totalRowsArquivo++;
                console.error(`Total linhas arquivo principal: ${globais.totalRowsArquivo} - linha gravada no bloco de arquivo número ${globais.autoIncrement - 1}.`);
            }
            createArquivo.end();
        });

        globais.linhas = [];
    }
});