// Register GSAP ScrollTrigger (loaded from CDN before this file)
gsap.registerPlugin(ScrollTrigger);

// ---------- Preloader ----------
(function preloader() {
  const pre = document.querySelector(".preloader");
  const countEl = document.querySelector(".pre-count");
  let value = 0;
  const timer = setInterval(() => {
    value = Math.min(100, value + Math.random() * 14 + 4);
    countEl.textContent = Math.floor(value) + "%";
    if (value >= 100) {
      clearInterval(timer);
      gsap.to(pre, {
        yPercent: -100,
        duration: 0.9,
        ease: "power3.inOut",
        onComplete: () => pre.remove(),
      });
      gsap.from(".mega-line", {
        y: 120,
        opacity: 0,
        stagger: 0.14,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.35,
      });
    }
  }, 110);
})();

// ---------- Progress bar ----------
gsap.to("#progress-bar", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 },
});

// ---------- Parallax orbs + hero parallax out ----------
gsap.utils.toArray(".orb").forEach((orb, i) => {
  gsap.to(orb, {
    yPercent: (i % 2 ? -1 : 1) * (30 + i * 12),
    ease: "none",
    scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 },
  });
});

gsap.to(".hero-content", {
  yPercent: -22,
  opacity: 0.15,
  ease: "none",
  scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 },
});

// ---------- Generic reveal-on-scroll ----------
gsap.utils.toArray("[data-reveal]").forEach((el) => {
  gsap.from(el, {
    y: 70,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 88%" },
  });
});

// ---------- Pinned word-by-word statement ----------
(function statement() {
  const el = document.getElementById("statement");
  if (!el) return;
  const text =
    "Why me? 'Systems work only when the people behind them are supported.' Four roles. Four industries. One mindset — learn fast, support hard, and keep building.";
  const HIGHLIGHTS = new Set(["four", "roles.", "four", "industries.", "learn", "fast,", "keep", "building."]);

  el.innerHTML = text
    .split(" ")
    .map((w) => {
      const key = w.toLowerCase();
      const cls = HIGHLIGHTS.has(key) ? "word hl" : "word";
      return `<span class="${cls}">${w}</span>`;
    })
    .join(" ");
  // glue highlight pairs back ("four roles." / "four industries." span two spans)
  const words = el.querySelectorAll(".word");
  gsap.fromTo(
    words,
    { opacity: 0.12 },
    {
      opacity: 1,
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".pinned-statement",
        start: "top top",
        end: "+=160%",
        pin: true,
        scrub: 0.6,
      },
    }
  );
})();

// ---------- Animated stat counters ----------
gsap.utils.toArray(".count").forEach((num) => {
  const target = +num.dataset.target;
  gsap.fromTo(
    num,
    { innerText: 0 },
    {
      innerText: target,
      duration: 1.6,
      snap: { innerText: 1 },
      ease: "power2.out",
      scrollTrigger: { trigger: num, start: "top 85%" },
    }
  );
});

// ---------- Skill bars ----------
gsap.utils.toArray(".bar-fill").forEach((bar) => {
  gsap.to(bar, {
    width: bar.dataset.level + "%",
    duration: 1.4,
    ease: "power3.out",
    scrollTrigger: { trigger: bar, start: "top 88%" },
  });
});

// ---------- Horizontal scroll journey ----------
const track = document.querySelector(".h-track");
if (track) {
  gsap.to(track, {
    x: () => -(track.scrollWidth - window.innerWidth + window.innerWidth * 0.06),
    ease: "none",
    scrollTrigger: {
      trigger: "#journey",
      start: "top top",
      end: () => "+=" + (track.scrollWidth - window.innerWidth + window.innerWidth * 0.06),
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
}

// ---------- Floating billboard rows in project visual ----------
gsap.utils.toArray(".glass-row").forEach((row, i) => {
  gsap.from(row, {
    x: i % 2 ? 40 : -40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: { trigger: ".project-grid", start: "top 75%" },
  });
});

// ---------- Typing effect ----------
(function typing() {
  const roles = ["IT Professional", "Web Developer (HTML · CSS · JS)", "Data Entry Operator", "Computer Application Graduate"];
  const el = document.getElementById("typed");
  let roleIndex = 0, charIndex = 0, deleting = false;
  function tick() {
    const current = roles[roleIndex];
    el.textContent = deleting ? current.slice(0, --charIndex) : current.slice(0, ++charIndex);
    let delay = deleting ? 40 : 85;
    if (!deleting && charIndex === current.length) { delay = 1700; deleting = true; }
    else if (deleting && charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 380; }
    setTimeout(tick, delay);
  }
  tick();
})();

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
