// ======== Navbar ==========
const nav_toggle_btn = document.querySelector("#nav_toggle_btn");
function menuShow() {
  document.querySelector(".nav_menu").classList.toggle("show");
  nav_toggle_btn.classList.toggle("open");
}
function menuClose() {
  document.querySelector(".nav_menu").classList.remove("show");
  nav_toggle_btn.classList.remove("open");
}

// scroll to navbar fixed top
let navbarScroll = () => {
  let navbar = document.getElementById("navbar");
  let pos = document.documentElement.scrollTop;
  if (pos > 120) {
    navbar.classList.add("navbar_active");
  } else {
    navbar.classList.remove("navbar_active");
  }
};

window.onscroll = navbarScroll;
window.onload = navbarScroll;

// =========== FAQ Accordion ===========
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  function setAccordionHeight(item, isActive) {
    const body = item.querySelector(".accordion-item-body");
    if (isActive) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = 0;
    }
  }

  function toggleAccordion(item) {
    const currentlyActiveItem = document.querySelector(
      ".accordion-item.active"
    );

    if (currentlyActiveItem && currentlyActiveItem !== item) {
      currentlyActiveItem.classList.remove("active");
      setAccordionHeight(currentlyActiveItem, false);
    }

    item.classList.toggle("active");
    setAccordionHeight(item, item.classList.contains("active"));
  }

  // Set initial active item
  const firstAccordionItem = accordionItems[0];
  firstAccordionItem.classList.add("active");
  setAccordionHeight(firstAccordionItem, true);

  // Add click event listeners
  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-item-header");
    header.addEventListener("click", () => toggleAccordion(item));
  });
});

// =========== PortfolioPage Tabs =============

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab_btn");
  const tabContents = document.querySelectorAll(".tab_content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      // Remove active classes
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => {
        content.classList.remove("active");
        content.style.opacity = 0;
      });

      // Add active class to the clicked tab button
      button.classList.add("active");

      // Find the target tab content and make it visible
      const targetContent = document.getElementById(targetTab);
      targetContent.classList.add("active");

      // Delay the opacity transition to make it smooth
      setTimeout(() => {
        targetContent.style.opacity = 1;
      }, 10);
    });
  });
});
