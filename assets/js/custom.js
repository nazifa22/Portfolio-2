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

    $('.progress-bar').css({
      // 'background': '#1dbf73'
    })

    $(".html").animate({
      'width': '98%'
    }, 2000);
  
    $(".css").animate({
      'width': '98%'
    }, 2000);
  
    $(".bootstrap").animate({
      'width': '95%'
    }, 2000);
  
    $(".jquery").animate({
      'width': '90%'
    }, 2000);
  
    $(".js").animate({
      'width': '60%'
    }, 2000);
  
    $(".sass").animate({
      'width': '90%'
    }, 2000);
  
    $(".php").animate({
      'width': '50%'
    }, 2000);
  
    $(".db").animate({
      'width': '60%'
    }, 2000);
  
    $(".c").animate({
      'width': '50%'
    }, 2000);

    $(".logo").draggable(function(){
      $("#return-to-top").css({
        'position': 'absolute'
      });
    });
  
    $(".scroll-to-top").draggable();

});

document.getElementById("return-to-top").style.display = "none";

$(window).scroll(function(){
  if($(this).scrollTop() >= 10)
    {
      document.getElementById("return-to-top").style.display = "";
    }
    else 
    {
      document.getElementById("return-to-top").style.display = "none";
    }
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