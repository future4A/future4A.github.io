// Wait until page fully loads
document.addEventListener("DOMContentLoaded", () => {

  // =============================
  // Back to top
  // =============================
  const backToTopButton = document.getElementById("back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      backToTopButton.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }


  // =============================
  // Hamburger menu (NEW FIX)
  // =============================
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }


  // =============================
  // Accordion
  // =============================
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      button.classList.toggle("active");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

});