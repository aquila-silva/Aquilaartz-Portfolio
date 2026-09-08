const artworks = [
  {
    title: "Perspectiva",
    category: "Estudo · 2024",
    image: "assets/img/arte-perspec.jpg",
    description: "Uma investigação sobre profundidade, ritmo e direção.",
  },
  {
    title: "Como que pode",
    category: "Ilustração · 2024",
    image: "assets/img/aquilaartz-banner-1-como-que-pode.webp",
    description:
      "Uma cena de fantasia construída entre cor, narrativa e escala.",
    layout: "wide",
  },
  {
    title: "Orc azul",
    category: "Personagem · 2024",
    image: "assets/img/aquilaartz-blue-orc.webp",
    description: "Estudo de personagem com foco em volume, luz e expressão.",
  },
  {
    title: "Galdino",
    category: "Capa · 2024",
    image: "assets/img/aquilaartz-galdno-coverart.webp",
    description:
      "Arte de capa desenvolvida para uma narrativa visual irreverente.",
  },
  {
    title: "Retrato I",
    category: "Retrato · 2024",
    image: "assets/img/aquilaartz-retrato-1.webp",
    description: "Retrato digital explorando gesto, cor e identidade.",
  },
  {
    title: "Retrato II",
    category: "Retrato · 2024",
    image: "assets/img/aquilaartz-retrato-2.webp",
    description: "Estudo de luz suave e construção de personalidade.",
  },
  {
    title: "Retrato III",
    category: "Retrato · 2024",
    image: "assets/img/aquilaartz-retrato-3.webp",
    description: "Uma pesquisa de cor aplicada ao retrato contemporâneo.",
  },
  {
    title: "Orc — ícone",
    category: "Design de personagem · 2024",
    image: "assets/img/aquilaartz-or-icon.webp",
    description:
      "Variação de personagem pensada para uma linguagem mais gráfica.",
  },
  {
    title: "Orc em linha",
    category: "Animação · 2024",
    image: "assets/img/aquilaartz-icon-orc-gif.gif",
    description: "Estudo animado de traço e silhueta.",
  },
];
const artGrid = document.querySelector("#art-grid");
const modal = document.querySelector("#art-modal");
const themeButtons = document.querySelectorAll("[data-theme-choice]");

function setTheme(theme) {
  document.body.dataset.theme = theme;
  themeButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.themeChoice === theme),
    );
  });
  localStorage.setItem("aquilaartz-theme", theme);
}

const savedTheme = localStorage.getItem("aquilaartz-theme") || "light";
setTheme(savedTheme);
themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
});

function renderArtworks() {
  if (!artGrid) return;
  artGrid.innerHTML = artworks
    .map(
      (artwork, index) =>
        `<article class="art-card${artwork.layout ? ` is-${artwork.layout}` : ""}"><button class="art-trigger" type="button" data-art-index="${index}" aria-label="Abrir obra ${artwork.title}"><span class="art-image-wrap"><img src="${artwork.image}" alt="${artwork.title}, ${artwork.category}"></span><span class="art-card-meta"><strong>${artwork.title}</strong><span>${artwork.category}</span></span></button></article>`,
    )
    .join("");
}

function openArtwork(index) {
  const artwork = artworks[index];
  if (!modal || !artwork) return;
  modal.querySelector("#modal-image").src = artwork.image;
  modal.querySelector("#modal-image").alt = artwork.title;
  modal.querySelector("#modal-title").textContent = artwork.title;
  modal.querySelector("#modal-description").textContent = artwork.description;
  modal.showModal();
}

renderArtworks();
document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
document.querySelectorAll(".menu-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    document.querySelector(".site-nav").classList.toggle("is-open", !isOpen);
  });
});
artGrid?.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-art-index]");
  if (trigger) openArtwork(Number(trigger.dataset.artIndex));
});
modal
  ?.querySelector(".modal-close")
  .addEventListener("click", () => modal.close());
modal?.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});
