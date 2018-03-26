 // import inView from './in-view.min.js';

 //
 inView('.blog-header-container')
   .on('exit', function() {
     document.getElementById("navDots").style.display = 'inline-block'
   })
   .on('enter', function() {
     document.getElementById("navDots").style.display = 'none'
   });

 $(window).scroll(function() {
   if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
     $('#return-to-top').fadeIn(200); // Fade in the arrow
   } else {
     $('#return-to-top').fadeOut(200); // Else fade out the arrow
   }
 });
 $('#return-to-top').click(function() { // When arrow is clicked
   $('body,html').animate({
     scrollTop: 0 // Scroll to top of body
   }, 500);
 });

 $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
       $('.other-projects').fadeIn(200);
   } else {
       $('.other-projects').fadeOut(200);
   }
});

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
   if (n > slides.length) {
     slideIndex = 1
   }
   if (n < 1) {
     slideIndex = slides.length
   }
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" dot-active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " dot-active";
 }
