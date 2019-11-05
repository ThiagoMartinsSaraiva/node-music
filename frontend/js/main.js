const app = document.querySelector('#app')
const inputMusicName = document.querySelector('#musicName')

const getAllMusics = () => {
  let musicList = []
  fetch('http://localhost:3000')
    .then(res => res.json())
    .then(data => data.forEach(music => musicList.push(`<p onclick='removeMusic()'>${music.name}</p>`)))
    .then(() => app.innerHTML = (musicList.join('')))
    .catch(err => console.log(err))
}

const getMusicByName = () => {
  let musicName = inputMusicName.value
  let musicList = []
  fetch('http://localhost:3000/music', {
    headers: { name: musicName }
  })
    .then(res => res.json())
    .then(data => data.forEach(music => musicList.push(`<p onclick='removeMusic()'>${music.name}</p>`)))
    .then(() => app.innerHTML = (musicList.join('')))
    .catch(err => console.log(err))
}

const removeMusic = () => {
  app.removeChild(event.target)
}