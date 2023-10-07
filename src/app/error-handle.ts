const errorType = require('../constants/error-types') // 获取错误常量

const errorHandler = (error: any, ctx: any) => {
  let status, message
  switch (error.message) {
    case errorType.NAME_OR_PWD_IS_REQUIRED:
      status = 400
      message = '用户名或密码不能为空'
      break
    case errorType.USER_OR_PASSWORD_IS_INCORRECT:
      status = 400
      message = '用户名或密码错误'
      break
    case errorType.USER_ALREADY_EXISTS:
      status = 400
      message = '用户名已存在'
      break
    case errorType.USER_NOT_LOGIN:
      status = 400
      message = '用户未登录'
      break
    default:
      status = 404
      message = 'NOT FOUND'
      break
  }

  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler
