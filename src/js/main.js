let indiceProfissionalAtual = 0;
let indiceSlideAtual = 0;

document.addEventListener("DOMContentLoaded", () => {
  renderizarCards();
  configurarModal();
});

function scrollToSection(id) {
  const alvo = document.getElementById(id);
  if (alvo) alvo.scrollIntoView({ behavior: "smooth" });
}

function renderizarCards() {
  const container = document.getElementById("lista-profissionais");
  container.innerHTML = "";

  profissionais.forEach((profissional, indice) => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.dataset.indice = indice;

    card.innerHTML = `
      <div class="card__topo">
        <img src="${profissional.foto}" alt="Foto de ${profissional.nome}" class="card__foto" />
        <div>
          <h3 class="card__nome">${profissional.nome}</h3>
          <p class="card__cargo">${profissional.cargo}</p>
          <p class="card__local">${profissional.local}</p>
        </div>
      </div>
      <p class="card__resumo">${profissional.resumoCurto}</p>
      <div class="card__skills">
        ${profissional.detalhes.hardSkills
          .slice(0, 3)
          .map((skill) => `<span class="skill-pill">${skill}</span>`)
          .join("")}
      </div>
      <div class="card__rodape">
        <span>Ver perfil completo</span>
        <span>➜</span>
      </div>
    `;

    card.addEventListener("click", () => abrirModal(indice));
    container.appendChild(card);
  });
}

function configurarModal() {
  const modal = document.getElementById("modal-perfil");
  const btnFechar = document.getElementById("modal-fechar");
  const btnPrev = document.getElementById("modal-prev");
  const btnNext = document.getElementById("modal-next");

  btnFechar.addEventListener("click", () => fecharModal());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
  });

  btnPrev.addEventListener("click", () => mudarSlide(-1));
  btnNext.addEventListener("click", () => mudarSlide(1));
}

function abrirModal(indice) {
  indiceProfissionalAtual = indice;
  indiceSlideAtual = 0;

  const modal = document.getElementById("modal-perfil");
  const profissional = profissionais[indice];

  document.getElementById("modal-foto").src = profissional.foto;
  document.getElementById("modal-foto").alt = `Foto de ${profissional.nome}`;
  document.getElementById("modal-nome").textContent = profissional.nome;
  document.getElementById("modal-cargo").textContent = profissional.cargo;
  document.getElementById("modal-local").textContent = profissional.local;

  atualizarSlide();
  modal.classList.remove("oculto");
}

function fecharModal() {
  const modal = document.getElementById("modal-perfil");
  modal.classList.add("oculto");
}

function obterSlidesDoProfissional(profissional) {
  return [
    {
      titulo: "Informações pessoais e acadêmicas",
      conteudo: profissional.detalhes.pessoaisAcademicos,
    },
    {
      titulo: "Experiências profissionais",
      conteudo:
        "- " +
        profissional.detalhes.experiencias
          .map((exp) => exp)
          .join("\n- "),
    },
    {
      titulo: "Habilidades técnicas (hard skills)",
      conteudo: profissional.detalhes.hardSkills.join(", "),
    },
    {
      titulo: "Soft skills e hobbies",
      conteudo:
        "Soft skills: " +
        profissional.detalhes.softSkills.join(", ") +
        "\n\nHobbies: " +
        profissional.detalhes.hobbies.join(", "),
    },
  ];
}

function atualizarSlide() {
  const profissional = profissionais[indiceProfissionalAtual];
  const slides = obterSlidesDoProfissional(profissional);

  if (indiceSlideAtual < 0) {
    indiceSlideAtual = slides.length - 1;
  } else if (indiceSlideAtual >= slides.length) {
    indiceSlideAtual = 0;
  }

  const slideAtual = slides[indiceSlideAtual];
  const tituloEl = document.getElementById("modal-slide-titulo");
  const conteudoEl = document.getElementById("modal-slide-conteudo");
  const indicadorEl = document.getElementById("modal-indicador");

  tituloEl.textContent = slideAtual.titulo;
  conteudoEl.textContent = slideAtual.conteudo;
  indicadorEl.textContent = `Slide ${indiceSlideAtual + 1} de ${slides.length}`;
}

function mudarSlide(delta) {
  indiceSlideAtual += delta;
  atualizarSlide();
}
