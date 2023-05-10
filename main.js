// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButton = document.querySelectorAll('.like-glyph');
function likeAction(e) {
  const heart = e.target;
  mimicServerCall()
  .then(function(){
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.classname = 'activated-heart'
    } else {
      heart.innerText = EMPTY_HEART;
      heart.classname = '';
    } 
  })
  .catch(()=> {
    let modal = document.querySelector('#modal')
    modal.className = "";
    setTimeout(()=>modal.className= 'hidden', 3000);
  })
    
}

function hideError(){
  let modal = document.querySelector('#modal')
  modal.className = 'hidden';
}

for (let glyph of likeButton) {
  glyph.addEventListener('click', likeAction)}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
