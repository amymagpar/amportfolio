// Combined JavaScript file
console.log("Combined JavaScript file loaded");
// Head Component (from head.js)
document.addEventListener("DOMContentLoaded", () => {
  const headContent = `
  <title>A. Parness | Home</title>


    <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />

<link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
<style>

df-messenger {
  z-index: 999;
  position: fixed;
  --df-messenger-fomt-color: #000;
  --df-messenger-font-family: Google Sans;
  --df-messenger-font-family: Inter Var;
  --df-messenger-chat-background: #f3f6fc;
  --df-messenger-message-user-background: #d3e3fd;
  --df-messenger-message-bot-background: #fff;
  --df-messenger-chat-bubble-icon-color: #fff;
  --df-messenger-chat-bubble-background: #88bfcf;
  bottom: 16px;
  right: 16px;
}



.animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.animate-right{position:-300px;opacity: 0;animation:animateright 0.4s forwards;animation-delay: 150ms;}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}
.animate-left-1{position:relative;opacity: 0;animation:animateleft-1 0.4s forwards;animation-delay: 300ms;}@keyframes animateleft-1{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.animate-right-1{position:-300px;opacity: 0;animation:animateright-1 0.4s forwards;animation-delay: 450ms;}@keyframes animateright-1{from{right:-300px;opacity:0} to{right:0;opacity:1}}
.animate-left-2{position:relative;opacity:0;animation:animateleft-2 0.4s forwards;animation-delay: 600ms}@keyframes animateleft-2{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.animate-right-2{position:-300px;opacity: 0;animation:animateright-2 0.4s forwards;animation-delay: 750ms;}@keyframes animateright-2{from{right:-300px;opacity:0} to{right:0;opacity:1}}
.animate-left-3{position:relative;opacity:0;animation:animateleft-3 0.4s forwards;animation-delay: 900ms}@keyframes animateleft-3{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.animate-right-3{position:-300px;opacity: 0;animation:animateright-3 0.4s forwards;animation-delay: 1050ms;}@keyframes animateright-3{from{right:-300px;opacity:0} to{right:0;opacity:1}}

.animate-opacity{opacity:0;animation:opac 0.8s forwards}@keyframes opac{from{opacity:0} to{opacity:1}}

html{scroll-behavior: smooth;}

img {
  position: relative;
  transform: translateY(0px);
  transition: 1s all ease;
}
img.active {
  transform: translateY(0);
  opacity: 1;
}
.reveal {
  opacity: 0;
}

</style>
`;
  document.head.insertAdjacentHTML('beforeend', headContent);
});

// Components (from components.js)
// Head component
function insertHead() {
  const nav = `<script>console.log("head");</script>`;

  // Insert the navigation at the start of the body
  document.body.insertAdjacentHTML('afterbegin', head);
}

// Navigation component
function insertNavigation() {
  const nav = `<header id="navbar" class=" w-full fixed top-0 z-50 bg-white border-0 border-b border-accent shadow-md text-sm lg:text-base 2xl:text-lg tracking-wide">
    <div class="container px-4 mx-auto navbar p-0 h-10 sm:h-12">
      <div class="navbar-start uppercase left-0">
        <ul class="list-none">
        <li>
        <a class="font-light" href="/">Amy Parness</a>
        </li>
        </ul>
      </div>
      <div class="navbar-center flex-grow">
      </div>
      <div class="navbar-end">
      <ul id="myTopnav" class="
        transition-all
        ease-in-out
        overflow-hidden
        max-h-0
        sm:max-h-full
        sm:flex
        shadow-md
        sm:shadow-none
        text-sm
        pb-0
        sm:text-base
        border-t-0
        border-l-0
        border-r-0
        font-light
        list-none
        flex-col
        sm:flex-row
        absolute
        sm:relative
        top-[40px]
        sm:top-0
        right-0
        sm:p-0
        sm:border-0
        border-accent
        w-full
        sm:w-auto
        bg-white
        ease-in-out
        border
        sm:border-0
        border-accent
        ">
            <li id=""  class="py-3 px-4" ><a href="/projects/">Projects</a></li>
            <li id=""  class="py-3 px-4" ><a href="/cv/">CV</a></li>
            <li id=""  class="py-3 px-4 pb-6 sm:pb-3 sm:pl-4" ><a href="/writing/">Writing</a></li>
         </ul>
            <div class="block sm:hidden">
              <a href="javascript:void(0);" class="icon" onclick="responsiveNav()">
              </a>
           </div>
           <div class="block sm:hidden">
      <a href="javascript:void(0);" class="icon" onclick="responsiveNav()">
              <img id="icon-closed" src="/static/images/ellipsis.svg" alt="hamburger menu" class="w-6 h-6">
              <img id="icon-open" src="/static/images/ellipsis-closed.svg" alt="hamburger menu" class="hidden w-6 h-6">
      </a>
    </div>
      </div>
    </div>
  </header>`;

  // Insert the navigation at the start of the body
  document.body.insertAdjacentHTML('afterbegin', nav);
}

