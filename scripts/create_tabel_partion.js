const connect = require('../../database/connect.js');
const tables = ['empresas', 'socios', 'cnaes'];


for (let i = 0; i < tables.length; i++) {
    for (let index = 1; index <= 20; index++) {
        let numero = index < 10 ? numero = `0${index}` : numero = index;

        connect.query(`CREATE TABLE ${tables[i]}_part_${numero}() INHERITS(${tables[i]}); `, (errorSchema) => {
            if (errorSchema && errorSchema.code != '42P06') {
                console.log(errorSchema);
                return false;
            } else {
                console.log(`Tabela criada: ${tables[i]}_part_${numero}`);
            }
        });
    }
}