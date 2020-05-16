
const linebyline = require('linebyline');
const consultas = require('../database/consultas.js');
const format = require('../utils/format.js');
const fs = require('fs');
const process = require('process');

let argv = process.argv;
let params = argv[2];
let existFile = fs.existsSync('./tratamentos/blocos/' + params);

if(params != null && existFile){
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
    if(!params){    
        console.log('Arquivo não informado, informe o nome do arquivo !');   
    }else{
        console.log('Arquivo não encontrado no sistema !');
    }
}

