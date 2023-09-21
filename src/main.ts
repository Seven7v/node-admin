const app = require('./app')
const config = require('./app/config')

app.listen(config.port, () => {
  console.log('8001 OK')
})
