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

### Baixar o arquivo da receita federal para realizar o parcionamento em blocos
	- http://receita.economia.gov.br/orientacao/tributaria/cadastros/cadastro-nacional-de-pessoas-juridicas-cnpj/dados-publicos-cnpj

### Execute node index.js
	- Realiza a separação do arquivo em blocos

### Execute node importar.js nome do arquivo "lote142.txt"
	- Realiza a importação 