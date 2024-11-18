const activePage = window.location.href; // Get the current URL
const navLinks = document.querySelectorAll("nav a"); // Select all nav links

navLinks.forEach((link) => {
  // Check if the link's href matches the current URL
  if (activePage.includes(link.href)) {
    link.classList.add("active"); // Add 'active' class to the matching link
  } else {
    link.classList.remove("active"); // Remove 'active' class from others
  }
});

// slider section js

const slider = document.querySelector(".testimonial-slider");
const testimonials = document.querySelectorAll(".testimonial");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots-container");

let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
let autoSlideInterval;

//* event listeners

function initApp() {
  slider.addEventListener("touchstart", handleTouchStart);
  slider.addEventListener("touchend", handleTouchEnd);
  slider.addEventListener("mouseover", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
  nextBtn.addEventListener("click", nextTestimonial);
  prevBtn.addEventListener("click", prevTestimonial);
}

//* auto slide

function startAutoSlide() {
  autoSlideInterval = setInterval(nextTestimonial, 5000); // 5s
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

//* touch navigation

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;

  handleTouchSwipe();
}

function handleTouchSwipe() {
  const swipeThreshold = 50; // swipe sensitivity

  if (touchStartX - touchEndX > swipeThreshold) {
    nextTestimonial(); // swipe left
  } else if (touchEndX - touchStartX > swipeThreshold) {
    prevTestimonial(); // swipe right
  }
}

//* dot navigation

function renderDotButtons() {
  for (let i = 0; i < testimonials.length; i++) {
    const button = document.createElement("button");
    button.classList.add("dot");
    button.classList.toggle("active", i === currentIndex);
    button.ariaLabel = `Jump to Testimonial ${i + 1}`;
    button.addEventListener("click", () => showTestimonial(i));
    dotsContainer.appendChild(button);
  }
}

//* slide functions

function showTestimonial(index) {
  currentIndex = index;

  // update slide position
  testimonials.forEach((testimonial) => {
    testimonial.style.transform = `translateX(${-index * 100}%)`;
  });

  // update active dot
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function nextTestimonial() {
  const nextIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(nextIndex);
}

function prevTestimonial() {
  const prevIndex =
    (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(prevIndex);
}

//* initialize

document.addEventListener("DOMContentLoaded", function () {
  renderDotButtons();
  startAutoSlide();
  initApp();
});

const sliders = document.getElementById("sliders");
const cardsss = document.querySelectorAll(".cardss");
const prevBtns = document.getElementById("prevBtns");
const nextBtns = document.getElementById("nextBtns");
const dotssContainer = document.getElementById("dotss");
let currentindexss = 0;

// Create dotss
cardsss.forEach((cardss, indexs) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (indexs === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    currentindexss = indexs;
    updateslidersPosition();
    updatedotss();
  });
  dotssContainer.appendChild(dot);
});

const dotss = document.querySelectorAll(".dot");

prevBtns.addEventListener("click", () => {
  if (currentindexss > 0) {
    currentindexss--;
    updateslidersPosition();
    updatedotss();
  }
});

nextBtns.addEventListener("click", () => {
  if (currentindexss < cardsss.length - 1) {
    currentindexss++;
    updateslidersPosition();
    updatedotss();
  }
});

function updateslidersPosition() {
  sliders.style.transform = `translateX(-${
    currentindexss * (cardsss[0].offsetWidth + 20)
  }px)`;
}

document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const faqItem = item.parentElement;
    const answer = item.nextElementSibling;
    const toggle = item.querySelector(".faq-toggle");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      toggle.classList.remove("open");
      faqItem.classList.remove("open");
    } else {
      answer.style.display = "block";
      toggle.classList.add("open");
      faqItem.classList.add("open");
    }
  });
});

const items = document.querySelectorAll(".menu ul li");
items.forEach((item)=> item.classList.remove("active"))


 window.addEventListener("scroll", function () {
//   const nav = document.querySelector("nav ul");
 const btn= document.querySelector("#btn")
 const minilogo = document.querySelector("#minilogo");
  nav.style.transition = "top 0.3s ease"; 
  if (window.scrollY > 100) {
   nav.style.top = "calc(98vh - 50px)"; 
    btn.style.display="block"
   minilogo.style.display = "block";     nav.style.left="20%" } else {    nav.style.top = "20px";     btn.style.display = "none";
    minilogo.style.display = "none";
    nav.style.left = "30%"; } });
