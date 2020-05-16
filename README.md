# Importação CNPJ

### Realiza a conexão com banco de dados POSTGRES 'config.js'
	
	user: postgres
	password: root
	host: localhost
	port: 5432
	database:cnpj_empresas

	
	## Sintaxe:
	- postgresql://<user>:<password>@<host>:<port>/<database>


	## Exemplo:
		- postgresql://postgres:root@localhost:5432/cnpj_empresas


### Criar pastas
	 1. arquivos
	 2. blocos
	 3. falhas

### Altere o caminho da pasta blocos no arquivo 'index.js - linha 17'

	let utils = {
        nomeArquivo: `<caminho>\\lote${globais.autoIncrement++}.txt`
    };

### Baixar o arquivo da Receita Federal para realizar o parcionamento em blocos

<a href="http://receita.economia.gov.br/orientacao/tributaria/cadastros/cadastro-nacional-de-pessoas-juridicas-cnpj/dados-publicos-cnpj">Acessar site Receita Federal</a>

	## Adicione o arquivo "baixado no site" dentro da  pasta "arquivos"

### Comandos para execução
	
	1. npm install - Instalar pacotes
	2. npm run partition - Parcionar arquivo em blocos
    3. npm run single '<nome do arquivo>.txt' - Iniciar processamento de um único arquivo de cadastro
    4. npm run multiple - Iniciar processamento de varios arquivos de cadastros