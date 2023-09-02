const play = document.querySelector(".fa-circle-play");
const pause = document.querySelector(".fa-circle-pause");
const next = document.querySelector(".fa-forward-step");
const previous = document.querySelector(".fa-backward-step");
const progress = document.querySelector("#progress");
const audio = document.querySelector("#audio");
const current_time = document.querySelector("#current-time");
const total_time = document.querySelector("#total-time");
const img = document.querySelector(".img");
const songName = document.querySelector("#name");
const down = document.querySelector(".fa-angle-down");
const dropdown_content = document.querySelector(".dropdown-content");
const closeModal = document.querySelector(".fa-xmark");
const all = document.querySelector(".all");

const list = [
  {
    id: 1,
    title: "Sanu eak pal chain na aave ",
    cover: "/cover/one.jpg",
    music: "/audio/one.mp3",
  },
  {
    id: 2,
    title: "Chandani - Sachet , Parampara",
    cover: "/cover/two.jpeg",
    music: "/audio/two.mp3",
  },
  {
    id: 3,
    title: "What Jhumka ? - Alia Bhat",
    cover: "/cover/three.jfif",
    music: "/audio/three.mp3",
  },
];

pause.style.display = "none";
dropdown_content.style.display = "none";
let index = 0;
img.src = list[index].cover;
audio.src = list[index].music;
songName.innerHTML = list[index].title;

down.addEventListener("click", () => {
  dropdown_content.style.display = "block";
  dropdown_content.classList.add("animation");

  while(all.firstChild){
    all.removeChild(all.firstChild);
  }

  list.forEach((e) => {
    const item = document.createElement("h3");
    item.classList.add("song");
    item.innerHTML = e.title;
    all.appendChild(item);
  });
});

closeModal.addEventListener("click", () => {
  dropdown_content.style.display = "none";
});

play.addEventListener("click", () => {
  const min = audio.duration / 60;
  total_time.innerHTML = min.toPrecision(3);
  setInterval(() => {
    let b = audio.currentTime ;
    let c = b/60 ;
    current_time.innerHTML =
      b < 60
        ? c.toLocaleString().split(".")[0]
        : c.toLocaleString().split(".")[0] +
          " : " +
          c.toLocaleString().split(".")[1];
    progress.value = (audio.currentTime / audio.duration) * 100;
  }, 1000);
  play.style.display = "none";
  pause.style.display = "flex";
  audio.play();
});

pause.addEventListener("click", () => {
  pause.style.display = "none";
  play.style.display = "flex";
  audio.pause();
});

audio.addEventListener("ended", () => {
  pause.style.display = "none";
  play.style.display = "flex";
  current_time.innerHTML = 0;
  progress.value = 0;
});

next.addEventListener("click", () => {
  audio.pause();
  pause.style.display = "none";
  play.style.display = "flex";
  current_time.innerHTML = 0;
  progress.value = 0;
  index = (index + 1) % list.length;
  audio.src = list[index].music;
  img.src = list[index].cover;
  songName.innerHTML = list[index].title;
});
