# Importação CNPJ

### Realiza a conexão com banco de dados POSTGRES 'utils/config.js'
	
	user: postgres
	password: root
	host: localhost
	port: 5432
	database:cnpj_empresas

	
#### Sintaxe:
	- postgresql://<user>:<password>@<host>:<port>/<database>

#### Exemplo:
    - postgresql://postgres:root@localhost:5432/cnpj_empresas

### Altere o caminho da pasta blocos no arquivo 'index.js - linha 17'

	let utils = {
		nomeArquivo: '<caminho>'\\blocos_20${params}\\bloco-${globais.autoIncrement++}.txt`
	};

### Criar pastas
	1.tratamentos
		1.1 arquivos
		1.2 falhas

## OBS:
	
	Arquivos log.txt e log_error_txt.log serão criados automaticamente pelo código
	
### Baixar o arquivo da Receita Federal para realizar o parcionamento em blocos

<a href="http://receita.economia.gov.br/orientacao/tributaria/cadastros/cadastro-nacional-de-pessoas-juridicas-cnpj/dados-publicos-cnpj">Acessar site Receita Federal</a>

	Adicione o arquivo "baixado no site" dentro da  pasta "arquivos"

### Comandos para execução
	1. npm install - Instalar pacotes
	2. npm run partition - Parcionar arquivo em blocos (Exemplo : npm run partition 01)
    3. npm run single '<pasta>/<nome do arquivo>.txt' (Exemplo : npm run single blocos/bloco-1.txt ) - Iniciar processamento de um único arquivo de cadastro 
    4. npm run flaws Processar arquivos com falhas 
	5. npm run partitions Parcionar multiplos arquivos em blocos
	6. npm run count "numero arquivo " - Contador de linhas
	7. npm run download  Baixar todos arquivos cnpj do servidor da receita federal(Demora um pouco, depende da internet);
	8. npm run states - Separa cnpjs por estados
	9. npm run report - criar relatorios(SQL) especificos para Dourasoft
	10. npm run json '<pasta>/<nome do arquivo>.txt' - converter arquivo e json