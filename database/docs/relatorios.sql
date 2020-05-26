
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

select count('*') as empresas_ativas from empresas where situacaocadastral = '02';

select razaosocial,nomefantasia,telefone1,telefone2,telefone3,email from empresas where situacaocadastral = '02';
select razaosocial,nomefantasia,telefone1,telefone2,telefone3,email from empresas_secund where situacaocadastral = '02';
