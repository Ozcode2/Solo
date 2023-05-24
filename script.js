// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Set timer to make "word" id visible
setTimeout(function () {
  document.getElementById("word").classList.add("visible");
}, 1500);

// Set timer to make "letter" id visible
setTimeout(function () {
  document.getElementById("letter").classList.add("visible");
}, 3500);

// Set timer to make "type" id visible
setTimeout(function () {
  document.getElementById("type").classList.add("visible");
}, 3000);
