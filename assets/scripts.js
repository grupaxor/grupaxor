function showNavbar() {
  var x = document.getElementById("header__navbar-mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}