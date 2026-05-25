/**
 * Configuração do site — TUDO que muda por cliente fica aqui.
 *
 * Branch: ricardo-almeida
 * Cliente: Advogado Ricardo Almeida (Advocacia e Assessoria Jurídica)
 */

export type PracticeArea = {
  title: string;
  description: string;
  icon: string;
};

export type PracticeAreaGroup = {
  id: string;
  label: string;
  areas: PracticeArea[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role?: string;
  initials: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  oab: string;
  tagline: string;
  description: string;
  url: string;
  logo?: { src: string; width: number; height: number; alt: string };

  contact: {
    phone?: string;
    whatsapp: string;
    whatsappMessage: string;
    email: string;
    address?: string;
  };

  social: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };

  hero: {
    eyebrow: string;
    headline: string;
    headlineEmphasis: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary?: string;
    stats: Stat[];
  };

  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];

  about: {
    eyebrow: string;
    title: string;
    name: string;
    role: string;
    photo?: string;
    bio: string[];
    credentials: string[];
    stat?: Stat;
  };

  practiceAreas: PracticeAreaGroup[];

  process: ProcessStep[];

  testimonials: Testimonial[];

  faq: FaqItem[];
};

export const siteConfig: SiteConfig = {
  name: "Ricardo Almeida Advocacia",
  shortName: "Ricardo Almeida",
  oab: "OAB/SP 00.000", // ← preencher com OAB real
  tagline: "Advocacia e Assessoria Jurídica",
  description:
    "Advocacia estratégica e personalizada — Direito Criminal, Família, Sucessões, Previdenciário, Civil e Consultoria Jurídica. Análise técnica e atendimento humanizado.",
  url: "https://template-advocacia-git-ricardo-almeida.vercel.app",

  // Sem arquivo de logo ainda — o header renderiza a marca inline (monograma RA + nome serifado)

  contact: {
    phone: "(11) 9 6535-2425",
    whatsapp: "5511965352425",
    whatsappMessage:
      "Olá, Dr. Ricardo. Vim pelo site e gostaria de uma análise do meu caso.",
    email: "drricardoalmeidaadv@gmail.com",
    address: "São Paulo · SP",
  },

  social: {
    instagram: "https://www.instagram.com/adv.ricardoalmeida/",
  },

  hero: {
    eyebrow: "Ricardo Almeida · Advocacia & Assessoria Jurídica",
    headline: "Seu direito,",
    headlineEmphasis: "nossa missão.",
    subheadline:
      "Atuação estratégica e personalizada para proteger os seus direitos. Direito Criminal, Família, Previdenciário e mais — análise técnica e atendimento humanizado.",
    ctaPrimary: "Falar com o advogado",
    ctaSecondary: "Áreas de atuação",
    stats: [
      { value: "6", label: "Áreas de atuação" },
      { value: "Online", label: "Atendimento em todo Brasil" },
      { value: "24h", label: "Resposta no WhatsApp" },
    ],
  },

  highlights: [
    {
      icon: "HeartHandshake",
      title: "Atendimento humanizado e transparente",
      description:
        "Escuta atenta, linguagem acessível e contato direto com o advogado em todas as etapas. Sem juridiquês, sem promessa vazia.",
    },
    {
      icon: "Target",
      title: "Foco em resultados",
      description:
        "Estratégia desenhada caso a caso, com objetivos claros e prazos honestos. Você sabe o que esperar em cada movimento.",
    },
    {
      icon: "Compass",
      title: "Análise técnica e estratégica",
      description:
        "Cada caso é estudado a fundo antes de qualquer ação. Compromisso, técnica e ética em cada detalhe do seu caso.",
    },
  ],

  about: {
    eyebrow: "Sobre o escritório",
    title: "Cada cliente é único. Cada direito será respeitado.",
    name: "Dr. Ricardo Almeida",
    role: "Advogado — OAB/SP 00.000",
    // Sem foto ainda → seção Sobre renderiza placeholder com a inicial.
    photo: undefined,
    bio: [
      "Prazer, Ricardo Almeida. Atuo na advocacia com foco em soluções estratégicas, sempre buscando o melhor resultado pra cada cliente.",
      "Compromisso, técnica e ética em cada detalhe do seu caso. Cada caso é único e merece uma análise especializada — defendendo seus direitos hoje, garantindo o seu amanhã.",
    ],
    credentials: [
      "Direito Criminal e estratégia de defesa",
      "Direito de Família e Sucessões",
      "Direito Previdenciário e Civil",
      "Assessoria e Consultoria Jurídica",
    ],
    stat: { value: "6", label: "Áreas de atuação" },
  },

  practiceAreas: [
    {
      id: "atuacao",
      label: "Áreas",
      areas: [
        {
          icon: "Gavel",
          title: "Direito Criminal",
          description:
            "Defesa técnica e estratégia em todas as fases do processo — investigação, audiências, recursos e tribunal do júri.",
        },
        {
          icon: "Heart",
          title: "Direito de Família",
          description:
            "Soluções jurídicas para proteger o que mais importa: divórcio, guarda, pensão alimentícia e regulamentação de visitas.",
        },
        {
          icon: "ScrollText",
          title: "Direito de Família e Sucessões",
          description:
            "Planejamento sucessório, inventários, partilhas e testamentos — com cuidado, sigilo e segurança jurídica.",
        },
        {
          icon: "Landmark",
          title: "Direito Previdenciário",
          description:
            "Aposentadorias, benefícios e revisões com análise técnica especializada para você receber o que é seu por direito.",
        },
        {
          icon: "Scale",
          title: "Direito Civil",
          description:
            "Contratos, indenizações, obrigações e demais demandas cíveis — análise rigorosa antes de qualquer movimento.",
        },
        {
          icon: "Briefcase",
          title: "Assessoria e Consultoria Jurídica",
          description:
            "Prevenção de conflitos e segurança jurídica para pessoas e empresas — assessoria contínua ou pontual.",
        },
      ],
    },
  ],

  process: [
    {
      step: "01",
      title: "Primeiro contato",
      description:
        "Você nos chama pelo WhatsApp ou formulário e descreve resumidamente sua situação. Confirmamos disponibilidade.",
    },
    {
      step: "02",
      title: "Análise inicial",
      description:
        "Avaliamos documentos, prazos e a viabilidade jurídica do caso — com clareza sobre cenários reais.",
    },
    {
      step: "03",
      title: "Estratégia e proposta",
      description:
        "Apresentamos a estratégia, prazos estimados e honorários por escrito antes de qualquer compromisso.",
    },
    {
      step: "04",
      title: "Ação e acompanhamento",
      description:
        "Conduzimos o processo com atualizações periódicas e canal direto pra dúvidas — sem você correr atrás.",
    },
  ],

  testimonials: [
    {
      name: "Cliente",
      role: "Direito de Família",
      initials: "CL",
      quote:
        "Profissional sério, ético e que escuta de verdade. Resolveu meu divórcio com tranquilidade e respeito em todas as etapas.",
    },
    {
      name: "Cliente",
      role: "Direito Previdenciário",
      initials: "CL",
      quote:
        "Tive minha aposentadoria revisada e recebi atrasados que nem sabia que tinha direito. Atendimento claro do começo ao fim.",
    },
    {
      name: "Cliente",
      role: "Direito Criminal",
      initials: "CL",
      quote:
        "Defesa técnica impecável. Senti segurança e clareza em todas as audiências — o Dr. Ricardo realmente domina o que faz.",
    },
  ],

  faq: [
    {
      question: "Quais áreas o escritório atua?",
      answer:
        "Direito Criminal, Família, Família e Sucessões, Previdenciário, Civil, além de Assessoria e Consultoria Jurídica para pessoas e empresas. Se o seu caso não se encaixa em nenhuma delas, dá pra avaliar na análise inicial.",
    },
    {
      question: "Como funciona a primeira consulta?",
      answer:
        "A análise inicial do seu caso é gratuita e sem compromisso. Você apresenta a situação, avaliamos a viabilidade jurídica e só seguimos juntos se fizer sentido pra você.",
    },
    {
      question: "Como são cobrados os honorários?",
      answer:
        "Depende da área e do caso — pode ser honorário fixo, parcelado ou por êxito (você só paga se ganhar). Tudo é combinado por escrito antes de iniciar o trabalho.",
    },
    {
      question: "Atende presencial ou só online?",
      answer:
        "Atendo das duas formas. Consultas podem ser totalmente online por videochamada e WhatsApp, ou presenciais em São Paulo mediante agendamento.",
    },
    {
      question: "Em quanto tempo o caso anda?",
      answer:
        "Depende da área e da complexidade. Apresentamos uma estimativa realista de prazos na análise inicial — sem promessa vazia.",
    },
    {
      question: "Posso falar diretamente com o advogado?",
      answer:
        "Sim. O contato é direto com o Dr. Ricardo em todas as etapas, com atualizações periódicas e canal aberto pra dúvidas pelo WhatsApp.",
    },
  ],
};
