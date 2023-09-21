const mysql = require('mysql2')
const config = require('./config')

const connections = mysql.createPool({
  host: config.sql_host,
  user: config.user,
  port: config.sql_port,
  password: config.password,
  database: config.database
})

connections.getConnection((err: any, conn: any) => {
  conn.connect((err: any) => {
    if (err) {
      console.log('sql error')
    } else {
      console.log('sql OK')
    }
  })
})

module.exports = connections.promise()
