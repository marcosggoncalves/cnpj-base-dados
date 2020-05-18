
const linebyline = require('linebyline');
const process = require('process');
let argv = process.argv;
let params = argv[2];

if (params === null) {
    console.log('Arquivo não informado !');
    return false;
}

let globais = {
    rl: linebyline(`./tratamentos/arquivos/K3241.K03200DV.D00422.L000${params}`),
    totalRowsArquivo: 0,
    empresas: 0,
    socios: 0,
    cnaes: 0
};

globais.rl.on('line', (line) => {
    if (!line) { return };

    if (line.substr(0, 1).trim() === '1') {
        globais.empresas++;
    }

    if (line.substr(0, 1).trim() === '2') {
        globais.socios++;
    }

    if (line.substr(0, 1).trim() === '6') {
        globais.cnaes++;
    }

}).on("close", () => {
    console.log(`Arquivo K3241.K03200DV.D00422.L000${params}`);
    console.log(`empresas: ${globais.empresas} `);
    console.log(`socios: ${globais.socios} `);
    console.log(`cnaes: ${globais.cnaes} `);
});