
const linebyline = require('linebyline');
const fs = require('fs');
const consultas = require('./database/consultas.js');
const format = require('./utils/format.js');

const falhasRecusive = ()=>{
    return fs.readdir('./falhas', (error, files) => {
        if (files && files.length > 0) {
            files.forEach(file => {
                linebyline('./falhas/' + file).on('line', (line, countLinhas, tamanho) => {

                    let cadastro = format.array(line, file);

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

            let arquivo = linebyline('./blocos/' + file);

            arquivo.on('line', (line, countLinhas, tamanho) => {
                let cadastro = format.array(line, file);

                if (cadastro.length > 0) {
                    consultas.insertCadastro(cadastro);
                }
            });

            // arquivo.on('close', () => {
            //     falhasRecusive();
            // });
        });
    } else {
        console.log('Nenhum bloco de cadastros encontrados !');
    }
});