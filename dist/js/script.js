// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var target    = $("#header-top, .sidebar-wrapper");

// On click
hamburger.addEventListener("click", function() {
    // Toggle class
    hamburger.classList.toggle("is-active");
    target.toggleClass("active");
});

var headerPad = (300 - ((window.innerWidth - 1170) / 2)) + 15;
var sheet = document.createElement('style');
sheet.innerHTML = "#header-top.active {padding-right: " + headerPad + "px;}";
document.body.appendChild(sheet);
