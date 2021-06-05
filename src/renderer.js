document.getElementById('ping-cta').addEventListener('click', pingServer);

function pingServer() {
  fetch('http://localhost:8080/api/ping')
    .then(response => response.json())
    .then(data => {
      document.getElementById('pong-data').innerHTML = renderPong(data);
    });
}

function renderPong(data) {
  return `
  <img class="avatar" src="./assets/icon.png">
  `;
}
