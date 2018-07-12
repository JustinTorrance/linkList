var websiteTitleInput = document.querySelector('.website-title-input');
var urlInput = document.querySelector('.url-input');
var enterButton = document.querySelector('.button-enter');
var cardWebsiteTitle = document.querySelector('.card-website-title');
var cardURL = document.querySelector('.card-url');
var cardSection = document.querySelector('.card-section');
var read = document.querySelector('.button-read');
var cardInformation = document.querySelector('.card-information')
var counter = 0;
var readCounter = 0;
var totalBookmarks = document.querySelector('.total-bookmarks');
var totalReadBookmarks = document.querySelector('.total-read-bookmarks');
var bookmarkCounters = document.querySelector('.bookmark-counters');
var readCounters = document.querySelectorAll('.read')

enterButton.addEventListener('click', createCard);
websiteTitleInput.addEventListener('keyup', enableEnter);
urlInput.addEventListener('keyup', enableEnter);

// cardInformation.addEventListener('click', function(event) {
//   var clickedButton = event.target;
//   var article = event.target.parentNode.parentNode;
//   if (clickedButton.className === 'button-read') {
//     article.classList.toggle('read');
//     if (article.classlist.contains('read')) {
//       increaseReadCounter()
//     } else {
//      } decreaseReadCounter()
//   } else if (clickedButton.className === 'button-delete') {
//     article.remove();
//     counter--;
//     decreaseCounter();
//   };

  // console.log(document.querySelectorAll('.read').length)

cardInformation.addEventListener('click', function(event) {
  var clickedButton = event.target;
  var article = event.target.parentNode.parentNode;
  if (clickedButton.className === 'button-read' && !article.classList.contains('card-read-class-change')) {
    clickedButton.classList.add('read-class-change');
    article.classList.add('card-read-class-change');
    readCounter++;
    increaseReadCounter();
  } else if (clickedButton.className === 'button-read' && article.classList.contains('card-read-class-change')) {
    console.log('yes!')
    clickedButton.classList.remove('read-class-change');
    article.classList.remove('card-read-class-change');
    readCounter--;
    decreaseReadCounter()
  } else if (clickedButton.className === 'button-delete') {
    if (article.classList.contains('card-read-class-change')) {
      readCounter--;
      decreaseReadCounter();
    } 
    article.remove();
    counter--;
    decreaseCounter();
  }
});

function enableEnter() {
  var inputLength = (websiteTitleInput.value.length * urlInput.value.length);
  if (inputLength === 0) {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  };
};

function createCard() {
  var title = websiteTitleInput.value;
  var url = urlInput.value;
  var newCard = document.createElement("article");
  newCard.innerHTML = (`  
    <section class="card">
      <article class="card-title-article">
        <h1 class="card-website-title">${title}</h1>
      </article>
      <article class="card-url-article">
        <p class="card-url">${url}</p>
      </article>
      <article class="read-delete-article">
        <button class="button-read">Read</button>
        <button class="button-delete">Delete</button>
      </article>
    </section>
  </section>`);
  cardInformation.appendChild(newCard);
  counter++; 
  increaseCounter();
};


function increaseCounter() {
  bookmarkCounters.innerHTML = (`<p class="total-counter">Bookmarks: ${counter} </p>`);
}

function decreaseCounter() {
  bookmarkCounters.innerHTML = (`<p class="total-counter">Bookmarks: ${counter} </p>`);
}

function increaseReadCounter() {
  readCounters.innerHTML = (`<p class="read-counter">Read: ${readCounter} </p>`);
}

function decreaseReadCounter() {
  readCounters.innerHTML = (`<p class="read-counter">Read: ${readCounter} </p>`);
}



