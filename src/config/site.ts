/**
 * Configuração do site — TUDO que muda por cliente fica aqui.
 *
 * Branch: jean-carlos
 * Cliente: Advogado Jean Carlos (Trabalhista — Demissão e Assédio)
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
  name: "Jean Carlos Advocacia",
  shortName: "Jean Carlos",
  oab: "OAB/UF 00.000", // ← preencher com OAB real
  tagline: "Advogado Trabalhista · Demissão e Assédio",
  description:
    "Advocacia trabalhista focada em demissão indevida, assédio moral e direitos ignorados. Análise técnica do seu caso, linguagem direta e estratégia clara — pra você não perder o que é seu por direito.",
  url: "https://template-advocacia-git-jean-carlos.vercel.app",

  // Sem arquivo de logo — o header renderiza a marca inline (ícone + serifa)

  contact: {
    // Sem telefone/WhatsApp ainda — o site cai pro formulário e e-mail.
    phone: "",
    whatsapp: "",
    whatsappMessage: "",
    email: "contato@jeancarlosadvocacia.com.br",
    address: "",
  },

  social: {
    instagram: "https://www.instagram.com/adv.jeancarlosoficial/",
  },

  hero: {
    eyebrow: "Jean Carlos · Advogado Trabalhista",
    headline: "Você pode estar perdendo",
    headlineEmphasis: "o que é seu por direito.",
    subheadline:
      "Demissão indevida, assédio moral, direitos ignorados — análise técnica do seu caso com linguagem direta. Sem juridiquês, sem promessa vazia.",
    ctaPrimary: "Falar com o advogado",
    ctaSecondary: "Áreas de atuação",
    stats: [
      { value: "100%", label: "Foco em trabalhista" },
      { value: "Online", label: "Atendimento em todo Brasil" },
      { value: "24h", label: "Resposta às mensagens" },
    ],
  },

  highlights: [
    {
      icon: "ShieldAlert",
      title: "Demissão e assédio",
      description:
        "Atuação direta em demissão indevida, rescisão indireta e assédio moral — com análise técnica de provas e estratégia clara.",
    },
    {
      icon: "Scale",
      title: "Direitos ignorados",
      description:
        "Verbas não pagas, horas extras, adicionais e vínculo não reconhecido. Cada caso estudado a fundo antes de qualquer estratégia.",
    },
    {
      icon: "Handshake",
      title: "Linguagem direta",
      description:
        "Você sabe o que esperar em cada etapa: cenários reais, prazos honestos e contato direto com o advogado. Sem juridiquês.",
    },
  ],

  about: {
    eyebrow: "Sobre o escritório",
    title: "Defesa técnica do trabalhador — com estratégia e transparência.",
    name: "Dr. Jean Carlos",
    role: "Advogado — OAB/UF 00.000",
    // Sem foto ainda → seção Sobre renderiza placeholder texturizado com a inicial.
    photo: undefined,
    bio: [
      "Jean Carlos Advocacia atua exclusivamente em Direito do Trabalho, com foco na defesa de empregados que tiveram seus direitos violados — seja por demissão indevida, assédio moral, verbas não pagas ou trabalho sem registro.",
      "Cada caso é conduzido com análise técnica rigorosa, transparência sobre prazos e probabilidades reais. Você sabe o que esperar em cada etapa, sem juridiquês e sem promessa vazia.",
    ],
    credentials: [
      "Atuação em demissão indevida e rescisão indireta",
      "Defesa em casos de assédio moral",
      "Recuperação de verbas e direitos ignorados",
      "Análise de contratos e horas extras",
    ],
    stat: { value: "100%", label: "Atuação trabalhista" },
  },

  practiceAreas: [
    {
      id: "trabalhador",
      label: "Trabalhador",
      areas: [
        {
          icon: "ShieldAlert",
          title: "Assédio Moral",
          description:
            "Indenização por danos morais em casos de humilhação, perseguição, pressão abusiva ou sobrecarga injustificada no trabalho.",
        },
        {
          icon: "Gavel",
          title: "Demissão Indevida",
          description:
            "Demissão sem justa causa mal calculada, descontos abusivos ou justa causa aplicada de forma irregular — você não precisa aceitar.",
        },
        {
          icon: "FileX",
          title: "Direitos Ignorados",
          description:
            "Verbas trabalhistas não pagas, FGTS em atraso, 13º, férias e benefícios suprimidos durante ou após o vínculo.",
        },
        {
          icon: "Clock",
          title: "Horas Extras",
          description:
            "Horas extras, adicional noturno, intervalos não respeitados e jornada excessiva — com cálculos detalhados.",
        },
        {
          icon: "Briefcase",
          title: "Rescisão Indireta",
          description:
            "Quando a empresa comete falta grave, você pode pedir rescisão e receber todas as verbas como se fosse demissão sem justa causa.",
        },
        {
          icon: "AlertTriangle",
          title: "Trabalho Sem Registro",
          description:
            "Reconhecimento de vínculo empregatício e cobrança retroativa de todas as verbas devidas pelo período não registrado.",
        },
      ],
    },
  ],

  process: [
    {
      step: "01",
      title: "Primeiro contato",
      description:
        "Você nos chama pelo formulário ou Instagram e descreve resumidamente sua situação. Confirmamos disponibilidade.",
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
      role: "Assédio moral",
      initials: "CL",
      quote:
        "Profissional sério, ético e que escuta de verdade. Me senti respeitada durante todo o processo e o resultado superou a expectativa.",
    },
    {
      name: "Cliente",
      role: "Demissão indevida",
      initials: "CL",
      quote:
        "Fui demitido de forma irregular e quase aceitei o que ofereceram. O Dr. Jean revisou tudo e recuperei valores que nem sabia que tinha direito.",
    },
    {
      name: "Cliente",
      role: "Reconhecimento de vínculo",
      initials: "CL",
      quote:
        "Trabalhei como autônomo por anos, mas era empregado de verdade. O escritório conseguiu o reconhecimento do vínculo e todas as verbas retroativas.",
    },
  ],

  faq: [
    {
      question: "Como saber se sofri assédio moral no trabalho?",
      answer:
        "Humilhações públicas, perseguição constante, metas impossíveis, isolamento, gritos ou pressão psicológica recorrente podem caracterizar assédio. Na análise inicial avaliamos os indícios, provas possíveis (mensagens, áudios, testemunhas) e a viabilidade do caso.",
    },
    {
      question: "Qual o prazo para entrar com uma ação trabalhista?",
      answer:
        "O prazo é de até 2 anos após o término do contrato de trabalho. Dentro desse período, é possível cobrar valores referentes aos últimos 5 anos. Agir rápido faz diferença.",
    },
    {
      question: "A primeira consulta é gratuita?",
      answer:
        "Sim. A análise inicial do seu caso é gratuita e sem compromisso. Você apresenta a situação, avaliamos a viabilidade e só seguimos se fizer sentido.",
    },
    {
      question: "Quanto custa contratar o escritório?",
      answer:
        "Em ações trabalhistas geralmente trabalhamos com honorários ad exitum — você só paga se ganhar a causa, com um percentual combinado por escrito antes de iniciar.",
    },
    {
      question: "Quanto tempo demora um processo trabalhista?",
      answer:
        "Depende da complexidade e da Vara, mas processos trabalhistas levam em média de 8 a 18 meses. Apresentamos uma estimativa realista na análise inicial.",
    },
    {
      question: "Atende presencial ou só online?",
      answer:
        "Atendo das duas formas. Consultas podem ser totalmente online por videochamada, ou presenciais conforme combinado.",
    },
  ],
};
