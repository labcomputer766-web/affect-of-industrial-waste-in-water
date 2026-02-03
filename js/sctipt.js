// Simple smooth scroll for anchor links (if you add any later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: fade in images when they enter viewport
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  images.forEach(img => {
    img.style.opacity = "0";
    img.style.transform = "translateY(20px)";
    img.style.transition = "all 0.6s ease";
    observer.observe(img);
  });
});