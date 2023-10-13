const service = require('../service/data')
import { loginTimeReq, sendMessageReq } from '../type/data'
import { CommonRes } from '../type/common'

class DataController {
  async loginTime(ctx: any) {
    // 获取用户请求参数
    const loginData: loginTimeReq = { ...ctx.request.body, ip: ctx.request.ip }
    const result = await service.setLoginTime(loginData)
    console.log(result)
    // 返回数据
    const resq: CommonRes = {
      code: 200,
      message: ''
    }
    ctx.body = resq
  }

  async sendMessage(ctx: any) {
    const message: sendMessageReq = ctx.request.body
    const result = await service.setSendMessage(message)
    // 返回数据
    const resq: CommonRes = {
      code: 200,
      message: '留言成功'
    }
    ctx.body = resq
  }
}

module.exports = new DataController()
