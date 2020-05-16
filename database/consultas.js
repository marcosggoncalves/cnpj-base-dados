
class Consultas {
    constructor() {
        this.connect = require('./connect.js');
        this.file = require('fs');
        this.sql = require('./sql.js');
    }

    execute(sql, data = []) {
        return this.connect.query(sql, data, (error) => {
            if (error) {
                console.log('Não foi possivel excluir registros');
            }else{
                console.log('Registros excluidos com sucesso!');   
            }
        });
    }

    insertCadastro(data) {
        let sql = null;

        if (data.length === 36) {
            sql = this.sql.empresa;
        } else if (data.length === 4) {
            sql = this.sql.cnae;
        } else {
            sql = this.sql.socio;
        }

        return this.connect.query(sql, data, (error) => {
            let mensagem = data.length === 36 ? `${data[0]} - Cadastro da empresa realizado com sucesso!`
                : data.length === 4 ? `${data[1]} - Cadastro CNAE Secundário realizado com sucesso`
                    : `${data[0]} - Cadastro de socio realizado com sucesso`;

            if (error) {
                let arquivo = data.length === 36 ? data[35] : data.length === 4 ? $data[3] : $data[12];

                try{
                    this.execute(`delete from empresas where arquivo = ${$arquivo}`);
                    this.execute(`delete from cnaes where arquivo = ${$arquivo}`);
                    this.execute(`delete from socios where arquivo = ${$arquivo}`);
                    this.execute(`insert into falhas (arquivo, status) values (${arquivo}, 'Não foi possivel registrar cadastro, inserção falhou')`);

                    this.file.rename('../blocos/' + arquivo, '../falhas/' + arquivo, (error) => {
                        if (error) {
                          console.log(error);
                        }else{
                          console.log('Arquivo movido para pasta de falhas, nova tentiva será feita !');
                        }
                    });
                }catch(e){
                    console.error(e);
                }
            } else {
                console.log(mensagem);
            }
        });
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

        let mensagem = data.length === 36 ? `${data[0]} - Tentativa de cadastro da empresa realizado com sucesso!`
                : data.length === 4 ? `${data[1]} -Tentativa de cadastro CNAE Secundário realizado com sucesso`
                    : `${data[0]} - Tentativa de cadastro de socio realizado com sucesso`;

         return this.connect.query(sql, data, (error) => {
            if (error) {
                let arquivo = data.length === 36 ? data[35] : data.length === 4 ? $data[3] : $data[12];

                try{
                    this.execute(`delete from falhas where arquivo = ${$arquivo}`);

                    this.connect.query(`select*from falhas where arquivo = ${$arquivo}`, data, (error, result) => {
                        if(result && result.rows.length === 0){
                            this.file.unlink( '../falhas/' + arquivo, (error) => {
                                if (error) {
                                  console.log(error);
                                }else{
                                  console.log('Falhas no processo foram retomados e concluido !');
                                }
                            });
                        }
                    });
                }catch(e){
                    console.error(e);
                }
            } else {
                console.log(mensagem);
            }
        });
    }
}

module.exports = new Consultas();