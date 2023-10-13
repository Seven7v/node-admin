const connection = require('../app/database')
import { loginTimeReq, sendMessageReq } from '../type/data'

class DataService {
  async setLoginTime(loginData: loginTimeReq) {
    const { username, loginTime, ip } = loginData
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

  async setSendMessage(messageData: sendMessageReq) {
    const { message, username, sendTime } = messageData
    const statement = `INSERT INTO message_list ( message, username, sendTime) VALUES (?, ?, ?);`
    const createMessageSql = `CREATE TABLE IF NOT EXISTS message_list(
        id INT UNSIGNED AUTO_INCREMENT,
        message VARCHAR(500) NOT NULL,
        username VARCHAR(100) NOT NULL,
        sendTime VARCHAR(100) NOT NULL,
        PRIMARY KEY ( id )
     )ENGINE=InnoDB DEFAULT CHARSET=utf8;`
    try {
      const createResq = await connection.query(createMessageSql)
      console.log(createResq)
    } catch (error) {
      console.log(error)
    }
    let result
    try {
      result = await connection.execute(statement, [message, username, sendTime])
    } catch (error) {
      console.log(error)
    }
    return result
  }
}
module.exports = new DataService()
