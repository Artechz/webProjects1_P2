const express = require('express')
const app = express()
const PORT = 8000

const STATIC = './src/';

app.use(express.static(STATIC));

app.listen(PORT, (err) => {
  if (err) console.log(err)
  console.log('Server listening on PORT', PORT)
})