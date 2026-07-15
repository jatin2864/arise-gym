function toggleMenu() {
  let nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
 window.onscroll = function () {
let winScroll = document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (winScroll / height) * 100;
document.getElementById("progress-bar").style.width = scrolled + "%";
};
document.addEventListener("mousemove", function(e) {
const cursor = document.querySelector(".cursor");
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});
document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll(".gallery-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let currentIndex = 0;

  if (images.length === 0) {
    console.log("No images found");
    return;
  }
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      currentIndex = index;
    });
  });

  
  
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

});
// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.9)";
    navbar.style.backdropFilter = "blur(15px)";
    navbar.style.boxShadow = "0 5px 20px rgba(255,0,0,0.3)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.4)";
    navbar.style.backdropFilter = "blur(10px)";
    navbar.style.boxShadow = "none";
  }
});
// LOADER + HERO FIX

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const heroTitle = document.querySelector(".hero-title");

  setTimeout(() => {
    loader.style.display = "none";

    // START animation AFTER loader
    heroTitle.classList.add("active");

  }, 1500);
});
// BMI CALCULATOR

function calculateBMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  if (height === "" || weight === "") {
    document.getElementById("result").innerText = "Please enter values";
    return;
  }

  height = height / 100;

  let bmi = weight / (height * height);

  let resultText = "";

  if (bmi < 18.5) {
    resultText = "Underweight 😟";
  } else if (bmi < 25) {
    resultText = "Normal 💪";
  } else {
    resultText = "Overweight ⚠️";
  }

  document.getElementById("result").innerText =
    "Your BMI: " + bmi.toFixed(2) + " - " + resultText;
}
// ===== SMOOTH SCROLL =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// ===== CUSTOM CURSOR =====

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});