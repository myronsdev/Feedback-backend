const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
