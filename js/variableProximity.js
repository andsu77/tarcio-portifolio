/**
 * Variable Proximity — adaptado de um componente React/Originkit para JS
 * puro. Letras perto do cursor ficam mais "bold" (fonte variável Roboto
 * Flex), com um falloff suave até a distância do raio.
 */

function falloffValue(distance, radius, falloff) {
  const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
  if (falloff === "exponential") return norm ** 2;
  if (falloff === "gaussian") return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
  return norm;
}

export function applyVariableProximity(
  el,
  { radius = 80, falloff = "linear", from = { wght: 400, opsz: 9 }, to = { wght: 900, opsz: 40 } } = {},
) {
  if (!el) return;
  const words = el.textContent.split(" ");
  el.textContent = "";
  el.classList.add("variable-proximity");

  const baseSettings = `'wght' ${from.wght}, 'opsz' ${from.opsz}`;
  const letters = [];

  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement("span");
    wordSpan.style.display = "inline-block";
    wordSpan.style.whiteSpace = "nowrap";
    [...word].forEach((ch) => {
      const span = document.createElement("span");
      span.textContent = ch;
      span.style.display = "inline-block";
      span.style.fontVariationSettings = baseSettings;
      wordSpan.appendChild(span);
      letters.push(span);
    });
    el.appendChild(wordSpan);
    if (wordIndex < words.length - 1) el.appendChild(document.createTextNode(" "));
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let mouseX = -9999;
  let mouseY = -9999;
  let raf = null;

  function update() {
    raf = null;
    letters.forEach((span) => {
      const r = span.getBoundingClientRect();
      const dx = mouseX - (r.left + r.width / 2);
      const dy = mouseY - (r.top + r.height / 2);
      const dist = Math.hypot(dx, dy);
      if (dist >= radius) {
        span.style.fontVariationSettings = baseSettings;
        return;
      }
      const t = falloffValue(dist, radius, falloff);
      const wght = (from.wght + (to.wght - from.wght) * t).toFixed(1);
      const opsz = (from.opsz + (to.opsz - from.opsz) * t).toFixed(1);
      span.style.fontVariationSettings = `'wght' ${wght}, 'opsz' ${opsz}`;
    });
  }

  function onMove(e) {
    const point = e.touches ? e.touches[0] : e;
    mouseX = point.clientX;
    mouseY = point.clientY;
    if (!raf) raf = requestAnimationFrame(update);
  }

  window.addEventListener("mousemove", onMove, { passive: true });
  window.addEventListener("touchmove", onMove, { passive: true });
}
