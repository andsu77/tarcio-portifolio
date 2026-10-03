/**
 * MODEL
 * Fonte única de dados do portfólio. Nenhuma lógica de DOM ou de
 * apresentação deve viver aqui — apenas os dados brutos.
 */

export const profile = {
  name: "Tassio Neves",
  greeting: "Olá, meu nome é",
  roles: ["Desenvolvedor Web", "Desenvolvedor FullStack"],
  education: [
    "Bacharel em Engenharia de Computação na Universidade Federal do Recôncavo da Bahia.",
    "Pós-graduação em Análise e Desenvolvimento de Sistemas.",
  ],
  heroImg: "assets/img/logo-home.png",
  aboutImg: "assets/img/logo-about.png",
  aboutTitle: "Desenvolvedor FullStack!",
  aboutText:
    "Bacharel em Ciências Exatas e Tecnológicas e Engenharia da Computação, " +
    "desenvolvedor Full Stack, com mais de 4 anos de experiência. Desenvolvo " +
    "aplicações que vão do backend com APIs bem estruturadas ao frontend, " +
    "sempre preocupado com organização, princípios de SOLID, desempenho e " +
    "experiência do usuário. Gosto de entender o problema como um todo antes " +
    "de escrever a primeira linha de código. Meu objetivo é evoluir " +
    "continuamente como profissional de tecnologia, contribuindo para " +
    "projetos desafiadores e inovadores, especialmente em ambientes que " +
    "valorizam arquitetura, qualidade de software e impacto real. Se você " +
    "estiver procurando um Desenvolvedor Full Stack dedicado e com " +
    "experiência em JS, TS, React.js, Node e Next.js, ficarei feliz em " +
    "contribuir com minhas habilidades e conhecimentos para sua equipe.",
  cv: "assets/cv/CurriculoTassioNeves2026.pdf",
  cvFileName: "Curriculo Tassio Neves",
};

export const socialLinks = [
  { name: "Facebook", icon: "bx bxl-facebook", url: "https://www.facebook.com/tassions" },
  { name: "Instagram", icon: "bx bxl-instagram-alt", url: "https://www.instagram.com/tassio.neves/" },
  { name: "LinkedIn", icon: "bx bxl-linkedin", url: "https://www.linkedin.com/in/tassio-neves-santos-51aa59180/" },
];

export const navLinks = [
  { label: "Home", target: "home" },
  { label: "Sobre", target: "about" },
  { label: "Tecnologias", target: "services" },
  { label: "Projetos", target: "portifolio" },
  { label: "Contato", target: "contact" },
];

export const skills = [
  {
    title: "Node",
    description:
      "Node.js é um software de código aberto, multiplataforma. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.",
    icon: "assets/icons/nodejs-logo-svgrepo-com.svg",
  },
  {
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
    icon: "assets/icons/javascript-svgrepo-com.svg",
  },
  {
    title: "TypeScript",
    description:
      "TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.",
    icon: "assets/icons/typescript-svgrepo-com.svg",
  },
  {
    title: "ReactJs",
    description:
      "React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    icon: "assets/icons/react-svgrepo-com.svg",
  },
  {
    title: "NextJs",
    description:
      "Next.js é um framework React para construir aplicações web full-stack, com componentes React e recursos de otimização adicionais.",
    icon: "assets/icons/nextjs-svgrepo-com.svg",
  },
  {
    title: "VueJs",
    description:
      "Vue.js é um framework JavaScript de código aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.",
    icon: "assets/icons/vue-svgrepo-com.svg",
  },
  {
    title: "Python",
    description:
      "Python é uma linguagem de programação de alto nível, de propósito geral, usada para desenvolvimento web, ciência de dados, IA e automação.",
    icon: "assets/icons/python-svgrepo-com.svg",
  },
  {
    title: "IA",
    description:
      "Incorporação de modelos inteligentes em sistemas, softwares (ERP, CRM) e fluxos de trabalho existentes para automatizar tarefas, aumentando a eficiência operacional e reduzindo custos.",
    icon: "assets/icons/ai-svgrepo-com.svg",
  },
  {
    title: "Docker",
    description:
      "Docker é uma plataforma de código aberto que usa contêineres para empacotar, distribuir e executar aplicações de forma consistente em qualquer ambiente.",
    icon: "assets/icons/docker-svgrepo-com.svg",
  },
  {
    title: "Figma",
    description:
      "Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.",
    icon: "assets/icons/figma-svgrepo-com.svg",
  },
];

export const projects = [
  {
    title: "Finance AI",
    description: "Projeto em NextJS de um sistema de finanças.",
    img: "assets/img/finance_image.png",
    link: "https://finance-ai-khaki.vercel.app/login",
  },
  {
    title: "Ordem dos Livros",
    description: "Projeto que demonstra a ordem cronológica dos livros.",
    img: "assets/img/ordem-livros.png",
    link: "https://ordemlivrostn.netlify.app/series/harry-potter",
  },
  {
    title: "Trips",
    description: "Plataforma de busca e reservas de viagens estilo AirBnB.",
    img: "assets/img/trips.png",
    link: "https://fsw-trips-tau.vercel.app/",
  },
  {
    title: "Ecommerce Bewear",
    description: "Ecommerce de roupas e acessórios.",
    img: "assets/img/bewear.png",
    link: "https://bewear-ten.vercel.app/",
  },
  {
    title: "McDonald's",
    description: "Plataforma de pedidos de lanches, réplica do McDonald's.",
    img: "assets/img/mcdonalds.png",
    link: "https://mcdonalds-fecf.vercel.app/fsw-donalds",
  },
  {
    title: "Filmes",
    description: "Web de livraria de filmes completo, consumindo API.",
    img: "assets/img/tn_lib.png",
    link: "https://nevesfilmes-lib.vercel.app/",
  },
  {
    title: "TN Barbeshop",
    description: "Um SaaS de barbearia com integração com chatbot.",
    img: "assets/img/aparatus.png",
    link: "https://github.com/tassioNS9/aparatus",
  },
  {
    title: "USF Sistemas",
    description:
      "Sistema web de indicadores de saúde para mulheres, desenvolvido como trabalho de TCC.",
    img: "assets/img/usf_image.png",
    link: "https://github.com/tassioNS9/usf-frontend",
  },
];

export const contactConfig = {
  serviceId: "service_vzsyg4x",
  templateId: "template_tyw4d4j",
  publicKey: "Oblr-mKvudJ0pnYyX",
};
