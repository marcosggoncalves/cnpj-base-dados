
class Consultas {
    constructor() {
        this.connect = require('./connect.js');
    }

    query(sql, data = []) {
        return this.connect.query(sql, data, (error) => {
            if (error) {
                console.log('Inserts');
                console.log(error);
                return false;
            }
            return true;
        });
    }

    insertCadastro(data) {
        let sql = null;

        if (data.length === 36) {
            sql = `INSERT INTO empresas(
                cnpj,
                tipo ,
                razaosocial ,
                nomefantasia ,
                situacaocadastral ,
                datasituacaocadastral ,
                motivosituacaocadastrao, 
                nomecidadeexterior ,
                codigopais ,
                nomepais ,
                codigonaturezajuridica ,
                datainicioatividade ,
                cnaefiscal ,
                descricaotipologradouro ,
                logradouro ,
                numerologradouro ,
                complemento ,
                bairro ,
                cep ,
                uf ,
                codigomunicipio ,
                municipio, 
                telefone1, 
                telefone2 ,
                telefone3, 
                email ,
                qualificacaoresponsavel, 
                capitalsocialempresa ,
                porteempresa ,
                opcaopelosimples, 
                dataopcaopelosimples, 
                dataexclusaosimples ,
                opcaopelomei ,
                situacaoespecial ,
                datasituacaoespecial, 
                arquivo_id
            ) 
            VALUES
            ( 
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                $7,
                $8,
                $9,
                $10,
                $11,
                $12,
                $13,
                $14,
                $15,
                $16,
                $17,
                $18,
                $19,
                $20,
                $21,
                $22,
                $23,
                $24,
                $25,
                $26,
                $27,
                $28,
                $29,
                $30,
                $31,
                $32,
                $33,
                $34,
                $35,
                $36
            ) RETURNING *`;
        } else if (data.length === 3) {
            sql = `INSERT INTO cnaes_secundarios(
                    tipo_registro,
                    cnpj,
                    cnae
                )
                VALUES ($1, $2, $3)  RETURNING *;
            `;
        } else {
            sql = `INSERT INTO socios(
                    cnpj,
                    identificadorsocio,
                    nomesocio,
                    cnpjsocio,
                    codqualificacaosocio,
                    percentualcapitalsocial,
                    dataentradasociedade,
                    codpais,
                    nomepais,
                    cpfrepresentantelegal,
                    nomerepresentante,
                    codqualificacaorepresentante,
                    arquivo_id
                ) 
                VALUES
                ( 
                    $1, 
                    $2, 
                    $3, 
                    $4, 
                    $5, 
                    $6, 
                    $7, 
                    $8, 
                    $9, 
                    $10,
                    $11,
                    $12,
                    $13
                ) RETURNING *`;
        }

        return this.connect.query(sql, data, (error) => {
            let mensagem = data.length === 36 ? `${data[0]} - Cadastro da empresa realizado com sucesso!`
                : data.length === 3 ? `${data[1]} - Cadastro CNAE Secundário realizado com sucesso`
                    : `${data[0]} - Cadastro de socio realizado com sucesso`;

            if (error) {
                console.log('Não foi possivel registrar cadastro !');
            } else {
                console.log(mensagem);
            }
        });
    }
}

module.exports = new Consultas();