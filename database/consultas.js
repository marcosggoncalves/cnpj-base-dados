
class Consultas {
    constructor() {
        this.connect = require('./connect.js');
        this.file = require('fs');
        this.sql = require('./sql.js');
        this.formatSQL = require('pg-format');
    }
    
    insertCadastroSingle(data, tipo) {
        if(data.length < 0){
            console.log('Elemento vazio, tente novamente !');
        }else{
            let sql = null;

            if (tipo === 'empresas') {
                sql = this.formatSQL(this.sql.empresa, data);
            } else if (tipo === 'cnaes') {
                sql = this.formatSQL(this.sql.cnae, data);
            } else {
                sql = this.formatSQL(this.sql.socio, data);
            }

            return this.connect.query(sql, (error) => {
                if(error && error.code === '3D000'){
                  console.log('Conexão com banco de dados falhou !');
                } else if(error && error.code === 'ECONNRESET'){
                    console.log('Reconexão vou feita, mas não teve resultados positivos !');
                }else{
                    if (error) {
                        let arquivo = null;
                        
                        if(data && data[0][35]){
                            arquivo = data[0].length === 36 ? data[0][35] : data[0].length === 4 ? data[0][3] : data[0][12];
                        }else{
                            arquivo = data.length === 36 ? data[35] : data.length === 4 ? data[3] : data[12];
                        }

                        try{
                            if(arquivo != null){
                                let comandos  = [
                                    this.formatSQL("delete from empresas where arquivo = %L", arquivo),
                                    this.formatSQL("delete from cnaes where arquivo = %L", arquivo),
                                    this.formatSQL("delete from socios where arquivo = %L", arquivo)
                                ];

                                comandos.forEach(comand=>{
                                   this.connect.query(comand, (error, result) => {
                                        if(error){
                                            console.error(error);
                                        }else{
                                            console.log('Comando executado: ' + comand);
                                        }
                                   });
                                });    
                            }
                            
                            let existFile = this.file.existsSync('./tratamentos/falhas/' + arquivo);
                            
                            if(!existFile){
                                this.file.rename('./tratamentos/blocos/' + arquivo, './tratamentos/falhas/' + arquivo, (error)=>{
                                    console.log('Falha registrado, processo será reniciado em breve.');
                                });
                            }else{
                                console.log('Falha no arquivo já registrado !');
                            }
                        }catch(e){
                            console.error(e);
                        }
                    } else {
                        console.log(`(${data.length})${tipo} - cadastros salvos.`);
                    }
                }
            });
        }
    }
}

module.exports = new Consultas();