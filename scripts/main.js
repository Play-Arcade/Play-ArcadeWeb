function openSection(contentSection) {
  var i;
  var x = document.getElementsByClassName("content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(contentSection).style.display = "block";
}
