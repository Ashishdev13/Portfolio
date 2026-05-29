(() => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasHover = window.matchMedia("(hover: hover)").matches;

  /* ---------- Matrix rain background ---------- */
  const canvas = document.getElementById("matrix");
  if (canvas && !prefersReduced) {
    const ctx = canvas.getContext("2d");
    const chars = "01<>/\\[]{}#$%&*+=-ｱｲｳｴｵｶｷｸｹｺﾊﾋﾌﾍﾎ".split("");
    let cols, drops, fontSize;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      fontSize = Math.max(13, Math.floor(window.innerWidth / 110));
      cols = Math.floor(canvas.width / fontSize);
      drops = new Array(cols).fill(0).map(() => Math.random() * -canvas.height / fontSize);
    };
    resize();
    window.addEventListener("resize", resize);

    let last = 0;
    const draw = (t) => {
      if (t - last > 55) {
        last = t;
        ctx.fillStyle = "rgba(4,6,10,0.10)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${fontSize}px JetBrains Mono, monospace`;
        for (let i = 0; i < cols; i++) {
          const ch = chars[(Math.random() * chars.length) | 0];
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          ctx.fillStyle = Math.random() > 0.96 ? "#aaffd9" : "#19b86e";
          ctx.fillText(ch, x, y);
          if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }

  /* ---------- Custom cursor ---------- */
  const cursor = document.getElementById("cursor");
  const dot = document.getElementById("cursorDot");
  if (cursor && dot && hasHover) {
    let tx = 0, ty = 0, cx = 0, cy = 0, dx = 0, dy = 0;
    document.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; dx = e.clientX; dy = e.clientY; });
    const loop = () => {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.querySelectorAll("[data-cursor]").forEach((el) => {
      const type = el.getAttribute("data-cursor");
      el.addEventListener("mouseenter", () => { cursor.classList.remove("is-link","is-view","is-mail"); cursor.classList.add(`is-${type}`); });
      el.addEventListener("mouseleave", () => { cursor.classList.remove("is-link","is-view","is-mail"); });
    });
    document.addEventListener("mouseleave", () => { cursor.style.opacity = "0"; dot.style.opacity = "0"; });
    document.addEventListener("mouseenter", () => { cursor.style.opacity = "1"; dot.style.opacity = "1"; });
  }

  /* ---------- Scroll progress ---------- */
  const progress = document.getElementById("progress");
  if (progress) {
    const onScroll = () => {
      const h = document.documentElement;
      progress.style.width = `${Math.min(100, (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100)}%`;
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Reveal on scroll ---------- */
  if (!prefersReduced && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -70px 0px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }

  /* ---------- Count-up ---------- */
  if (!prefersReduced && "IntersectionObserver" in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count"), 10);
        const suffix = el.getAttribute("data-suffix") || "";
        const dur = 1200; let start = null;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / dur, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        cio.unobserve(el);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));
  }

  /* ---------- Magnetic buttons ---------- */
  if (!prefersReduced && hasHover) {
    document.querySelectorAll(".btn, .nav-resume, .contact-cta").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width/2) * 0.16}px, ${(e.clientY - r.top - r.height/2) * 0.26}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------- 3D tilt on terminal card ---------- */
  if (!prefersReduced && hasHover) {
    const tilt = document.querySelector(".about-card");
    if (tilt) {
      tilt.addEventListener("mousemove", (e) => {
        const r = tilt.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        tilt.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * -6}deg) rotateY(${(x - 0.5) * 6}deg)`;
      });
      tilt.addEventListener("mouseleave", () => { tilt.style.transform = ""; });
    }
  }
})();
