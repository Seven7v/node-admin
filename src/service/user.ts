const connection = require('../app/database')
var jwt = require('jsonwebtoken')
import { UserReq } from '../type/user'
import { CommonRes } from '../type/common'

const crypto = require('crypto')

class UserService {
  async create(user: UserReq) {
    const { username, password } = user
    const statement = `INSERT INTO users (name, password) VALUES (?, ?);`
    const result = await connection.execute(statement, [username, password])
    const res: CommonRes = {
      code: 200,
      message: '创建成功'
    }
    // 将user 存储到数据库
    return res
  }
  //登录
  async login(user: UserReq) {
    let token = jwt.sign(user, 'shhhhh')
    const result = {
      code: 200,
      message: '登录成功！',
      token: token
    }
    return result
  }

  //查询用户是否存在
  async getUserByName(name: string) {
    const statement = `SELECT * FROM users WHERE name = ?;`
    const result = await connection.execute(statement, [name])
    return result
  }
}

module.exports = new UserService()
