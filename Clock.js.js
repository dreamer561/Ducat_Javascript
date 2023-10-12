let CURRtime = document.getElementById("time");

function updateClock() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  var time = hours + ":" + minutes + ":" + seconds;

  CURRtime.innerText = time;
}
updateClock();

setInterval(updateClock, 1000);