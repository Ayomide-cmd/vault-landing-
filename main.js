const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const overlayClose = document.querySelector(".overlay-close");

hamburger.addEventListener("click", () => {
  hamburger.classList.add("hidden");
  close.classList.remove("hidden");
  overlay.classList.add("active");   
  body.classList.add("fixbody");
});

close.addEventListener("click", () => {
  hamburger.classList.remove("hidden");
  close.classList.add("hidden");
  overlay.classList.remove("active"); 
  body.classList.remove("fixbody");
});

overlayClose.addEventListener("click", () => {
  hamburger.classList.remove("hidden");
  close.classList.add("hidden");
  overlay.classList.remove("active"); 
  body.classList.remove("fixbody");
});

const overlayLinks = overlay.querySelectorAll("a");
overlayLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("hidden");
    close.classList.add("hidden");
    overlay.classList.remove("active"); 
    body.classList.remove("fixbody");
  });
});