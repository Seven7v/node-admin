const Router = require('koa-router')
const { loginTime } = require('../controller/data')

const dataRouter = new Router({ prefix: '/api' })

dataRouter.post('/login/time', loginTime)

module.exports = dataRouter
