

const connect = require('../../database/connect.js');
const sql = require('../../database/sql.js');


// criar schema relatorios
connect.query('CREATE SCHEMA relatorios',(errorSchema)=>{
    if(errorSchema && errorSchema.code != '42P06'){
        console.log(errorSchema);
        return false;
    }
});

// Criar Relatórios
connect.query(sql.relatorios,(errorSchema)=>{
    if(errorSchema && errorSchema.code != '42P06'){
        console.log(errorSchema);
        return false;
    }else{
        console.log("Relátorios executados e criados !");
    }
});
