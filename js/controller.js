/**
 * CONTROLLER
 * Liga Model + View ao DOM: faz o render inicial e cuida de todo
 * comportamento (menu, scrollspy, digitação, revelação ao rolar,
 * envio do formulário, voltar ao topo).
 */
import {
  profile,
  socialLinks,
  navLinks,
  skills,
  projects,
  contactConfig,
} from "./model.js";
import {
  renderHeader,
  renderHome,
  renderAbout,
  renderServices,
  renderPortfolio,
  renderContact,
  renderFooter,
  renderSocialLinks,
  toastMarkup,
} from "./view.js";
import { mountHalftoneBloom } from "./halftoneBloom.js";
import { applyVariableProximity } from "./variableProximity.js";
import { mountTechText } from "./techText.js";

function renderApp() {
  document.getElementById("header").innerHTML = renderHeader({ name: profile.name, navLinks });
  document.getElementById("home").innerHTML = renderHome(profile);
  document.getElementById("social-slot").innerHTML = renderSocialLinks(socialLinks);
  document.getElementById("about").innerHTML = renderAbout(profile);
  document.getElementById("services").innerHTML = renderServices(skills);
  document.getElementById("portifolio").innerHTML = renderPortfolio(projects);
  document.getElementById("contact").innerHTML = renderContact();
  document.getElementById("footer").innerHTML = renderFooter(profile);
}

function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  toggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");
    toggle.innerHTML = isOpen ? '<i class="bx bx-x"></i>' : '<i class="bx bx-menu"></i>';
  });

  navbar.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
      toggle.innerHTML = '<i class="bx bx-menu"></i>';
    });
  });
}

function initScrollTop() {
  document.querySelectorAll("[data-scroll-top]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function initHeaderShrink() {
  const header = document.getElementById("header");
  window.addEventListener(
    "scroll",
    () => header.classList.toggle("scrolled", window.scrollY > 40),
    { passive: true },
  );
}

function initScrollSpy() {
  const sections = navLinks
    .map((l) => document.getElementById(l.target))
    .filter(Boolean);
  const links = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) =>
          link.classList.toggle("active", link.dataset.target === entry.target.id),
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    const delay = el.dataset.revealDelay;
    if (delay) el.style.transitionDelay = `${delay}ms`;
    observer.observe(el);
  });
}

function initTypedRoles() {
  const el = document.getElementById("typed-role");
  if (!el) return;
  const roles = profile.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    el.textContent = word.slice(0, charIndex);

    let delay = deleting ? 60 : 100;

    if (!deleting && charIndex === word.length) {
      deleting = true;
      delay = 1200;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 300;
    }

    setTimeout(tick, delay);
  }

  tick();
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = toastMarkup(message, type);
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 3500);
}

function initFlipCards() {
  if (window.matchMedia("(hover: hover)").matches) return;
  document.querySelectorAll(".portifolio-box").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".portifolio-link")) return;
      card.classList.toggle("flipped");
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (window.emailjs) {
      window.emailjs
        .sendForm(contactConfig.serviceId, contactConfig.templateId, form, contactConfig.publicKey)
        .then(() => showToast("Mensagem enviada com sucesso!", "success"))
        .catch(() => showToast("Ocorreu um erro ao enviar a mensagem.", "error"));
    } else {
      showToast("Mensagem enviada com sucesso!", "success");
    }

    form.reset();
  });
}

function initVariableProximity() {
  applyVariableProximity(document.querySelector(".about-content h3"), { radius: 90 });
}

function initTechText() {
  const el = document.getElementById("hero-name-canvas");
  if (!el) return;
  mountTechText(el, {
    text: profile.name,
    fontWeight: 800,
    color: "#e9edf4",
    accentColor: "#38bdf8",
  });
}

function initBackground() {
  const container = document.getElementById("bg-decor");
  if (!container) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const dispose = mountHalftoneBloom(container, {
    background: "#0a0e16",
    color1: "#38bdf8",
    color2: "#3b82f6",
    speed: 40,
    size: 200,
    angle: 180,
    dotSize: 6,
    hover: 160,
    reach: 420,
  });

  if (dispose) container.classList.add("has-halftone");
}

export function init() {
  renderApp();
  initMobileMenu();
  initScrollTop();
  initHeaderShrink();
  initScrollSpy();
  initReveal();
  initTypedRoles();
  initFlipCards();
  initContactForm();
  initVariableProximity();
  initTechText();
  initBackground();
}
