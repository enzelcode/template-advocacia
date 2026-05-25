/**
 * Configuração do site — TUDO que muda por cliente fica aqui.
 *
 * Branch: allan-reis
 * Cliente: Advogado Allan Reis (Advocacia · Maringá-PR)
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
  name: "Allan Reis Advocacia",
  shortName: "Allan Reis",
  oab: "OAB/PR 00.000", // ← preencher com OAB real
  tagline: "Defesa dos seus direitos com ética e excelência",
  description:
    "Escritório de advocacia comprometido com ética, transparência e excelência. Atendimento personalizado e atuação estratégica em múltiplas áreas do direito.",
  url: "https://template-advocacia-git-allan-reis.vercel.app",

  logo: {
    src: "/ar.png",
    width: 1034,
    height: 287,
    alt: "Allan Reis Advocacia",
  },

  contact: {
    phone: "(44) 99740-4433",
    whatsapp: "5544997404433",
    whatsappMessage:
      "Olá, Dr. Allan. Vim pelo site e gostaria de uma análise do meu caso.",
    email: "contato@allanreisadvocacia.com.br", // ← placeholder, preencher quando tiver
    address: "Maringá · PR",
  },

  social: {
    instagram: "https://www.instagram.com/advocacia.allanreis/",
  },

  hero: {
    eyebrow: "Allan Reis · Advocacia",
    headline: "Defesa dos seus direitos",
    headlineEmphasis: "com ética e excelência.",
    subheadline:
      "Atendimento personalizado e atuação estratégica em múltiplas áreas do direito. Ética, transparência e excelência na prestação de serviços jurídicos.",
    ctaPrimary: "Falar com o advogado",
    ctaSecondary: "Áreas de atuação",
    stats: [
      { value: "6", label: "Áreas de atuação" },
      { value: "Online", label: "Atendimento em todo Brasil" },
      { value: "24h", label: "Resposta no WhatsApp" },
    ],
  },

  // Os 3 pilares da marca do Allan: Ética, Confiança, Dedicação
  highlights: [
    {
      icon: "ShieldCheck",
      title: "Ética",
      description:
        "Atuação pautada pelo Código de Ética da OAB, com sigilo absoluto e transparência total em todas as etapas do caso.",
    },
    {
      icon: "HeartHandshake",
      title: "Confiança",
      description:
        "Atendimento personalizado e contato direto com o advogado. Você sabe o que esperar em cada movimento.",
    },
    {
      icon: "Target",
      title: "Dedicação",
      description:
        "Análise técnica rigorosa e busca constante pela melhor defesa dos seus direitos. Sem juridiquês, sem promessa vazia.",
    },
  ],

  about: {
    eyebrow: "Sobre o escritório",
    title: "Defendendo seus direitos com excelência.",
    name: "Dr. Allan Reis",
    role: "Advogado — OAB/PR 00.000",
    // Sem foto ainda → seção Sobre renderiza placeholder com monograma "AR".
    photo: undefined,
    bio: [
      "Allan Reis Advocacia é um escritório comprometido com ética, transparência e excelência na prestação de serviços jurídicos. Bacharel em Direito pela Unicesumar desde 2018, atuo com dedicação e compromisso desde o início da minha trajetória na advocacia.",
      "Meu compromisso é oferecer soluções jurídicas eficazes e personalizadas, sempre buscando a melhor defesa para os seus direitos.",
    ],
    credentials: [
      "Bacharel em Direito · Unicesumar (2018)",
      "Atuação contínua na defesa de direitos",
      "Atendimento personalizado e direto",
      "Ética, transparência e excelência",
    ],
    stat: { value: "100%", label: "Atendimento personalizado" },
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
          title: "Família e Sucessões",
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
          title: "Consultoria Jurídica",
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
        "Profissional sério, ético e que escuta de verdade. Resolveu meu caso com tranquilidade e respeito em todas as etapas.",
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
        "Defesa técnica impecável. Senti segurança e clareza em todas as audiências — o Dr. Allan realmente domina o que faz.",
    },
  ],

  faq: [
    {
      question: "Quais áreas o escritório atua?",
      answer:
        "Direito Criminal, Família, Família e Sucessões, Previdenciário, Civil e Consultoria Jurídica para pessoas e empresas. Se o seu caso não se encaixa em nenhuma delas, dá pra avaliar na análise inicial.",
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
        "Atendo das duas formas. Consultas podem ser totalmente online por videochamada e WhatsApp, ou presenciais em Maringá-PR mediante agendamento.",
    },
    {
      question: "Em quanto tempo o caso anda?",
      answer:
        "Depende da área e da complexidade. Apresentamos uma estimativa realista de prazos na análise inicial — sem promessa vazia.",
    },
    {
      question: "Posso falar diretamente com o advogado?",
      answer:
        "Sim. O contato é direto comigo em todas as etapas, com atualizações periódicas e canal aberto pra dúvidas pelo WhatsApp.",
    },
  ],
};
