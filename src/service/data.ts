const connection = require('../app/database')
import { loginTimeReq } from '../type/data'

class DataService {
  async setLoginTime(loginData: loginTimeReq) {
    const { username, loginTime, ip } = loginData
    console.log(username, loginTime, ip)
    const statement = `INSERT INTO login_time ( username,ip,loginTime) VALUES (?, ?, ?);`
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
