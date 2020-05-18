
const linebyline = require('linebyline');
const consultas = require('../database/consultas.js');
const format = require('../utils/format.js');
const fs = require('fs');
const process = require('process');

let argv = process.argv;
let params = argv[2];
let existFile = fs.existsSync('./tratamentos/' + params);


let count = {
	empresas: 0,
    socios: 0,
    cnaes: 0
}

if (params != null && existFile) {
	linebyline('./tratamentos/' + params).on('line', (line) => {
		let cadastro = format.array(line, params);

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
	}).on('close', ()=>{
		console.log(`Arquivo recebido: ${params}`);
		console.log('=========== Leitura finalizada ===============')
		console.log(`(${count.empresas}) Empresas cadastrados`);
		console.log(`(${count.socios}) Socios cadastrados.`);
		console.log(`(${count.cnaes}) Cnaes cadastrados.`);
	});
} else {
	if (!params) {
		console.log('Arquivo não informado, informe o nome do arquivo !');
	} else {
		console.log('Arquivo não encontrado no sistema, arquivo pode ter falhado, com isso, foi movido para pasta de falhas, execute o script de falhas  para reniciar o processo novamente!');
	}
}

