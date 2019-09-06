// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles);
        response.data.articles.javascript.forEach(cardInfo =>{
            let card = cardCreator(cardInfo.headline, cardInfo.authorPhoto, cardInfo.authorName);
            cardContainer.appendChild(card);
        })
        response.data.articles.bootstrap.forEach(cardInfo =>{
            let card = cardCreator(cardInfo.headline, cardInfo.authorPhoto, cardInfo.authorName);
            cardContainer.appendChild(card);
        })
        response.data.articles.technology.forEach(cardInfo =>{
            let card = cardCreator(cardInfo.headline, cardInfo.authorPhoto, cardInfo.authorName);
            cardContainer.appendChild(card);
        })
        response.data.articles.jquery.forEach(cardInfo =>{
            let card = cardCreator(cardInfo.headline, cardInfo.authorPhoto, cardInfo.authorName);
            cardContainer.appendChild(card);
        })        
        response.data.articles.node.forEach(cardInfo =>{
            let card = cardCreator(cardInfo.headline, cardInfo.authorPhoto, cardInfo.authorName);
            cardContainer.appendChild(card);
        })
    })
    .catch(error => {
        console.log(error);
    });

    

    function cardCreator(headline, imgUrl, authorsName){
    const
        card = document.createElement('div'),
        headlineDiv = document.createElement('div'),
        authorDiv = document.createElement('div'),
        imgContainer = document.createElement('div'),
        authorImage = document.createElement('img'),
        author = document.createElement('span');

    card.appendChild(headlineDiv);
    card.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    authorDiv.appendChild(author);
    imgContainer.appendChild(authorImage);

    card.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    headlineDiv.textContent = headline;
    authorImage.src = imgUrl;
    author.textContent = authorsName;

    return card;
}