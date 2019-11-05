const app = require('../server')
const musicModel = require('../models/music')

module.exports = {
  get() {
    app.get('/', (req, res) => {
      res.json(musicModel)
    })
  },
  getMusicByName(musicName) {
    app.get('/music', (req, res) => {
      res.json(musicModel.filter(music => music.name.includes(musicName)))
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