const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send({ bye: 'bud' })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
