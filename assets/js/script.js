//definere variable og tideler den værdi i form af API key. 
let APIKey = 'FIIGtPUzcDNkk2LDSVgdYbNRTlJ0Y0E6iZz6smoZ';
//API Adresse ved at benytte string interpolation.
let APIUrl = `https://api.nasa.gov/planetary/apod?api_key=${APIKey}`;

//henter data fra APIUrl variabel via fetch.
fetch(APIUrl)
//return reponse.json, konverterer data fra fetch til json.
  .then(response => {
    return response.json();
  })
  .then(data => {
    //kalder funktionen renderPOTD, som sørger for at de rigtige ting bliver vist på HTML siden.
    renderPOTD(data);
  })
  //Udskriver eventuelle fejl til konsollen med beskeden "Der er sket en fejl.
  .catch(err => console.log('Der er sket en fejl', err));

//definerer funktionen
function renderPOTD(data) {
    //fanger de relevante DOM elementer med querySelector
    let pictureDivEl = document.querySelector('.picture');
    let picTextEl = document.querySelector('.picText');

    //opretter et nyt img element, sætter src til data.url fra json og alt til data.title-
    const pictureImg = document.createElement('img');
    pictureImg.src = data.url;
    pictureImg.alt = data.title;
    //Appender det nyt img elementer til den tidligere valgte DOM element.
    pictureDivEl.appendChild(pictureImg);
    //Indsætter billedteksten på samme måde som img elemtentets src og alt tekst. 
    picTextEl.textContent = data.explanation;
    //basic styling til billedeteksten. 
    picTextEl.style.maxWidth = '35ch'
    picTextEl.style.lineHeight = '1.3rem'
}
