var websiteTitleInput = document.querySelector('.website-title-input');
var urlInput = document.querySelector('.url-input');
var enterButton = document.querySelector('.button-enter');
var cardWebsiteTitle = document.querySelector('.card-website-title');
var cardURL = document.querySelector('.card-url');
var cardSection = document.querySelector('.card-section');
var read = document.querySelector('button-read')
var delete = document.querySelector('.button-delete')

enterButton.addEventListener('click', createCard);

function createCard() {
  var newCard = document.createElement("article")
  newCard.innerHTML = (`  
    <section class="card-section">
    <section class="card">
      <article class="card-title-article">
        <h1 class="card-website-title">${websiteTitleInput.value}</h1>
      </article>

      <article class="card-url-article">
        <p class="card-url">${urlInput.value}</p>
      </article>

      <article class="read-delete-article">
        <button class="button-read">Read</button>
        <button class="button-delete">Delete</button>
      </article>
    </section>
  </section>`);
  cardSection.appendChild(newCard);
}
