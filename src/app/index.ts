const koa = require('koa')
//解析请求参数的
const bodyParser = require('koa-bodyparser')
const routers = require('../router/index')
const errorHandler = require('./error-handle') //处理错误函数

const app = new koa()

app.on('error', errorHandler)
app.use(bodyParser()) //解析请求参数的
// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
Object.keys(routers).map(item => {
  app.use(routers[item].routes())
  app.use(
    routers[item].allowedMethods({
      // throw: true, // 抛出错误，代替设置响应头状态
      // notImplemented: () => '不支持当前请求所需要的功能',
      // methodNotAllowed: () => '不支持的请求方式'
    })
  )
})
// 调用router.allowedMethods()获得一个中间件
// 当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`

module.exports = app
