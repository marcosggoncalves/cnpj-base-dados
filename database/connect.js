const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:root@localhost:5432/cnpj_empresas';

module.exports = new Pool({
    connectionString: connectionString,
});
