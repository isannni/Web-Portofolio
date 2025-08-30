// Toggle Mode
const toggle = document.getElementById("toggleMode");
const body = document.body;
const modeText = document.getElementById("modeText");

modeText.textContent = "Dark";

toggle.addEventListener("change", () => {
  body.classList.toggle("light-mode");
  modeText.textContent = body.classList.contains("light-mode") ? "Light" : "Dark";
});

// Typing Effect
const typingText = document.getElementById("typing");
const words = ["Front-End Developer", "Freelancer", "UI/UX Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  let currentWord = words[wordIndex];
  if (!deleting) {
    typingText.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1000); // pause sebelum hapus
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeEffect, deleting ? 80 : 120);
}

typeEffect();