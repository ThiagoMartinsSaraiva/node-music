const app = require('../server')

module.exports = {
  get() {
    app.get('/', (req, res) => {
      res.send('Welcome to the music list')
    })
  },
  getMusicByName(musicName) {
    app.get('/music', (req, res) => {
      res.send(`${musicName}`)
    })
  }
}