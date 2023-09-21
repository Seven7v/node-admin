const Router = require('koa-router')
const { login, create } = require('../controller/user')
const { verifyUser, verifyLogin } = require('../middleware/user')

const userRouter = new Router({ prefix: '/api' })

userRouter.post('/create', verifyUser, create)
userRouter.post('/login', verifyLogin, login)

module.exports = userRouter
