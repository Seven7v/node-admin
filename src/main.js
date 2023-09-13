const koa = require('koa')

const app = new koa()

app.listen(8001, () => {
  console.log('8001 OK')
})
