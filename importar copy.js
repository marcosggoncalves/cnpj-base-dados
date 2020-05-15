
const linebyline = require('linebyline');
const fs = require('fs');

const consultas = require('./database/consultas.js');
const format = require('./format.js');

fs.readdir('./blocos', (error, files) => {
    if (files && files.length > 0) {
        files.forEach(file => {
            linebyline('./blocos/' + file).on('line', (line, countLinhas, tamanho) => {
                if (format.array(line) > 0) {
                    consultas.insertCadastro(cadastro);
                }
            });
        });
    } else {
        console.log('Nenhum bloco encontrado !');
    }
});