const Router = require('koa-router')
const { login, create } = require('../controller/user')
const userRouter = new Router({ prefix: '/api' })

userRouter.post('/create', create)
userRouter.post('/login', login)

module.exports = userRouter
