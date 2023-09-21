const service = require('../service/user')

import { CommonRes } from '../type/common'

class UserController {
  async login(ctx: any) {
    // 获取用户请求参数
    const user = ctx.request.body
    // 查数据库
    const result = await service.login(user)
    // 返回数据
    ctx.body = result
  }

  async create(ctx: any) {
    // 获取用户请求参数
    const user = ctx.request.body
    // 查数据库
    const result = await service.create(user)
    // 返回数据
    ctx.body = result
  }
}

module.exports = new UserController()
