const introLink = document.getElementById("intro-link");

const myWorkLinks = document.querySelectorAll(".my-work");
const learnMoreLinks = document.querySelectorAll(".learn-more");

const contactLink = document.getElementById("contact-link");
const links = document.getElementById("links");

const menuButton = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu");
const menuLinks = document.querySelectorAll(".ul-link");

// Define a function to execute when the display size is above a certain width
function executeOnLargeScreen() {
  // Your code for larger screens here

  introLink.addEventListener("click", () => {
    links.style.transform = "translateX(calc(50% - 75px))";
    introLink.classList.add("active");
    myWorkLinks.forEach((link) => {
      link.classList.remove("active");
    });
    learnMoreLinks.forEach((link) => {
      link.classList.remove("active");
    });
    contactLink.classList.remove("active");
  });

  myWorkLinks.forEach((link) => {
    link.addEventListener("click", () => {
      links.style.transform = "translateX(calc(25% - 75px))";
      introLink.classList.remove("active");
      myWorkLinks.forEach((link) => {
        link.classList.add("active");
      });
      learnMoreLinks.forEach((link) => {
        link.classList.remove("active");
      });
      contactLink.classList.remove("active");
    });
  });

  learnMoreLinks.forEach((link) => {
    link.addEventListener("click", () => {
      links.style.transform = "translateX(calc(-25% + 75px))";
      introLink.classList.remove("active");
      myWorkLinks.forEach((link) => {
        link.classList.remove("active");
      });
      learnMoreLinks.forEach((link) => {
        link.classList.add("active");
      });
      contactLink.classList.remove("active");
    });
  });
  contactLink.addEventListener("click", () => {
    links.style.transform = "translateX(calc(-50% + 75px))";
    introLink.classList.remove("active");
    myWorkLinks.forEach((link) => {
      link.classList.remove("active");
    });
    learnMoreLinks.forEach((link) => {
      link.classList.remove("active");
    });
    contactLink.classList.add("active");
  });

  console.log("Executing on large screen");
}

// Define a function to execute when the display size is below a certain width
function executeOnSmallScreen() {
  // Your code for smaller screens here

  menuButton.addEventListener("click", () => {
    // links.style.transform = "translateX(0)";
    links.style.display = "flex";
    closeMenuBtn.style.display = "flex";
    menuButton.style.display = "none";
  });
  closeMenuBtn.addEventListener("click", () => {
    // links.style.transform = "translateX(100vw)";
    links.style.display = "none";
    closeMenuBtn.style.display = "none";
    menuButton.style.display = "block";
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // links.style.transform = "translateX(100vw)";
      links.style.display = "none";
      closeMenuBtn.style.display = "none";
      menuButton.style.display = "block";
      menuLinks.forEach((inactiveLink) => {
        inactiveLink.classList.remove("active");
      });
      link.classList.add("active");
    });
  });

  console.log("Executing on small screen");
}

// Function to handle window resize
function handleResize() {
  if (window.innerWidth >= 768) {
    executeOnLargeScreen();
  } else {
    executeOnSmallScreen();
  }
}

// Initial check when the page loads
handleResize();

// Add an event listener to check on window resize
window.addEventListener("resize", handleResize);
