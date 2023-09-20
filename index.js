const express = require('express')
const app = express()

app.get('/', function (_req, res) {
  res.send('Hello World')
})

app.get('/v2/', function (_req, res) {
  res.send('Hello V2 World')
})

app.listen(3000)
