//Sticky navbar start

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//sticky navbar end

//AOS plugin start

$(document).ready(function () {
  AOS.init({
    duration: 2000,
  });
});

//AOS plugin end
