const nav = document.getElementById("navbar");

window.onscroll = function () { scrollShowNavbar() };

function scrollShowNavbar() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    nav.style.position = "fixed";
  } else {
    nav.style.position = "static";
  }
}