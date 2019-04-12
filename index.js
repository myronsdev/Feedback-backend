const express = require('express')
const mongoose = require('mongoose')
require('./models/User')
require('./services/passport')

const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
})

const app = express()

require('./routes/authRoutes')(app)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
