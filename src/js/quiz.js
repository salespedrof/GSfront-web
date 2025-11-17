const perguntasQuiz = [
  {
    pergunta:
      "1. O que melhor descreve o conceito de 'futuro do trabalho'?",
    alternativas: [
      "Apenas a adoção de escritórios totalmente remotos.",
      "A combinação de tecnologia, novas competências e modelos flexíveis de trabalho.",
      "A substituição completa de pessoas por máquinas.",
      "A volta de modelos de trabalho 100% presenciais.",
    ],
    correta: 1,
  },
  {
    pergunta:
      "2. Qual das competências abaixo é considerada fundamental para o futuro do trabalho?",
    alternativas: [
      "Decorar comandos de uma única linguagem de programação.",
      "Resistir a mudanças e manter processos antigos.",
      "Aprendizado contínuo e adaptabilidade.",
      "Trabalhar isolado e evitar colaboração.",
    ],
    correta: 2,
  },
  {
    pergunta:
      "3. Em um contexto de times distribuídos e remotos, qual ferramenta é mais associada à colaboração?",
    alternativas: [
      "Planilha impressa.",
      "Quadro de avisos físico.",
      "Plataformas de chat, videochamada e gestão de tarefas.",
      "Telefone fixo compartilhado.",
    ],
    correta: 2,
  },
  {
    pergunta:
      "4. People Analytics é utilizado principalmente para:",
    alternativas: [
      "Analisar apenas o desempenho financeiro da empresa.",
      "Tomar decisões intuitivas sem nenhum dado.",
      "Apoiar decisões de gestão de pessoas com base em dados.",
      "Substituir totalmente profissionais de RH.",
    ],
    correta: 2,
  },
  {
    pergunta:
      "5. Em relação à diversidade e inclusão no futuro do trabalho, é correto afirmar que:",
    alternativas: [
      "É apenas um tema de marketing e não influencia resultados.",
      "É irrelevante em equipes de tecnologia.",
      "Contribui para inovação, tomadas de decisão melhores e clima organizacional mais saudável.",
      "É responsabilidade exclusiva da área de RH.",
    ],
    correta: 2,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");
  const btnEnviar = document.getElementById("btn-enviar-quiz");
  const resultadoEl = document.getElementById("resultado-quiz");

  if (!quizContainer || !btnEnviar || !resultadoEl) return;

  perguntasQuiz.forEach((item, index) => {
    const bloco = document.createElement("article");
    bloco.classList.add("quiz__pergunta");

    const titulo = document.createElement("h3");
    titulo.textContent = item.pergunta;

    const lista = document.createElement("ul");
    lista.classList.add("quiz__alternativas");

    item.alternativas.forEach((alt, idxAlt) => {
      const li = document.createElement("li");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `pergunta-${index}`;
      input.value = idxAlt;
      input.id = `p${index}-a${idxAlt}`;

      const label = document.createElement("label");
      label.setAttribute("for", input.id);
      label.textContent = alt;

      li.appendChild(input);
      li.appendChild(label);
      lista.appendChild(li);
    });

    bloco.appendChild(titulo);
    bloco.appendChild(lista);
    quizContainer.appendChild(bloco);
  });

  btnEnviar.addEventListener("click", () => {
    let acertos = 0;

    perguntasQuiz.forEach((item, index) => {
      const selecionada = document.querySelector(
        `input[name="pergunta-${index}"]:checked`
      );
      if (selecionada && Number(selecionada.value) === item.correta) {
        acertos++;
      }
    });

    resultadoEl.classList.remove("quiz__resultado--bom", "quiz__resultado--ruim");

    if (acertos >= 4) {
      resultadoEl.textContent = `Excelente! Você acertou ${acertos} de ${perguntasQuiz.length}. Está bem alinhado(a) ao futuro do trabalho.`;
      resultadoEl.classList.add("quiz__resultado--bom");
    } else {
      resultadoEl.textContent = `Você acertou ${acertos} de ${perguntasQuiz.length}. Vale revisar alguns conceitos sobre o futuro do trabalho.`;
      resultadoEl.classList.add("quiz__resultado--ruim");
    }
  });
});
