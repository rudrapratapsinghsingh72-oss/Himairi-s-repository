const openEnvelope = document.getElementById("openEnvelope");
const envelopeHint = document.getElementById("envelopeHint");
const letterButton = document.getElementById("letterButton");
const letterPaper = document.getElementById("letterPaper");
const surpriseButton = document.getElementById("surpriseButton");
const finalReveal = document.getElementById("finalReveal");

openEnvelope.addEventListener("click", () => {
  openEnvelope.classList.toggle("open");
  const isOpen = openEnvelope.classList.contains("open");
  envelopeHint.textContent = isOpen
    ? "Surprise! Your little birthday universe is waiting below ♡"
    : "Tap the envelope to begin ✨";

  if (isOpen) {
    document.getElementById("little-things").scrollIntoView({ behavior: "smooth" });
  }
});

letterButton.addEventListener("click", () => {
  letterPaper.classList.toggle("hidden");
  letterButton.querySelector("span:last-child").textContent =
    letterPaper.classList.contains("hidden") ? "Tap to read your letter" : "Close your letter";
  if (!letterPaper.classList.contains("hidden")) {
    setTimeout(() => letterPaper.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
  }
});

surpriseButton.addEventListener("click", () => {
  finalReveal.classList.toggle("hidden");
  surpriseButton.textContent = finalReveal.classList.contains("hidden")
    ? "One last tiny surprise ✨"
    : "A little love, just for today ♡";
});

// Tiny floating heart burst for the final reveal.
surpriseButton.addEventListener("click", () => {
  if (!finalReveal.classList.contains("hidden")) {
    for (let i = 0; i < 14; i++) {
      const heart = document.createElement("span");
      heart.textContent = Math.random() > 0.5 ? "♡" : "✦";
      heart.style.position = "fixed";
      heart.style.left = (15 + Math.random() * 70) + "vw";
      heart.style.top = (25 + Math.random() * 50) + "vh";
      heart.style.color = "#c75d7b";
      heart.style.fontSize = (14 + Math.random() * 18) + "px";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "20";
      heart.style.transition = "transform 1.4s ease, opacity 1.4s ease";
      document.body.appendChild(heart);
      requestAnimationFrame(() => {
        heart.style.transform = `translateY(-${70 + Math.random() * 130}px) rotate(${Math.random() * 80 - 40}deg)`;
        heart.style.opacity = "0";
      });
      setTimeout(() => heart.remove(), 1500);
    }
  }
});
