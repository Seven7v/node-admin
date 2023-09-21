const errorType = require('../constants/error-types') // 获取错误常量
const service = require('../service/user') //判断是否存在
const md5password = require('../utils/password-handle')

const verifyLogin = async (ctx, next) => {
  // 1, get name & password
  const { name, password } = ctx.request.body

  // 2, check empty
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PWD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 3, check user is exists
  const result = await service.getUserByName(name)
  const user = result[0]
  if (!user) {
    const error = new Error(errorType.USER_DOES_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  // 4, check password
  if (md5password(password) !== user.password) {
    const error = new Error(errorType.PASSWORD_IS_INCORRECT)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

module.exports = { verifyLogin }
