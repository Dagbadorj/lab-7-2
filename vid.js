var video = document.getElementById("myVideo");
var btn = document.getElementById("myBt");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Black Hole";
    document.getElementById("faad").style.opacity = "0" 
  } else {
    video.pause();
    btn.innerHTML = "Black Hole";
    document.getElementById("faad").style.opacity = "1"
  }
}
