const app = require('../server')

module.exports = {
  get() {
    app.get('/', (req, res) => {
      res.send('Welcome to the music list')
    })
  }
}