const errorType = require('../constants/error-types') // 获取错误常量
const service = require('../service/user') //判断是否存在

const verifyLogin = async (ctx: any, next: any) => {
  // 1, get name & password
  const { username, password } = ctx.request.body

  // 2, check empty
  if (!username || !password) {
    const error = new Error(errorType.NAME_OR_PWD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 3, check user is exists
  const result = await service.getUserByName(username)
  const user = result[0][0]
  console.log(user)

  if (!user) {
    const error = new Error(errorType.USER_OR_PASSWORD_IS_INCORRECT)
    return ctx.app.emit('error', error, ctx)
  }
  console.log(password, user.password)
  // 4, check password
  if (password !== user.password) {
    const error = new Error(errorType.USER_OR_PASSWORD_IS_INCORRECT)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

const verifyUser = async (ctx: any, next: any) => {
  // 获取
  const { username, password } = ctx.request.body
  console.log('middleware', username, password)
  // 判空
  if (!username || !password || username === '' || password === '') {
    const error = new Error(errorType.NAME_OR_PWD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  const result = await service.getUserByName(username)
  console.log(result)
  //如果length不是0（判断为真）说明已经存在，抛出错误
  if (result[0].length) {
    const error = new Error(errorType.USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断唯一

  await next() //只有执行了next，后面的create才可以继续执行
}

module.exports = { verifyLogin, verifyUser }
