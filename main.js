// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  // Adding the .hidden class to the error modal initially
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");

  // Adding event listener to all hearts
  const likeGlyphs = document.querySelectorAll(".like-glyph");
  likeGlyphs.forEach((likeGlyph) => {
    likeGlyph.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (likeGlyph.textContent === EMPTY_HEART) {
            likeGlyph.textContent = FULL_HEART;
            likeGlyph.classList.add("activated-heart");
          } else {
            likeGlyph.textContent = EMPTY_HEART;
            likeGlyph.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          errorModal.classList.remove("hidden");
          errorModal.querySelector("#modal-message").textContent = error;
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
