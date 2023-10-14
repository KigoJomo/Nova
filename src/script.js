// index.js

//.nav_a
//.slider
//home about portfolio contact

const links = document.querySelectorAll(".nav_a");

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute("id");
      const slider = document.getElementById("slider");

      switch (sectionId) {
        case "home":
          slider.style.left = "0";
          break;
        case "about":
          slider.style.left = "100px";
          break;
        case "portfolio":
          slider.style.left = "200px";
          break;
        case "contact":
          slider.style.left = "300px";
          break;
        default:
          slider.style.left = "0";
      }

      links.forEach((link, index) => {
        link.classList.toggle(
          "active",
          index === ["home", "about", "portfolio", "contact"].indexOf(sectionId)
        );
      });
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  observer.observe(section);
});

const port_item = document.querySelectorAll(".port_item");
const right = document.getElementById("portfolioScroll");
const objectHeight = right.clientHeight;

right.addEventListener("scroll", () => {
  const active_index = Math.floor(right.scrollTop / objectHeight);

  port_item.forEach((item, index) => {
    if (index === active_index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

const gallery = document.querySelector(".gallery");
const dots = document.querySelectorAll(".dot");
const itemWidth = gallery.clientWidth;

gallery.addEventListener("scroll", () => {
  const activeIndex = Math.floor(gallery.scrollLeft / itemWidth);

  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
});

const slides = document.querySelectorAll(".slide");
var slideIndex = 0;
var slideSpeed = 0.05;
var slideDelay = 6000;

function slidePlay() {
  var nextSlideIndex = slideIndex + 1;

  if (nextSlideIndex >= slides.length) {
    nextSlideIndex = 0;
  }

  var nextSlidePosition =
    slides[nextSlideIndex].offsetLeft - gallery.offsetLeft;

  gallery.scrollTo({
    left: nextSlidePosition,
    behavior: "smooth",
  });

  slideIndex = nextSlideIndex;
  setTimeout(slidePlay, slideDelay);
}
setTimeout(slidePlay, slideDelay);

const leftButton = document.getElementById("left_btn");
const rightButton = document.querySelector(".right_btn");
const revContainer = document.querySelector(".rev_cont");

// Scroll to the left when left button is clicked
leftButton.addEventListener("click", () => {
  revContainer.scrollBy({
    left: -300, // Adjust this value based on your review item width
    behavior: "smooth",
  });
});

// Scroll to the right when right button is clicked
rightButton.addEventListener("click", () => {
  revContainer.scrollBy({
    left: 300, // Adjust this value based on your review item width
    behavior: "smooth",
  });
});