function insertFooter() {
  const footer = `<footer class="bg-white w-full text-center text-sm lg:text-base 2xl:text-lg">
    <div class="container mx-auto flex px-4 py-2 flex-col sm:flex-row justify-between items-center">
      <div class="text-center sm:text-left ">
        <p class="font-light text-xs text-primary mb-0">&copy; 2025 Amy Parness</p>
      </div>
      <!--
      <div class="flex space-x-4">
        <a href="https://github.com/amyparness" target="_blank" class="text-gray-600 hover:text-accent">
          <i class="fa fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/amyparness" target="_blank" class="text-gray-600 hover:text-accent">
          <i class="fa fa-linkedin"></i>
        </a>
        -->
      </div>
    </div>
  </footer>`;

  // Insert the footer at the end of the body
  document.body.insertAdjacentHTML('beforeend', footer);
}

// Execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', insertNavigation);
document.addEventListener('DOMContentLoaded', insertFooter);

// Scroll and Navigation Script (from script.js)
// Get the button
const mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls, handle button visibility and animation
const scrollFunction = () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const totalHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;
  const scrolledHeight = window.scrollY;
  const scrolledToBottom = viewportHeight + scrolledHeight >= totalHeight - 50;

  // At the top (first 20px)
  if (scrollTop <= 20) {
    mybutton.classList.add("animate-reverse");
    mybutton.classList.add("hidden");
    mybutton.classList.remove("!animate-bounce");
    mybutton.classList.remove("!bg-accent");
  }
  // At the bottom
  else if (scrolledToBottom) {
    mybutton.classList.remove("animate-reverse");
    mybutton.classList.remove("hidden");
    mybutton.classList.add("!animate-bounce");
    mybutton.classList.add("!bg-accent");
  }
  // In between
  else {
    mybutton.classList.remove("animate-reverse");
    mybutton.classList.remove("hidden");
    mybutton.classList.remove("!animate-bounce");
    mybutton.classList.remove("!bg-accent");
  }
};

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);

// hiding main nav
let throttling = false;

function onScrollThrottled() {
  if (!throttling) {
    throttling = true;
    requestAnimationFrame(() => {
      onScroll();
      throttling = false;
    });
  }
}

let navbarTop = 0;
let transition = true;
let position = "absolute";
let lastScrollPosition = 0;

function onScroll() {
  const currentScrollPosition = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = transition ? "transform 0.3s ease-in-out" : "none";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
    navbar.style.transition = transition ? "transform 0.3s ease-in-out" : "none";
  }

  lastScrollPosition = currentScrollPosition;
}

window.addEventListener("scroll", onScrollThrottled, { passive: true });

function responsiveNav() {
  const x = document.getElementById("myTopnav");
    const iconClosed = document.getElementById("icon-closed");
  const iconOpen = document.getElementById("icon-open");

  if (x.classList.contains("max-h-0")) {
    console.log("true");
    x.classList.remove("max-h-0");
    x.classList.add("max-h-screen");
        iconClosed.classList.add("hidden");
    iconOpen.classList.remove("hidden");
  } else {
    console.log("false");
    x.classList.add("max-h-0");
    x.classList.remove("max-h-screen");
        iconClosed.classList.remove("hidden");
    iconOpen.classList.add("hidden");
  }
}

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();
// To check the scroll position on page loa