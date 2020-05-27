const fs = require('fs');
const linebyline = require('linebyline');
const format = require('../utils/format.js');

let argv = process.argv;
let params = argv[2];

var data = { cnpjs: [] }

linebyline('./tratamentos/' + params).on('line', (line) => {
    let cadastro = format.object(line, params);

    if (Object.keys(cadastro).length === 36) {
        if (data.cnpjs.length < 1000) {
            data.cnpjs.push(cadastro);
        }
    }
}).on('close', () => {
    fs.writeFile("cpjs.json", JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('Json criado com sucesso !');
    });
});
