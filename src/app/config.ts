const dotenv = require('dotenv')
dotenv.config()

const port = process.env.APP_PORT || 8001
const sql_host = process.env.MYSQL_HOST || 'localhost'
const sql_port = process.env.MYSQL_PORT || 3306
const user = process.env.MYSQL_USER || 'admin'
const password = process.env.MYSQL_PASSWORD || 'admin'
const database = process.env.MYSQL_DATABASE || 'ADMIN'

module.exports = { port, sql_host, sql_port, user, password, database }
