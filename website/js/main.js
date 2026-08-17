(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  const nav = document.querySelector(".nav");
  const onScroll = () => {
    nav.classList.toggle("nav-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".hero-row, .feature-grid article, .steps article, .card").forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

  /* light cursor glow on cards */
  document.querySelectorAll(".feature-grid article, .steps article").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
    el.addEventListener("mouseleave", () => {
      el.style.removeProperty("--mx");
      el.style.removeProperty("--my");
    });
  });

  /* page-wide subtle cursor glow */
  let glowTick = false;
  window.addEventListener("mousemove", (e) => {
    if (glowTick) return;
    glowTick = true;
    requestAnimationFrame(() => {
      document.body.style.setProperty("--mx", `${e.clientX}px`);
      document.body.style.setProperty("--my", `${e.clientY}px`);
      glowTick = false;
    });
  }, { passive: true });
})();
