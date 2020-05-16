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
                VALUES %L`;

const cnae = `INSERT INTO cnaes(
                    tipo,
                    cnpj,
                    cnae,
                    arquivo
                )
                VALUES %L;
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
            VALUES %L`;


module.exports = {empresa, socio, cnae};