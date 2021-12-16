const musicContainer = document.getElementById("music-container");
const title = document.getElementById("title");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");

const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

//song titles
const songs = [
  "cinematic-fairy-tale-story",
  "epic-heart",
  "hybrid-piano",
  "melody-of-nature",
  "motivational-inspiring-piano",
];

//keep track of song
let songIndex = 4;

//Initially load song details into DOM
loadSong(songs[songIndex]);

//update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");

  audio.pause();
}

//Event Listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
