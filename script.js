var websiteTitleInput = document.querySelector('.website-title-input');
var urlInput = document.querySelector('.url-input');
var enterButton = document.querySelector('.button-enter');
var cardWebsiteTitle = document.querySelector('.card-website-title');
var cardURL = document.querySelector('.card-url');
var cardSection = document.querySelector('.card-section');
var read = document.querySelector('.button-read');
// var deleteButton = document.querySelector('.button-delete');
// var addClass = document.querySelector('.add-class');
var cardInformation = document.querySelector('.card-information')
var counter = 0;
var readCounter = 0;
var totalBookmarks = document.querySelector('.total-bookmarks');
var totalReadBookmarks = document.querySelector('.total-read-bookmarks');
var bookmarkCounters = document.querySelector('.bookmark-counters');
var readCounters = document.querySelector('.read-counters')
// urlInput.addEventListener('keyup', enterButton);

enterButton.addEventListener('click', createCard);
cardInformation.addEventListener('click', function(event) {
  console.log('hello')
  var clickedButton = event.target;
  // console.log(event.target);
  var article = event.target.parentNode.parentNode;

  if (clickedButton.className === 'button-read' && !article.classList.contains('card-read-class-change')) {
    console.log('hello')
    clickedButton.classList.add('read-class-change')
    article.classList.add('card-read-class-change');
    readCounter++;
    increaseReadCounter();
  } else if (clickedButton.className === 'button-read' && article.classList.contains('card-read-class-change')) {
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
};
})

// $( "button" ).click(function() {
//   $( "p" ).remove();

// cardInformation.addEventListener('click', function(event) {
//   console.log('hello')
//   var clickedButton = event.target;
//   console.log(event.target);
//   var article = event.target.parentNode;

//   if (clickedButton.className === 'button-delete') {
//     li.remove();
//   } 
// });

websiteTitleInput.addEventListener('keyup', enableEnter);
urlInput.addEventListener('keyup', enableEnter);
// enterButton.addEventListener('click', )

function enableEnter() {
  var inputLength = (websiteTitleInput.value.length * urlInput.value.length);
  if (inputLength === 0) {
    enterButton.disabled = true;
    // window.alert('Please enter a title and URL for your bookmark');
  } else {
    enterButton.disabled = false;
  };
};

//if websiteTitleInput.value.length > 0 {enterButton.disabled = true;}

function createCard() {
  var title = websiteTitleInput.value;
  var url = urlInput.value;
  var newCard = document.createElement("article");
  // if (title = " ") {
  //   enterButton.disabled = true;
  //   alert("You must enter a valid website title and url")
  // }; 
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


// function enableButton() {
//   if (websiteTitleInput.value || urlInput.value = " ") {
//     enterButton.disabled = false;
//   }
// }


// CLEAR ALL
// enterButton.addEventListener('click', createCard);
// cardInformation.addEventListener('click', function(event) {
//   console.log('hello')
//   var clickedButton = event.target;
//   // console.log(event.target);
//   var article = event.target.parentNode;

//   if (clickedButton.className === 'button-delete') {
//     console.log('delete this bitch')
//     cardSection.removeChild(cardInformation)
//     ;
//   } 
// });


// addClass.addEventListener('click', function() { 
//   button-read.classList.add('read-class-change');
// });



// addClass.addEventListener('click', function() { 
//   button-read.classList.add('read-class-change');
// });
