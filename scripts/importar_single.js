
const linebyline = require('linebyline');
const consultas = require('../database/consultas.js');
const format = require('../utils/format.js');
const process = require('process');

let argv = process.argv;
let params = argv[2];

if(params != null){
	linebyline('./tratamentos/blocos/' + params).on('line', (line, countLinhas, tamanho) => {
		let cadastro = format.array(line, params);

    	if(cadastro.length === 36){
        	consultas.insertCadastroSingle([cadastro],'empresas');
    	}
    	if(cadastro.length === 4){
        	consultas.insertCadastroSingle([cadastro],'cnaes');
    	}
    	if(cadastro.length === 13){
        	consultas.insertCadastroSingle([cadastro],'socios');
    	}	    
	});
}else{
	console.log('Arquivo não informado, entre com nome do arquivo !');
}

