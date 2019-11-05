const app = document.querySelector('#app')

const getAllMusics = () => {
  let musicList = []
  fetch('http://localhost:3000')
    .then(res => res.json())
    .then(data => data.forEach(music => musicList.push(`<p>${music.name}</p>`)))
    .then(() => app.innerHTML = (musicList.join('')))
    .catch(err => console.log(err))
}