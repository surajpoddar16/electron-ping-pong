document.getElementById('ping-cta').addEventListener('click', pingServer);

function pingServer() {
  fetch('https://api.github.com/users/surajpoddar16')
    .then(response => response.json())
    .then(data => {
      document.getElementById('pong-data').innerHTML = renderPong(data);
    });
}

function renderPong(data) {
  return `<img class="avatar mt-5" src="${data['avatar_url']}">`
}
