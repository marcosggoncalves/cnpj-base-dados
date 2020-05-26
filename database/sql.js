const socio = (table, partition) => {
    return `INSERT INTO ${table}_part_${partition}(
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
}
const cnae = (table, partition) => {
    return `INSERT INTO ${table}_part_${partition}(
                    tipo,
                    cnpj,
                    cnae,
                    arquivo
                )
                VALUES %L;
            `;
}

const empresa = (table, partition) => {
    return `
        INSERT INTO ${table}_part_${partition}(
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
};

const empresaTableEstado = (schema, uf, tabela) => {
    return `create table ${schema}.empresas_${uf} as 
        select  
            cnpj, tipo, razaosocial, nomefantasia, situacaocadastral, 
            datasituacaocadastral, motivosituacaocadastrao, nomecidadeexterior, 
            codigopais, nomepais, codigonaturezajuridica, datainicioatividade, 
            cnaefiscal, descricaotipologradouro, logradouro, numerologradouro, 
            complemento, bairro, cep, uf, codigomunicipio, municipio, telefone1, 
            telefone2, telefone3, email, qualificacaoresponsavel, capitalsocialempresa, 
            porteempresa, opcaopelosimples, dataopcaopelosimples, dataexclusaosimples, 
            opcaopelomei, situacaoespecial, datasituacaoespecial, arquivo
        from ${tabela} where uf = '${uf}'`;
}

const empresaTableEstadoInsert = (schema, uf, tabela) => {
    return `insert into ${schema}.empresas_${uf} 
        (
            cnpj, tipo, razaosocial, nomefantasia, situacaocadastral, datasituacaocadastral, 
            motivosituacaocadastrao, nomecidadeexterior, codigopais, nomepais, 
            codigonaturezajuridica, datainicioatividade, cnaefiscal, descricaotipologradouro, 
            logradouro, numerologradouro, complemento, bairro, cep, uf, codigomunicipio, 
            municipio, telefone1, telefone2, telefone3, email, qualificacaoresponsavel, 
            capitalsocialempresa, porteempresa, opcaopelosimples, dataopcaopelosimples, 
            dataexclusaosimples, opcaopelomei, situacaoespecial, datasituacaoespecial, 
            arquivo
        ) 
        select  
            cnpj, tipo, razaosocial, nomefantasia, situacaocadastral, 
            datasituacaocadastral, motivosituacaocadastrao, nomecidadeexterior, 
            codigopais, nomepais, codigonaturezajuridica, datainicioatividade, 
            cnaefiscal, descricaotipologradouro, logradouro, numerologradouro, 
            complemento, bairro, cep, uf, codigomunicipio, municipio, telefone1, 
            telefone2, telefone3, email, qualificacaoresponsavel, capitalsocialempresa, 
            porteempresa, opcaopelosimples, dataopcaopelosimples, dataexclusaosimples, 
            opcaopelomei, situacaoespecial, datasituacaoespecial, arquivo
        from ${tabela}  where uf = '${uf}'`;
}

const relatorios = `
    create schema relatorios;
    create schema cnaes_secundarios;

    create table relatorios.cnaes_8299706 as  select*from empresas where cnaefiscal = '8299706';
    create table relatorios.cnaes_941 as select*from empresas where cnaefiscal like '941%';
    create table relatorios.cnaes_942 as select*from empresas where cnaefiscal like '942%';
    create table relatorios.cnaes_943 as select*from empresas where cnaefiscal like '943%';
    create table relatorios.cnaes_949 as select*from empresas where cnaefiscal like '949%';
    create table relatorios.cnaes_81125  as select*from empresas where cnaefiscal like '81125%';
    create table relatorios.cnaes_6920601 as  select*from empresas where cnaefiscal like '6920601%';

    create table cnaes_secundarios.cnaes_lotericas as  select*from cnaes where cnae = '8299706' ;
    create table cnaes_secundarios.cnaes_sindicatos_associacoes_941 as select*from empresas where cnaefiscal like '941%';
    create table cnaes_secundarios.cnaes_sindicatos_associacoes_942 as select*from empresas where cnaefiscal like '942%' ;
    create table cnaes_secundarios.cnaes_sindicatos_associacoes_943 as select*from empresas where cnaefiscal like '943%';
    create table cnaes_secundarios.cnaes_sindicatos_associacoes_949 as select*from empresas where cnaefiscal like '949%';
    create table cnaes_secundarios.cnaes_condominios  as select*from empresas where cnaefiscal like '81125%' ;
    create table cnaes_secundarios.cnaes_escritorio_contabil as select*from empresas where cnaefiscal like '6920601%';
`;


module.exports = { empresa, socio, cnae, empresaTableEstado, empresaTableEstadoInsert, relatorios };
