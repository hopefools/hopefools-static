// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var target    = $(".fixed-top, .sidebar-wrapper");

// On click
hamburger.addEventListener("click", function() {
    // Toggle class
    hamburger.classList.toggle("is-active");
    target.toggleClass("active");
});

var headerPad = (300 - ((window.innerWidth - 1170) / 2)) + 15;
var sheet = document.createElement('style');
sheet.innerHTML = ".fixed-top.active {padding-right: " + headerPad + "px;}";
document.body.appendChild(sheet);

var anchor = $('a[href^="#"]');
anchor.on('click',function (e) {
  e.preventDefault();

  var target = this.hash;
  var $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top - 30
  }, 900, 'swing');
});

var hero = $('#intro');
var height = window.innerHeight - 60;
hero.css({"min-height" : height + "px"});
