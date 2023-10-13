const Router = require('koa-router')
const { loginTime, sendMessage } = require('../controller/data')

const dataRouter = new Router({ prefix: '/api' })

dataRouter.post('/login/time', loginTime)
dataRouter.post('/send-message', sendMessage)

module.exports = dataRouter
