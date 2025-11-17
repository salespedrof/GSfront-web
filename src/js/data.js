const profissionais = [
  {
    nome: "Ana Ribeiro",
    cargo: "UX Designer Pleno",
    local: "São Paulo - SP",
    foto: "src/img/ana.jpg",
    resumoCurto: "Focada em pesquisa com usuários e prototipação para produtos digitais inclusivos.",
    detalhes: {
      pessoaisAcademicos:
        "28 anos, UX Designer Pleno. Graduada em Design Digital, pós-graduação em Experiência do Usuário.",
      experiencias: [
        "UX Designer na fintech VoltPay (atual).",
        "Estágio em UX no setor de saúde digital.",
      ],
      hardSkills: ["Figma", "User Research", "Design System", "Prototipação"],
      softSkills: ["Empatia", "Comunicação clara", "Escuta ativa"],
      hobbies: ["Ilustração digital", "Café com leitura", "Workshops de acessibilidade"],
    },
  },
  {
    nome: "Bruno Martins",
    cargo: "Desenvolvedor Front-End",
    local: "Campinas - SP",
    foto: "src/img/bruno.jpg",
    resumoCurto:
      "Desenvolvedor focado em interfaces responsivas e acessíveis para aplicações web.",
    detalhes: {
      pessoaisAcademicos:
        "24 anos, graduando em Engenharia de Software. Atua como front-end em startup de logística.",
      experiencias: [
        "Front-End Developer em startup de logística (atual).",
        "Freelancer desenvolvendo landing pages para pequenos negócios.",
      ],
      hardSkills: ["HTML5", "CSS3", "JavaScript", "Git", "Consumo de APIs REST"],
      softSkills: ["Colaboração", "Resiliência", "Resolução de problemas"],
      hobbies: ["Ciclismo", "Hackathons", "Comunidades de tecnologia"],
    },
  },
  {
    nome: "Carla Nogueira",
    cargo: "Analista de Dados Júnior",
    local: "São Paulo - SP",
    foto: "src/img/carla.jpg",
    resumoCurto:
      "Apaixonada por transformar dados em decisões para negócios mais eficientes.",
    detalhes: {
      pessoaisAcademicos:
        "26 anos, formada em Sistemas de Informação, certificação em Analytics.",
      experiencias: [
        "Analista de Dados Jr em empresa de varejo.",
        "Projeto acadêmico de BI para área de educação.",
      ],
      hardSkills: ["SQL", "Power BI", "Python básico", "Excel avançado"],
      softSkills: ["Pensamento analítico", "Curiosidade", "Organização"],
      hobbies: ["Jogos de tabuleiro", "Podcasts de ciência de dados"],
    },
  },
  {
    nome: "Diego Lima",
    cargo: "Desenvolvedor Back-End",
    local: "São Bernardo do Campo - SP",
    foto: "src/img/diego.jpg",
    resumoCurto:
      "Atua na estrutura que ninguém vê, garantindo performance e segurança das APIs.",
    detalhes: {
      pessoaisAcademicos:
        "23 anos, cursando Engenharia de Software. Participa de projetos de pesquisa em arquitetura de software.",
      experiencias: [
        "Back-End Developer em e-commerce de moda.",
        "Monitor de programação na faculdade.",
      ],
      hardSkills: ["Node.js", "Express", "Banco de dados relacional", "Testes automatizados"],
      softSkills: ["Trabalho em equipe", "Pensamento lógico", "Autonomia"],
      hobbies: ["Séries de ficção científica", "Games cooperativos", "Cozinhar"],
    },
  },
  {
    nome: "Eduarda Souza",
    cargo: "Analista de RH Digital",
    local: "Santo André - SP",
    foto: "src/img/eduarda.jpg",
    resumoCurto:
      "Faz a ponte entre pessoas e tecnologia para recrutamento mais justo e inclusivo.",
    detalhes: {
      pessoaisAcademicos:
        "29 anos, formada em Psicologia, especialização em Gestão de Pessoas e HR Tech.",
      experiencias: [
        "Analista de RH em empresa de tecnologia.",
        "Projetos com implantação de ATS e People Analytics.",
      ],
      hardSkills: ["People Analytics", "Ferramentas de ATS", "Entrevistas por competências"],
      softSkills: ["Empatia", "Escuta ativa", "Feedback construtivo"],
      hobbies: ["Corrida de rua", "Mentoria de carreira", "Clubes de leitura"],
    },
  },
  {
    nome: "Felipe Andrade",
    cargo: "Product Manager",
    local: "São Paulo - SP",
    foto: "src/img/felipe.jpg",
    resumoCurto:
      "Conecta visão de negócio, tecnologia e experiência do usuário em produtos digitais.",
    detalhes: {
      pessoaisAcademicos:
        "31 anos, formado em Administração, MBA em Gestão de Produtos Digitais.",
      experiencias: [
        "PM em plataforma de educação online.",
        "Experiência anterior em sales operations.",
      ],
      hardSkills: ["Roadmapping", "Discovery", "Métricas de produto", "OKRs"],
      softSkills: ["Visão sistêmica", "Comunicação", "Negociação"],
      hobbies: ["Fotografia urbana", "Viagens", "Workshops de inovação"],
    },
  },
  {
    nome: "Gabriela Santos",
    cargo: "Cientista de Dados Jr",
    local: "São Paulo - SP",
    foto: "src/img/gabriela.jpg",
    resumoCurto:
      "Interessa-se por modelos preditivos aplicados a problemas reais de negócios.",
    detalhes: {
      pessoaisAcademicos:
        "27 anos, graduada em Engenharia de Computação, cursos em Machine Learning.",
      experiencias: [
        "Cientista de Dados Jr em empresa de meios de pagamento.",
        "Projetos de previsão de demanda e churn.",
      ],
      hardSkills: ["Python", "Pandas", "Machine Learning básico", "Visualização de dados"],
      softSkills: ["Curiosidade", "Aprendizado contínuo", "Colaboração"],
      hobbies: ["Música ao vivo", "Comunidades de tecnologia", "Meetups"],
    },
  },
  {
    nome: "Henrique Costa",
    cargo: "DevOps Engineer",
    local: "São Paulo - SP",
    foto: "src/img/henrique.jpg",
    resumoCurto:
      "Trabalha para que times de desenvolvimento entreguem valor de forma contínua e segura.",
    detalhes: {
      pessoaisAcademicos:
        "30 anos, formado em Redes de Computadores, com certificações em Cloud.",
      experiencias: [
        "DevOps em empresa de serviços financeiros.",
        "Experiência com pipelines CI/CD e automação.",
      ],
      hardSkills: ["Linux", "Docker", "CI/CD", "Cloud"],
      softSkills: ["Proatividade", "Responsabilidade", "Comunicação entre times"],
      hobbies: ["Automação residencial", "Podcast de tecnologia", "Churrasco com amigos"],
    },
  },
  {
    nome: "Isabela Rocha",
    cargo: "Scrum Master",
    local: "São Paulo - SP",
    foto: "src/img/isabela.jpg",
    resumoCurto:
      "Ajuda times a trabalharem de forma ágil, com foco em entrega contínua de valor.",
    detalhes: {
      pessoaisAcademicos:
        "32 anos, formada em Engenharia de Produção, certificação em Scrum.",
      experiencias: [
        "Scrum Master em squads de produtos digitais.",
        "Atuação anterior como analista de processos.",
      ],
      hardSkills: ["Scrum", "Kanban", "Facilitação de cerimônias", "Métricas ágeis"],
      softSkills: ["Facilitação", "Escuta ativa", "Resolução de conflitos"],
      hobbies: ["Yoga", "Voluntariado", "Workshops de facilitação"],
    },
  },
  {
    nome: "João Pedro Alves",
    cargo: "Estudante de Engenharia de Software",
    local: "São Paulo - SP",
    foto: "src/img/joao.jpg",
    resumoCurto:
      "Em transição para a área de tecnologia, focado em desenvolvimento web full stack.",
    detalhes: {
      pessoaisAcademicos:
        "20 anos, estudante de Engenharia de Software, participando de projetos acadêmicos.",
      experiencias: [
        "Participação em projeto de Global Solution.",
        "Criação de sites pessoais e pequenos sistemas para estudo.",
      ],
      hardSkills: ["HTML", "CSS", "JavaScript básico", "Git"],
      softSkills: ["Vontade de aprender", "Adaptabilidade", "Trabalho em equipe"],
      hobbies: ["Games", "Conteúdo de tecnologia no YouTube", "Eventos de comunidade"],
    },
  },
];
