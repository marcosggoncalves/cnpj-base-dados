

const connect = require('../../database/connect.js');
const sql = require('../../database/sql.js');


// Criar Relatórios
connect.query(sql.relatorios, (errorSchema) => {
    if (errorSchema && errorSchema.code != '42P06') {
        console.log(errorSchema);
        return false;
    } else {
        console.log("Relátorios executados e criados !");
    }
});
