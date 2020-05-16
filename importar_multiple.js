
const linebyline = require('linebyline');
const fs = require('fs');
const consultas = require('./database/consultas.js');
const format = require('./format.js');

const falhasRecusive = ()=>{
    return fs.readdir('./falhas', (error, files) => {
        if (files && files.length > 0) {
            files.forEach(file => {
                linebyline('./falhas/' + file).on('line', (line, countLinhas, tamanho) => {

                    let cadastro = format.array(line);

                    if (cadastro.length > 0) {
                        consultas.falhasCadastros(cadastro);
                    }
                });
            });
        } else {
            console.log('Nenhum bloco de falhas encontrados !');
        }
    });
}

fs.readdir('./blocos', (error, files) => {
    if (files && files.length > 0) {
        files.forEach(file => {
            linebyline('./blocos/' + file).on('line', (line, countLinhas, tamanho) => {
                
                let cadastro = format.array(line);

                if (cadastro.length > 0) {
                    consultas.insertCadastro(cadastro);
                }
            });
            falhasRecusive();
        });
    } else {
        console.log('Nenhum bloco de cadastros encontrados !');
    }
});