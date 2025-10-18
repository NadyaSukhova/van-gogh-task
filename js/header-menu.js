let isPhoneScreen = false;
let previousWidth = window.innerWidth;
const toggleButton = document.querySelector(".toggle-nav");
const buttonImage = toggleButton.querySelector("img");
const mainHeader = document.querySelector(".main-header");
const navMenuPhone = document.querySelectorAll(".main-nav-phone");
const recommendedGoods = document.getElementsByClassName(
  "recommended-goods-h1"
)[0];
const hrPhone = document.querySelectorAll(".hr-phone");
const toggleNavButton = document.querySelector(".toggle-nav");

const desktopMenu = document.querySelector(".main-nav");
const phoneMenu = document.querySelector(".main-nav-phone");

function toggleMenu() {
  isPhoneScreen = !isPhoneScreen;

  if (isPhoneScreen) {
    mainHeader.classList.add("menu-open");
    buttonImage.src = "./images/Close.svg";
    toggleNavButton.setAttribute("aria-label", "Закрыть меню");
    for (let nav of navMenuPhone) {
      nav.classList.add("nav-open");
      nav.classList.remove("nav-closed");
    }
    for (let hr of hrPhone) {
      hr.classList.add("hr-open");
      hr.classList.remove("hr-closed");
    }
    recommendedGoods.classList.add("h1-lower");
    recommendedGoods.classList.remove("h1-up");
  } else {
    mainHeader.classList.remove('menu-open');
    buttonImage.src = "./images/Open.svg";
    toggleNavButton.setAttribute("aria-label", "Открыть меню");
    for (let nav of navMenuPhone) {
      nav.classList.add("nav-closed");
      nav.classList.remove("nav-open");
    }
    for (let hr of hrPhone) {
      hr.classList.add("hr-closed");
      hr.classList.remove("hr-open");
    }
    recommendedGoods.classList.remove("h1-lower");
    recommendedGoods.classList.add("h1-up");
  }
}

function windowResize() {
  if (window.innerWidth > 1160) {
    navMenuPhone.setAttribute("aria-hidden", "true");
    desktopNav.setAttribute("aria-hidden", "false");
    isPhoneScreen = false;
    for (let nav of navMenuPhone) {
      nav.classList.add("nav-closed");
      nav.classList.remove("nav-open");
    }
    for (let hr of hrPhone) {
      hr.classList.add("hr-closed");
      hr.classList.remove("hr-open");
    }
    buttonImage.src = "./images/Open.svg";
  } else {
    navMenuPhone.setAttribute("aria-hidden", "false");
    desktopNav.setAttribute("aria-hidden", "true");
    if (window.innerWidth < 1160 && previousWidth > 1160) {
      isPhoneScreen = false;
      for (let nav of navMenuPhone) {
        nav.classList.add("nav-closed");
        nav.classList.remove("nav-open");
      }
      for (let hr of hrPhone) {
        hr.classList.add("hr-closed");
        hr.classList.remove("hr-open");
      }
      buttonImage.src = "./images/Open.svg";
    }
  }
  previousWidth = window.innerWidth;
}

toggleButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", windowResize);
