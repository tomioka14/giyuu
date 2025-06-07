
// script.js

// Suara klik
const clickSound = new Audio("giyu-click.mp3");

document.querySelectorAll("button, a").forEach(el => {
  el.addEventListener("click", (event) => {
    clickSound.currentTime = 0;
    clickSound.play();
    createRipple(event, el);
  });
});

// Ripple effect
function createRipple(event, element) {
  const circle = document.createElement("span");
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - element.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = element.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();

  element.appendChild(circle);
}

// Voice prompt Giyu saat halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
  const voice = new Audio("giyu-click.mp3"); // gunakan voice Giyu jika tersedia
  voice.volume = 0.4;
  voice.play();
});

// Floating bubbles
function spawnBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${3 + Math.random() * 4}s`;
  document.body.appendChild(bubble);
  setTimeout(() => bubble.remove(), 7000);
}
setInterval(spawnBubble, 1500);
