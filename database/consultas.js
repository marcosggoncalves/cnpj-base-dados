
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
                            arquivo = data.length === 36 ? data[0][35] : data.length === 4 ? data[0][3] : data[0][12];
                        }else{
                            arquivo = data.length === 36 ? data[35] : data.length === 4 ? data[3] : data[12];
                        }

                        try{
                            this.execute(`delete from empresas where arquivo = ${arquivo}`);
                            this.execute(`delete from cnaes where arquivo = ${arquivo}`);
                            this.execute(`delete from socios where arquivo = ${arquivo}`);
                            this.execute(`insert into falhas (arquivo, status) values (${arquivo}, 'Não foi possivel registrar cadastro, inserção falhou')`);
                            

                            return false;
                            let existFile = this.file.existsSync('./falhas/' + arquivo);
                            
                            if(!existFile){
                                this.file.rename('./blocos/' + arquivo, './falhas/' + arquivo, (error) => {
                                    if (error) {
                                      console.log(error);
                                    }else{
                                      console.log('Arquivo movido para pasta de falhas, nova tentiva será feita !');
                                    }
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

    falhasCadastros(data){
        let sql = null;

        if (data.length === 36) {
            sql = this.sql.empresa;
        } else if (data.length === 4) {
            sql = this.sql.cnae;
        } else {
            sql = this.sql.socio;
        }

         return this.connect.query(sql, data, (error) => {
                if(error && error.code === '3D000'){
                  console.log('Conexão com banco de dados falhou !');
                } else if(error && error.code === 'ECONNRESET'){
                    console.log('Reconexão vou feita, mas não teve resultados positivos !');
                }else{

                    let mensagem = data.length === 36 ? `${data[0]} - Tentativa de cadastro da empresa realizado com sucesso!`
                            : data.length === 4 ? `${data[1]} -Tentativa de cadastro CNAE Secundário realizado com sucesso`
                                : `${data[0]} - Tentativa de cadastro de socio realizado com sucesso`;

                    if (error) {
                        let arquivo = data.length === 36 ? data[35] : data.length === 4 ? data[3] : data[12];

                        try{
                            this.execute(`delete from falhas where arquivo = ${arquivo}`);

                            this.connect.query(`select*from falhas where arquivo = ${arquivo}`, data, (error, result) => {
                                if(result && result.rows.length === 0){

                                    let existFile = this.file.access('./falhas/' + arquivo, (err) => {
                                      return err ? false : true;
                                    });

                                    if(!existFile){
                                        this.file.unlink( './falhas/' + arquivo, (error) => {
                                            if (error) {
                                              console.log(error);
                                            }else{
                                              console.log('Falhas no processo foram retomados e concluido !');
                                            }
                                        });
                                    }else{
                                        console.log('Arquivo ja foi reprocessado !');
                                    }
                                }
                            });
                        }catch(e){
                            console.error(e);
                        }
                    } else {
                        console.log(mensagem);
                    }
                }
        });
    }
}

module.exports = new Consultas();