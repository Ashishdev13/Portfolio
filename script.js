(() => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Custom cursor ---------- */
  const cursor = document.getElementById("cursor");
  const dot = document.getElementById("cursorDot");
  const hasHover = window.matchMedia("(hover: hover)").matches;

  if (cursor && dot && hasHover) {
    let tx = 0, ty = 0, cx = 0, cy = 0;
    let dx = 0, dy = 0;
    document.addEventListener("mousemove", (e) => {
      tx = e.clientX; ty = e.clientY;
      dx = e.clientX; dy = e.clientY;
    });
    const loop = () => {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();

    document.querySelectorAll("[data-cursor]").forEach((el) => {
      const type = el.getAttribute("data-cursor");
      el.addEventListener("mouseenter", () => {
        cursor.classList.remove("is-link", "is-view", "is-mail");
        cursor.classList.add(`is-${type}`);
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("is-link", "is-view", "is-mail");
      });
    });

    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
      dot.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
      dot.style.opacity = "1";
    });
  }

  /* ---------- Scroll progress ---------- */
  const progress = document.getElementById("progress");
  if (progress) {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      progress.style.width = `${Math.min(100, scrolled * 100)}%`;
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Reveal on scroll ---------- */
  if (!prefersReduced && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }

  /* ---------- Magnetic buttons (light-touch) ---------- */
  if (!prefersReduced && hasHover) {
    const magnetic = document.querySelectorAll(".btn, .nav-cta, .contact-cta");
    magnetic.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2;
        const my = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${mx * 0.15}px, ${my * 0.2}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* ---------- 3D tilt on about card ---------- */
  if (!prefersReduced && hasHover) {
    const tiltCard = document.querySelector(".about-card");
    if (tiltCard) {
      tiltCard.addEventListener("mousemove", (e) => {
        const r = tiltCard.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        const rx = (y - 0.5) * -6;
        const ry = (x - 0.5) * 6;
        tiltCard.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      });
      tiltCard.addEventListener("mouseleave", () => {
        tiltCard.style.transform = "";
      });
    }
  }

  /* ---------- Parallax aurora ---------- */
  if (!prefersReduced) {
    const aurora = document.querySelector(".aurora");
    if (aurora) {
      document.addEventListener("scroll", () => {
        const y = Math.min(window.scrollY, 800);
        aurora.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
      }, { passive: true });
    }
  }
})();
