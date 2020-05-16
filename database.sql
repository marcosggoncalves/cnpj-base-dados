create table socios(
     id serial not null primary key,
     cnpj varchar(255),
     identificadorsocio varchar(255),
     nomesocio varchar(255),
     cnpjsocio varchar(255),
     codqualificacaosocio varchar(255),
     percentualcapitalsocial varchar(255),
     dataentradasociedade varchar(255),
     codpais varchar(255),
     nomepais varchar(255),
     cpfrepresentantelegal varchar(255),
     nomerepresentante varchar(255),
     codqualificacaorepresentante varchar(255),
     arquivo varchar(255)
);

create table empresas(
      id  serial not null primary key,
      cnpj varchar(255),
      tipo varchar(255) ,
      razaosocial varchar(255) ,
      nomefantasia  varchar(255),
      situacaocadastral  varchar(255),
      datasituacaocadastral  varchar(255),
      motivosituacaocadastrao varchar(255), 
      nomecidadeexterior  varchar(255),
      codigopais  varchar(255),
      nomepais  varchar(255),
      codigonaturezajuridica varchar(255) ,
      datainicioatividade  varchar(255),
      cnaefiscal  varchar(255),
      descricaotipologradouro varchar(255) ,
      logradouro varchar(255) ,
      numerologradouro  varchar(255),
      complemento  varchar(255),
      bairro varchar(255) ,
      cep  varchar(255),
      uf  varchar(255),
      codigomunicipio  varchar(255),
      municipio varchar(255), 
      telefone1 varchar(255), 
      telefone2  varchar(255),
      telefone3 varchar(255), 
      email varchar(255),
      qualificacaoresponsavel varchar(255), 
      capitalsocialempresa varchar(255),
      porteempresa  varchar(255),
      opcaopelosimples varchar(255), 
      dataopcaopelosimples varchar(255), 
      dataexclusaosimples  varchar(255),
      opcaopelomei  varchar(255),
      situacaoespecial  varchar(255),
      datasituacaoespecial varchar(255), 
      arquivo varchar(255)
);

create table cnaes(
     id  serial not null primary key,
     tipo varchar(255),
     cnpj varchar(255),
     cnae varchar(255),
     arquivo varchar(255)
);

create table falhas(
  id  serial not null primary key,
  arquivo text,
  status varchar(255)
);