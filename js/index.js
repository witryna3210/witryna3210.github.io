// Allow only one FAQ item to be open at a time
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(targetFaqItem => {
  targetFaqItem.addEventListener("click", () => {
    faqItems.forEach(faqItem => {
      if (faqItem === targetFaqItem) {
        return;
      }

      faqItem.removeAttribute("open");
    });
  });
});

// Close the mobile navigation after tapping a link
const mobileNav = document.querySelector("#nav-mobile");
const mobileNavLinks = mobileNav.querySelectorAll(".nav-item");
mobileNavLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.hidePopover();
  });
});

// Ensure anchor targets appear perfectly below the header
const header = document.querySelector("header");

const updateHeaderHeight = () => {
  const headerHeight = header.getBoundingClientRect().height;
  document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
};

const headerHeightObserver = new ResizeObserver(updateHeaderHeight);
headerHeightObserver.observe(header);

updateHeaderHeight();
