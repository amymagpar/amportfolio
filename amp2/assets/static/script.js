// Get the button
const mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("animate-reverse");
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("animate-reverse");
    mybutton.classList.add("hidden");
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

const navbar = document.getElementById("navbar");

// start mobile menu hide
const mobileMenu = document.getElementById("myTopnav");

function onScroll() {
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition <= 0) {
    lastScrollPosition = 0;
    navbarTop = 0;

    if (position !== "absolute") {
      transition = true;
    } else {
      transition = false;
    }
    position = "absolute";
  } else {
    if (currentScrollPosition > lastScrollPosition) {
      mobileMenu.classList.add("hidden", "topnav");

      if (position !== "absolute") {
        transition = true;
      } else {
        transition = false;
      }
      position = "absolute";

      let { top, height } = navbar.getBoundingClientRect();
      navbarTop = currentScrollPosition + Math.max(top, -height);
    } else {
      const { top } = navbar.getBoundingClientRect();

      if (top >= 0) {
        navbarTop = 0;

        if (position !== "fixed") {
          transition = true;
        } else {
          transition = false;
        }
        position = "fixed";
      }
    }

    lastScrollPosition = currentScrollPosition;
  }
  navbar.style = `position: ${position}; top: ${navbarTop}px; transition: ${transition ? "none" : "300ms linear"}`;
}

window.addEventListener("scroll", onScrollThrottled, { passive: true });

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveNav() {
  var x = document.getElementById("myTopnav");
  if (x.classList.contains("topnav")) {
    x.classList.remove("hidden", "topnav");
  } else {
    x.classList.add("hidden", "topnav");
  }
}

// check scroll to bottom
window.onscroll = function (ev) {
  backtotop = document.getElementById("btn-back-to-top");
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    console.log("bottom");
    backtotop.classList.add("!animate-bounce");
    backtotop.classList.add("!bg-accent");
  } else {
    backtotop.classList.remove("!animate-bounce");
    backtotop.classList.remove("!bg-accent");
  }
};

// scroll animation https://alvarotrigo.com/blog/css-animations-scroll/
function reveal() {
  var reveals = document.querySelectorAll("img");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();
// To check the scroll position on page load
// END scroll animation https://alvarotrigo.com/blog/css-animations-scroll/
