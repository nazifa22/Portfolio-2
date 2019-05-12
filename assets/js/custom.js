$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$(document).ready(function(){

    //typed JS
    var typed = new Typed('.typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 25,
        backSpeed: 15,
        loop: true
      });

    /*var typed = new Typed(".typed", {
      // Waits 1000ms after typing "First"
      strings: ["First ^1000 sentence.", "Second sentence."]
    });*/

});

//Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}