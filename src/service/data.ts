const connection = require('../app/database')
import { loginTimeReq } from '../type/data'

class DataService {
  async setLoginTime(loginData: loginTimeReq) {
    const { username, loginTime, ip } = loginData
    console.log(username, loginTime, ip)
    const statement = `INSERT INTO login_time ( username,ip,loginTime) VALUES (?, ?, ?);`
    const createTableSql = `CREATE TABLE IF NOT EXISTS login_time(
        id INT UNSIGNED AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL,
        ip VARCHAR(40) NOT NULL,
        loginTime VARCHAR(100) NOT NULL,
        PRIMARY KEY ( id )
     )ENGINE=InnoDB DEFAULT CHARSET=utf8;`
    try {
      const createResq = await connection.query(createTableSql)
    } catch (error) {
      console.log(error)
    }
    let result
    try {
      result = await connection.execute(statement, [username, ip, loginTime])
    } catch (error) {
      console.log(error)
    }
    return result
  }
}
module.exports = new DataService()
