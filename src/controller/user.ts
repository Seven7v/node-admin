const service = require('../service/user')
var jwt = require('jsonwebtoken')
import { UserRes } from '../type/user'
import { CommonRes } from '../type/common'

class UserController {
  // 登录
  async login(ctx: any) {
    // 获取用户请求参数
    const user = ctx.request.body
    let token = jwt.sign(user, 'shhhhh', {
      expiresIn: 60 * 60 * 24
    })
    const result: CommonRes = {
      code: 200,
      message: '登录成功！',
      token: token
    }
    // 返回数据
    ctx.body = result
  }
  // 登出
  async userLogout(ctx: any) {
    const result: CommonRes = {
      code: 200,
      message: '登出成功'
    }
    // 返回数据
    ctx.body = result
  }
  // 创建账户
  async create(ctx: any) {
    // 获取用户请求参数
    const user = ctx.request.body
    // 查数据库
    const result: CommonRes = await service.create(user)
    // 返回数据
    ctx.body = result
  }
  // 获取用户信息
  async getUserInfo(ctx: any) {
    try {
      const token = ctx.get('Authorization') // 获取请求 Header 中 Authorization 值
      let userInfo: UserRes = { username: '' }
      userInfo = jwt.verify(token, 'shhhhh') // 验证 token
      console.log(userInfo)
      delete userInfo.password
      const result: CommonRes = {
        code: 200,
        message: '用户信息获取成功',
        data: { userInfo: userInfo, loginStatus: true }
      }
      ctx.body = result
    } catch (err) {
      // token 过期或无效
      const result: CommonRes = {
        code: 401,
        message: '未登陆',
        data: { userInfo: {}, loginStatus: false }
      }
      ctx.body = result
    }
  }
}

module.exports = new UserController()
