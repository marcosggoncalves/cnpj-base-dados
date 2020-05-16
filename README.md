# Importação CNPJ

### Realiza a conexão com banco de dados POSTGRES
	
	user: postgres
	senha: root
	url: localhost
	port: 5432
	database:cnpj_empresas

	Sintaxe:
		- postgresql://<user>:<senha>@<url>:<port>/<database>

	Exemplo:
		- postgresql://postgres:root@localhost:5432/cnpj_empresas

### Criar pastas
	 - arquivos
	 - blocos
	 - falhas

### Altere o caminho da pasta blocos no arquivo 'index.js - linha 17'

	let utils = {
        nomeArquivo: `<caminho>\\lote${globais.autoIncrement++}.txt`
    };

### Baixar o arquivo da Receita Federal para realizar o parcionamento em blocos

<a href="http://receita.economia.gov.br/orientacao/tributaria/cadastros/cadastro-nacional-de-pessoas-juridicas-cnpj/dados-publicos-cnpj">Acessar site Receita Federal</a>

	- Adicione o arquivo "baixado no site" dentro da  pasta "arquivos"

### Execute node index.js
	- Realiza a separação do arquivo em blocos

### Execute node importar.js nome do arquivo "lote142.txt"
	- Realiza a importação 