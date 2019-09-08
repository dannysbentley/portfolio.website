// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
var video = document.getElementById("preojct-video");

// Set Inital State of menue
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    // remove controls from video
    if (video != null) {
      toggleControls();
    }

    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(items => items.classList.remove("show"));

    // add controls from video
    if (video != null) {
      toggleControls();
    }
    // Set Menu State
    showMenu = false;
  }
}

function toggleControls() {
  if (video.hasAttribute("controls")) {
    video.removeAttribute("controls");
  } else {
    video.setAttribute("controls", "controls");
  }
}
