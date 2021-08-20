const homeTitle = document.querySelector("#home h1");
const homeSubtitle = document.querySelector("#home h2");
const btnCheckWork = document.querySelector(".check-work");
const banner = document.querySelector("header");
const portfolioD = document.getElementById("portfolio-desc");

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

function bannerShadowed() {
  let offsetPortfolioD = portfolioD.offsetTop;
  if (window.scrollY > offsetPortfolioD - banner.offsetHeight) {
    banner.classList.add("shadowed");
  } else {
    banner.classList.remove("shadowed");
  }
}

document.addEventListener("scroll", scrollHideElements);
document.addEventListener("scroll", bannerShadowed);
