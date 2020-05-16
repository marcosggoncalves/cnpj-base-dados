const { Pool } = require('pg')
const config = require('../utils/config.js');

module.exports = new Pool({
    connectionString:  `postgresql://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`
});
