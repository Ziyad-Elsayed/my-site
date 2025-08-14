// ===== Theme toggle (light/dark) =====
function toggleTheme() {
  const body = document.body;
  const btn = document.querySelector(".theme-toggle");
  const dark = body.getAttribute("data-theme") === "dark";

  if (dark) {
    body.removeAttribute("data-theme");
    if (btn) btn.textContent = "🌙";
  } else {
    body.setAttribute("data-theme", "dark");
    if (btn) btn.textContent = "☀️";
  }
}

// ===== Smooth scrolling for in-page links =====
function smoothScrollTo(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  // خصم بسيط لمساحة الناف الثابتة
  const y = target.getBoundingClientRect().top + window.pageYOffset - 80;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

function initSmoothLinks() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      smoothScrollTo(href);
    });
  });
}

// ===== Open project in new tab =====
function openProject(url) {
  if (url) window.open(url, "_blank", "noopener,noreferrer");
}

// ===== Optional: simple image loading class cleanup =====
function initImageLoading() {
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    // أضف كلاس تحميل خفيف (لو مستخدم في CSS)
    img.classList.add("loading");
    img.addEventListener("load", () => img.classList.remove("loading"));
    img.addEventListener("error", () => (img.style.display = "none"));
  });
}

// ===== Init on DOM ready =====
document.addEventListener("DOMContentLoaded", () => {
  initSmoothLinks();
  initImageLoading();
});
