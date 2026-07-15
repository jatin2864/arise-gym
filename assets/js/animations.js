// ===== SCROLL REVEAL ANIMATION =====

const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});