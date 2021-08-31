// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeGlyph = document.querySelectorAll('.like-glyph');
const hidden = document.querySelector('.hidden')
const modalMessage = document.getElementById("modal-message")

 likeGlyph.forEach(like => like.addEventListener('click', event => {
   mimicServerCall()
    .then(results => {
      const glyph = event.target;
      if (glyph.innerText == EMPTY_HEART) {
        glyph.textContent = FULL_HEART;
        glyph.classList.add('activated-heart');
      } else {
        glyph.textContent = EMPTY_HEART;
        glyph.classList.remove('activated-heart');
      };
    })
    .catch(error => {
      modalMessage.textContent = error 
      hidden.classList.remove('hidden')
      setTimeout(() => { hidden.classList.add('hidden'); }, 3000);
    });
 }));


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
