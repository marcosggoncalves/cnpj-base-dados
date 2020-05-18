
const linebyline = require('linebyline');
const fs = require('fs');

let globais = {
    linhas: [],
    blocoQuantidade: 8000,
    totalRowsArquivo: 0
};

fs.readdir('./tratamentos/arquivos', (error, files) => {
    if (error) return;
    files.forEach(file => {

        let autoIncrement = 1;

        linebyline(`./tratamentos/arquivos/${file}`).on('line', (line) => {

            if (globais.linhas.length < globais.blocoQuantidade) {
                globais.linhas.push(line);
            } else {
                let pasta = file[26] === '0' ? `blocos_200${file[27]}` : `blocos_20${file[26] + file[27]}`;

                if (!fs.existsSync('./tratamentos/' + pasta)) {
                    fs.mkdirSync('./tratamentos/' + pasta);
                }

                let utils = {
                    nomeArquivo: `/tratamentos\\${pasta}\\bloco-${autoIncrement++}.txt`
                };

                globais.linhas.forEach((linha) => {
                    let createArquivo = fs.createWriteStream(utils.nomeArquivo, {
                        flags: 'a'
                    });

                    if (!createArquivo.write(linha + '\n')) {
                        console.error('Não foi possivel gravar linha');
                    } else {
                        globais.totalRowsArquivo++;
                        console.error(`Total linhas arquivo principal: ${globais.totalRowsArquivo} - linha gravada no bloco de arquivo número ${autoIncrement - 1}.`);
                    }
                    createArquivo.end();
                });

                globais.linhas = [];
            }
        });
    })
});