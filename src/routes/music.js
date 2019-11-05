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
  },
  addMusic() {
    app.post('/music', (req, res) => {
      res.send('Music added succefully!')
    })
  },
  deleteMusic() {
    app.delete('/music/:id', (req, res) => {
      res.send('Music deletted succefully!')
    })
  }
}