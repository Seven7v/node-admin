const Router = require('koa-router')
const { login, create, getUserInfo, userLogout } = require('../controller/user')
const { verifyUser, verifyLogin, verifyToken } = require('../middleware/user')

const userRouter = new Router({ prefix: '/api' })

userRouter.post('/create', verifyUser, create)
userRouter.post('/login', verifyLogin, login)
userRouter.post('/logout', userLogout)
userRouter.get('/userInfo', verifyToken, getUserInfo)

module.exports = userRouter
