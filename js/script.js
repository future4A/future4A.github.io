// Get the button
const backToTopButton = document.getElementById("back-to-top");

// Show button when scrolling down 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Smooth scroll to top when clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




// Accordion functionality
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;

    // Toggle active class for button styling
    button.classList.toggle('active');

    // Toggle content visibility
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Collapse
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Expand
    }
  });
});

