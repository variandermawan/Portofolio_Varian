// 🌈 Animasi background hero biar bergerak halus
const hero = document.querySelector('.hero');
let x = 0;
function animateGradient() {
  x += 0.5;
  hero.style.backgroundPosition = `${x}% ${x / 2}%`;
  requestAnimationFrame(animateGradient);
}
animateGradient();

// 👀 Fade-in card saat discroll
const cards = document.querySelectorAll('.card');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// 📊 Skill bar animasi saat muncul
const skillFills = document.querySelectorAll('.skill-fill');
function animateSkills() {
  const triggerBottom = window.innerHeight * 0.85;
  skillFills.forEach(fill => {
    const fillTop = fill.getBoundingClientRect().top;
    if (fillTop < triggerBottom && fill.style.width === '0px') {
      fill.style.width = fill.dataset.skill;
    }
  });
}
window.addEventListener('scroll', animateSkills);
animateSkills();

// Animasi skill bar saat di-scroll
document.addEventListener("DOMContentLoaded", () => {
  const skillFills = document.querySelectorAll(".skill-fill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const targetWidth = fill.style.getPropertyValue("--target-width");
          fill.style.width = targetWidth;
          fill.classList.add("animated");
        }
      });
    },
    { threshold: 0.5 } // aktif kalau 50% elemen muncul
  );

  skillFills.forEach((fill) => {
    fill.style.width = "0"; // awalnya 0
    observer.observe(fill);
  });
});