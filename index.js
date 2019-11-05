const express = require('express')
const app = express()

const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
  res.send('Welcome to my application')
})

app.listen(port, console.log(`Server running on port ${port}`))