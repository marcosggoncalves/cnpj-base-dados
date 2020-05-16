const socio = `INSERT INTO socios(
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
                    arquivo
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

const cnae = `INSERT INTO cnaes(
                    tipo,
                    cnpj,
                    cnae,
                    arquivo
                )
                VALUES ($1, $2, $3, $4)  RETURNING *;
            `;

const  empresa = `INSERT INTO empresas(
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
                arquivo
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


module.exports = {empresa, socio, cnae};