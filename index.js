const app = require('./src/server')
const port = 3000 || process.env.PORT
const musicRoutes = require('./src/routes/music')

musicRoutes.get()
musicRoutes.getMusicByName("Drown")
musicRoutes.addMusic()
musicRoutes.deleteMusic()

app.listen(port, console.log(`Server running on port ${port}`))