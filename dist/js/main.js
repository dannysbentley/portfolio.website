// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
var form = document.getElementById("wrapper");

// Set Inital State of menue
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(items => items.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

function validation() {
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;

  error_message.style.padding = "10px";

  if (name.length < 5) {
    text = "Please enter valid name";
    error_message.innerHTML = text;
    return false;
  }

  if (subject.length < 4) {
    text = "Please enter valid subject";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length < 10) {
    text = "Please enter valid phone number";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || phone.length < 6) {
    text = "Please enter valid email";
    error_message.innerHTML = text;
    return false;
  }

  if (message.length <= 140) {
    text = "Please enter more than 140 characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("form has been submitted sucessfully");
  return false;
}
