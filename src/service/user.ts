const connection = require('../app/database')
import { UserReq } from '../type/user'

class UserService {
  async create(user: UserReq) {
    console.log('user存数据库', user)
    const { username, password } = user
    const statement = `INSERT INTO users (name, password) VALUES (?, ?);`
    const result = await connection.execute(statement, [username, password])
    // 将user 存储到数据库
    return result
  }
  //登录
  async login(user: UserReq) {
    console.log('登录', user)
    const { username, password } = user
    const statement = `INSERT INTO users (name, password) VALUES (?, ?);`
    const result = await connection.execute(statement, [username, password])
    return result
  }
}

module.exports = new UserService()
