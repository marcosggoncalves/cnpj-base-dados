
const linebyline = require('linebyline');
const consultas = require('./database/consultas.js');
const format = require('./format.js');
const process = require('process');
let argv = process.argv;

linebyline('./blocos/' + argv[2]).on('line', (line, countLinhas, tamanho) => {
    if (format.array(line).length > 0) {
        consultas.insertCadastro(cadastro);
    }
});
