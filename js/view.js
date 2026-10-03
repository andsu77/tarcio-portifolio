/**
 * VIEW
 * Funções puras: recebem dados do Model e devolvem markup (string).
 * Não leem nem escrevem estado global, não registram eventos —
 * isso é responsabilidade do Controller.
 */

export function renderHeader({ name, navLinks }) {
  return `
    <a href="#home" class="logo" data-scroll-top>${name}</a>
    <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menu">
      <i class="bx bx-menu"></i>
    </button>
    <nav class="navbar" id="navbar">
      ${navLinks
        .map(
          (link, i) =>
            `<a href="#${link.target}" data-target="${link.target}" class="nav-link${i === 0 ? " active" : ""}">${link.label}</a>`,
        )
        .join("")}
    </nav>
  `;
}

export function renderHome({ greeting, name, heroImg, education, cv, cvFileName }) {
  return `
    <div class="home-content" data-reveal>
      <h3 class="pretitle">${greeting}</h3>
      <div class="hero-name" id="hero-name-canvas"></div>
      <h3 class="hero-role">E sou um <span id="typed-role" class="accent"></span><span class="cursor">|</span></h3>
      ${education.map((line) => `<p class="muted">${line}</p>`).join("")}
      <div class="social-media">
        <div id="social-slot"></div>
      </div>
      <a href="${cv}" class="btn btn-primary" download="${cvFileName}">
        <i class="bx bx-download"></i> Download CV
      </a>
    </div>
    <div class="home-img" data-reveal data-reveal-delay="150">
      <div class="blob"></div>
      <img src="${heroImg}" alt="Foto de ${name}" />
    </div>
  `;
}

export function renderSocialLinks(socialLinks) {
  return socialLinks
    .map(
      (s) =>
        `<a href="${s.url}" target="_blank" rel="noreferrer" aria-label="${s.name}"><i class="${s.icon}"></i></a>`,
    )
    .join("");
}

export function renderAbout({ aboutImg, aboutTitle, aboutText, name }) {
  return `
    <div class="about-img" data-reveal>
      <div class="ring"></div>
      <img src="${aboutImg}" alt="Foto de ${name}" />
    </div>
    <div class="about-content" data-reveal data-reveal-delay="150">
      <h2 class="heading">Sobre <span class="accent">Mim</span></h2>
      <h3>${aboutTitle}</h3>
      <p>${aboutText}</p>
    </div>
  `;
}

export function renderServices(skills) {
  return `
    <h2 class="heading" data-reveal>Minhas <span class="accent">Tecnologias</span></h2>
    <div class="services-container">
      ${skills
        .map(
          (s, i) => `
        <div class="services-box" data-reveal data-reveal-delay="${(i % 3) * 100}">
          <div class="icon-chip"><img src="${s.icon}" alt="${s.title}" width="36" height="36" /></div>
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>`,
        )
        .join("")}
    </div>
  `;
}

export function renderPortfolio(projects) {
  return `
    <h2 class="heading" data-reveal>Últimos <span class="accent">Projetos</span></h2>
    <div class="portifolio-container">
      ${projects
        .map(
          (p, i) => `
        <div class="portifolio-box" tabindex="0" data-reveal data-reveal-delay="${(i % 3) * 100}">
          <div class="portifolio-card">
            <div class="portifolio-face portifolio-face--front">
              <div class="browser-bar"><span></span><span></span><span></span></div>
              <img src="${p.img}" alt="${p.title}" loading="lazy" />
            </div>
            <div class="portifolio-face portifolio-face--back">
              <h4>${p.title}</h4>
              <p>${p.description}</p>
              <a class="portifolio-link" href="${p.link}" target="_blank" rel="noreferrer">
                <i class="bx bx-link-external"></i> Ver projeto
              </a>
            </div>
          </div>
        </div>`,
        )
        .join("")}
    </div>
  `;
}

export function renderContact() {
  return `
    <h2 class="heading" data-reveal><span class="accent">Contate-me</span></h2>
    <form id="contact-form" class="contact-form" data-reveal data-reveal-delay="100">
      <div class="input-box">
        <input required minlength="5" type="text" id="name_sender" name="name_sender" placeholder="Nome Completo" />
        <input required type="email" id="sender_email" name="sender_email" placeholder="Endereço e-mail" />
      </div>
      <div class="input-box">
        <input required minlength="8" type="tel" id="number_cel" name="number_cel" placeholder="Número Celular" />
        <input required type="text" id="title_message" name="title_message" placeholder="Assunto e-mail" />
      </div>
      <textarea required id="user_message" name="user_message" rows="6" placeholder="Sua Mensagem"></textarea>
      <button type="submit" class="btn btn-primary">
        <i class="bx bx-send"></i> Enviar Mensagem
      </button>
    </form>
  `;
}

export function renderFooter({ name }) {
  return `
    <p>Copyright &copy; ${new Date().getFullYear()} por ${name} | Todos os direitos reservados</p>
    <a href="#home" class="footer-top" aria-label="Voltar ao topo" data-scroll-top>
      <i class="bx bx-up-arrow-alt"></i>
    </a>
  `;
}

export function toastMarkup(message, type) {
  return `<i class="bx ${type === "success" ? "bx-check-circle" : "bx-error-circle"}"></i><span>${message}</span>`;
}
