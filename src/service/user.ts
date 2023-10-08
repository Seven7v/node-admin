// 只做数据库处理操作
const connection = require('../app/database')
import { UserReq } from '../type/user'
import { CommonRes } from '../type/common'

class UserService {
  async create(user: UserReq) {
    const { username, password } = user
    const statement = `INSERT INTO users (name, password) VALUES (?, ?);`
    const createUsersTable = `CREATE TABLE IF NOT EXISTS users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(20) NOT NULL UNIQUE,
	password VARCHAR(50) NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`
    try {
      const createResq = await connection.query(createUsersTable)
    } catch (error) {
      console.log(error)
    }
    const result = await connection.execute(statement, [username, password])
    const res: CommonRes = {
      code: 200,
      message: '创建成功'
    }
    // 将user 存储到数据库
    return res
  }

  //查询用户是否存在
  async getUserByName(name: string) {
    const statement = `SELECT * FROM users WHERE name = ?;`
    const result = await connection.execute(statement, [name])
    return result
  }
}

module.exports = new UserService()
