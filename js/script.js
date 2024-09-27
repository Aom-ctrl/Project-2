function playVideo(card) {
  const video = card.querySelector(".back .video");
  video.play();
}

function pauseVideo(card) {
  const video = card.querySelector(".back .video");
  video.pause();
}
