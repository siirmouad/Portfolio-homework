var navHome = document.getElementById("navHome");
// var navContact = document.getElementById("navContact");
var navPortfolio = document.getElementById("navPortfolio");

var pageAboutMe = document.getElementById("pageAboutMe");
// var pageContact = document.getElementById("pageContact");
var pagePortfolio = document.getElementById("pagePortfolio");

navHome.addEventListener("click", function (event) {
  pageAboutMe.classList.remove("hide");
  // pageContact.classList.add("hide");
  pagePortfolio.classList.add("hide");
});
// navContact.addEventListener("click", function (event) {
//   pageAboutMe.classList.add("hide");
//   pageContact.classList.remove("hide");
//   pagePortfolio.classList.add("hide");
// });
navPortfolio.addEventListener("click", function (event) {
  pageAboutMe.classList.add("hide");
  // pageContact.classList.add("hide");
  pagePortfolio.classList.remove("hide");
});

//Slides JS
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
