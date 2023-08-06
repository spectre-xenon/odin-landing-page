function play() {
  const audio = document.getElementById("spear-of-justise");
  audio.play();
  audio.volume = 0.55;
}
function hover(img) {
  img.src = "./resources/imgs/soul_broken.png";
}

function hoverOut(img) {
  img.src = "./resources/imgs/soul.png";
}