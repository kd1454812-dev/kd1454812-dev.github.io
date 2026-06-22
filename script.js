// Small, dependency-free interactions for the portfolio.

document.documentElement.classList.add("js");

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const year = document.querySelector("#year");

// Keep the footer year current without editing the HTML every January.
if (year) {
  year.textContent = new Date().getFullYear();
}

// Add a subtle header border after the user scrolls.
function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// Mobile navigation: open, close, and keep ARIA information correct.
function closeMenu() {
  if (!menuButton || !navigation) return;
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
}

function openMenu() {
  if (!menuButton || !navigation) return;
  navigation.classList.add("is-open");
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Close navigation menu");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 660) {
      closeMenu();
    }
  });
}

// Reveal sections when they enter the screen.
// The website still works normally if IntersectionObserver is unavailable.
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
