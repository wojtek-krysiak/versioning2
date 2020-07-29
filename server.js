const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`Hello World!`))

app.get('/hello2', (req, res) => res.send(`Hello Worlds!`))
app.get('/hello3', (req, res) => res.send(`Hello Worlds!`))

app.listen(port, () => console.log(
  `Example app listening at http://localhast:${port}`,
))
