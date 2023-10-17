const Router = require('koa-router')
const { loginTime, sendMessage, getDashBord } = require('../controller/data')
const { verifyToken } = require('../middleware/user')

const dataRouter = new Router({ prefix: '/api' })

dataRouter.post('/login/time', loginTime)
dataRouter.post('/send-message', sendMessage)
dataRouter.get('/data/dashbord', verifyToken, getDashBord)

module.exports = dataRouter
