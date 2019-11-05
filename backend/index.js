const cors = require('cors')
const app = require('./src/server')
const port = 3000 || process.env.PORT
const musicRoutes = require('./src/routes/music')

app.use(cors())

musicRoutes.get()
musicRoutes.getMusicByName("throne")
musicRoutes.addMusic()
musicRoutes.deleteMusic()

app.listen(port, console.log(`Server running on port ${port}`))