let APIKey = 'FIIGtPUzcDNkk2LDSVgdYbNRTlJ0Y0E6iZz6smoZ';
let APIUrl = `https://api.nasa.gov/planetary/apod?api_key=${APIKey}`;

fetch(APIUrl)
  .then(response => {
    return response.json();
  })
  .then(data => {
    renderPOTD(data);
  })
  .catch(err => console.log('Der er sket en fejl', err));

function renderPOTD(data) {
    let pictureDivEl = document.querySelector('.picture');
    let picTextEl = document.querySelector('.picText');

    const pictureImg = document.createElement('img');
    pictureImg.src = data.url;
    pictureImg.alt = data.title;
    pictureDivEl.appendChild(pictureImg);
    picTextEl.textContent = data.explanation;
    picTextEl.style.maxWidth = '35ch'
    picTextEl.style.lineHeight = '1.3rem'
}
