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

urlInput.addEventListener('keyup', enterButton);

enterButton.addEventListener('click', createCard);
cardInformation.addEventListener('click', function(event) {
  console.log('hello')
  var clickedButton = event.target;
  // console.log(event.target);
  var article = event.target.parentNode.parentNode;

  if (clickedButton.className === 'button-read') {
    console.log('hello')
    clickedButton.classList.add('read-class-change')
    article.classList.add('card-read-class-change');
  } else {
    clickedButton.classList.remove('read-class-change')
    article.classList.remove('card-read-class-change');
  };
  
  if (clickedButton.className === 'button-delete') {
    article.remove();
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


function createCard() {
  var title = websiteTitleInput.value;
  var url = urlInput.value;
  var newCard = document.createElement("article");
  // if (websiteTitleInput.value = " ") {
  //   alert("You must enter a valid website title and url")
  // } else {
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
};



function enableButton() {
  if (websiteTitleInput.value || urlInput.value = " ") {
    enterButton.disabled = false;
  }
}


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
