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
    const res: CommonRes = {
      code: 200,
      message: '创建成功'
    }
    try {
      const result = await service.create(user)
    } catch (err: any) {
      res.code = 500
    }
    // 返回数据
    ctx.body = res
  }
}

module.exports = new UserController()
