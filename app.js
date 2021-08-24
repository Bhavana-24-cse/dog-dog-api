console.log('hello')

const container = document.getElementById('image-container');

function fetchtheDogPictures() {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(rawResponse) {
    return rawResponse.json()
  }).then(function(usableData) {
    const image = document.createElement('img');
    image.src = usableData.message
    container.appendChild(image)
  })
}