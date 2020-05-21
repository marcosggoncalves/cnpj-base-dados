

const connect = require('../../database/connect.js');
const sql = require('../../database/sql.js');
const process = require('process');

let argv = process.argv;
let params = argv[2];

const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MS",
    "MT",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE"
];

// Criar schema para ficar organizado.

connect.query('CREATE SCHEMA estados_cnpjs',(errorSchema)=>{
    if(errorSchema && errorSchema.code != '42P06'){
        console.log(errorSchema);
        return false;
    }
});

// Criar tabelas com os determinados estados
estados.forEach(estado => {
     connect.query(`SELECT table_name FROM information_schema.tables WHERE table_schema='estados_cnpjs' AND table_name='empresas_${estado.toLowerCase()}'`, (err, res)=>{
        if(err){
            console.error(err);
        }else{

            let sqlExe = null;
            let mensagem = '';

            if(res && res.rows.length > 0){
                sqlExe = sql.empresaTableEstadoInsert('estados_cnpjs', estado, params);
                mensagem = `Inserção de empresa no estado: estados_cnpjs.${estado} registrada.`
            }else{
                sqlExe = sql.empresaTableEstado('estados_cnpjs', estado, params);
                mensagem = `Tabela Estado: estados_cnpjs.${estado} criada.`;
            }

            connect.query(sqlExe,(error,result)=>{
                if (error && error.code === '3D000') {
                    console.log('Conexão com banco de dados falhou !');
                } else if (error && error.code === 'ECONNRESET') {
                    console.log('Reconexão vou feita, mas não teve resultados positivos !');
                } else if(error && error.code != '3F000'){
                    console.log(error);
                }else{
                    console.log(mensagem);
                }
            });
        }
    });
});