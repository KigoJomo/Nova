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

  // A common function to handle link clicks
  function handleLinkClick(link) {
    introLink.classList.remove("active");
    myWorkLinks.forEach((myWorkLink) => myWorkLink.classList.remove("active"));
    learnMoreLinks.forEach((learnMoreLink) =>
      learnMoreLink.classList.remove("active")
    );
    contactLink.classList.remove("active");
    link.classList.add("active");
  }

  // Event listeners for each link
  introLink.addEventListener("click", () => handleLinkClick(introLink));
  myWorkLinks.forEach((link) => {
    link.addEventListener("click", () => handleLinkClick(link));
  });
  learnMoreLinks.forEach((link) => {
    link.addEventListener("click", () => handleLinkClick(link));
  });
  contactLink.addEventListener("click", () => handleLinkClick(contactLink));

  console.log("Executing on a large screen");
}

// Define a function to execute when the display size is below a certain width

function executeOnSmallScreen() {
  // Your code for smaller screens here

  menuButton.addEventListener("click", () => {
    links.style.height = "100vh";
    // links.style.display = "flex";
    closeMenuBtn.style.display = "flex";
    menuButton.style.display = "none";
  });
  closeMenuBtn.addEventListener("click", () => {
    links.style.height = "0";
    // links.style.display = "none";
    closeMenuBtn.style.display = "none";
    menuButton.style.display = "block";
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      links.style.height = "0";
      // links.style.display = "none";
      closeMenuBtn.style.display = "none";
      menuButton.style.display = "block";
      menuLinks.forEach((inactiveLink) => {
        inactiveLink.classList.remove("active");
      });
      link.classList.add("active");
    });
  });

  myWorkLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuLinks.forEach((inactiveLink) => {
        inactiveLink.classList.remove("active");
      });
      myWorkLinks.forEach((workLink) => {
        workLink.classList.add("active");
      });
    });
  });

  learnMoreLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuLinks.forEach((inactiveLink) => {
        inactiveLink.classList.remove("active");
      });
      learnMoreLinks.forEach((learnMoreLink) => {
        learnMoreLink.classList.add("active");
      });
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
