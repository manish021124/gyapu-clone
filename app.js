const toggleSwitch = document.getElementById("toggleswitch");

window.onscroll = function () { scrollShowNavbar() };
toggleSwitch.addEventListener('change', nightMode);

function scrollShowNavbar() {
  const nav = document.getElementById("secondNav");

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    nav.style.position = "fixed";
    nav.style.marginTop = "-40px";
  } else {
    nav.style.position = "static";
    nav.style.marginTop = "0";
  }
}

function nightMode(){
  document.body.classList.toggle("nightmode");
}
