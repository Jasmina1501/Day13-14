var elements = document.getElementsByClassName("column");
var i;
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var overlay = document.getElementById("overlay");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  overlay.onclick = "../image01.html"
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}