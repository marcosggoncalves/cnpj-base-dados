
const linebyline = require('linebyline');
const consultas = require('./database/consultas.js');
const format = require('./format.js');
const process = require('process');

let argv = process.argv;
let params = argv[2];

linebyline('./blocos/' + params).on('line', (line, countLinhas, tamanho) => {

	let cadastro = format.array(line, params);

    if (cadastro.length > 0) {
        consultas.insertCadastroSingle(cadastro);
    }
});
