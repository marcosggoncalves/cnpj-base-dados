const { createWriteStream } = require('fs');
const request = require('request');

const baixar = (url) => {
    return new Promise((resolver) => {
        const partes = url.split('/');
        const arquivo = createWriteStream('./download/' + partes[partes.length - 1]);

        request(url).on('response', (resposta) => {
            resposta.pipe(arquivo).on('finish', resolver);
        }).on('error', (error) => {
            console.log(error);
        }).on('end', () => {
            console.log('Arquivos baixados !');
        });
    });
};

for (let i = 1; i <= 20; i++) {
    if (i < 10) {
        baixar(`http://200.152.38.155/CNPJ/DADOS_ABERTOS_CNPJ_0${i}.zip`)
    } else {
        baixar(`http://200.152.38.155/CNPJ/DADOS_ABERTOS_CNPJ_${i}.zip`)
    }
}