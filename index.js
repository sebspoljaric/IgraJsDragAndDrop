function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  alert("Čestitamo pobijedili ste");
}

function reset1() {
  var container = document.getElementById("game1");
  container.innerHTML = html;
}
var html;
window.onload = function () {
  html = document.getElementById("game1").innerHTML;
};
