const homeTitle = document.querySelector("#home h1");
const homeSubtitle = document.querySelector("#home h2");
const btnCheckWork = document.querySelector(".check-work");

function toggleNav() {
  const nav = document.getElementById("main-nav");
  nav.classList.toggle("visible");
}

function scrollHideElements() {
  let offsetHomeTitle = homeTitle.offsetTop;
  let offsetHomeSubtitle = homeSubtitle.offsetTop;
  let offsetBtnCheckWork = btnCheckWork.offsetTop;

  if (window.scrollY > offsetHomeTitle - 30) {
    homeTitle.classList.add("hidden");
  } else {
    homeTitle.classList.remove("hidden");
  }
  if (window.scrollY > offsetHomeSubtitle - 80) {
    homeSubtitle.classList.add("hidden");
  } else {
    homeSubtitle.classList.remove("hidden");
  }
  if (window.scrollY > offsetBtnCheckWork - 60) {
    btnCheckWork.classList.add("hidden");
  } else {
    btnCheckWork.classList.remove("hidden");
  }
}

document.addEventListener("scroll", scrollHideElements);
