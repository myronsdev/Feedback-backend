const express = require('express')
require('./services/passport')

const PORT = process.env.PORT

const app = express()

require('./routes/authRoutes')(app)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
