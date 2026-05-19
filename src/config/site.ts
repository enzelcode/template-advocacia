/**
 * Configuração do site — TUDO que muda por cliente fica aqui.
 *
 * Branch: jonathan-lopes
 * Cliente: Advogado Jonathan Lopes (Direito do Empregado)
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
  name: "Jonathan Lopes Advocacia",
  shortName: "Jonathan Lopes",
  oab: "OAB/DF 00.000", // ← preencher com OAB real
  tagline: "Especialista em Direito do Empregado",
  description:
    "Advocacia trabalhista especializada em direito do empregado — verbas, horas extras, assédio e reconhecimento de vínculo. Análise técnica e atendimento humanizado.",
  url: "https://template-advocacia-git-jonathan-lopes.vercel.app",

  // Sem arquivo de logo — o header renderiza a marca inline (ícone de balança + serifa)

  contact: {
    phone: "(61) 8652-1233",
    whatsapp:
      "https://api.whatsapp.com/message/2GKIBEWLKGXEB1?autoload=1&app_absent=0",
    whatsappMessage:
      "Olá, Dr. Jonathan. Vim pelo site e gostaria de tirar uma dúvida trabalhista.",
    email: "jonathan.rodrigo_df@hotmail.com",
    address: "Brasília · DF",
  },

  social: {
    instagram: "https://www.instagram.com/jonathanroodrigo/",
    facebook: "https://www.facebook.com/adv.jonathanrodrigo",
    linkedin: "https://www.linkedin.com/in/jonathan-lopes-799551236",
  },

  hero: {
    eyebrow: "Jonathan Lopes · Direito do Empregado",
    headline: "Conhecer seus direitos",
    headlineEmphasis: "faz toda a diferença.",
    subheadline:
      "Análise técnica de contratos e verbas trabalhistas, defesa do empregado e orientação jurídica segura — pra você receber o que é seu por direito.",
    ctaPrimary: "Falar com o advogado",
    ctaSecondary: "Áreas de atuação",
    stats: [
      { value: "100%", label: "Foco em trabalhista" },
      { value: "Online", label: "Atendimento em todo Brasil" },
      { value: "24h", label: "Resposta no WhatsApp" },
    ],
  },

  highlights: [
    {
      icon: "Scale",
      title: "Análise técnica segura",
      description:
        "Cada caso é estudado a fundo antes de qualquer estratégia. Você recebe um parecer claro sobre viabilidade e prazos.",
    },
    {
      icon: "Handshake",
      title: "Atendimento humanizado",
      description:
        "Linguagem acessível, escuta atenta e contato direto com o advogado. Sem juridiquês e sem promessas vazias.",
    },
    {
      icon: "ShieldCheck",
      title: "Sigilo e ética",
      description:
        "Atuação pautada pelo Código de Ética da OAB, com sigilo absoluto sobre todas as informações compartilhadas.",
    },
  ],

  about: {
    eyebrow: "Sobre o escritório",
    title: "Defesa técnica de quem trabalha — com presença e estratégia.",
    name: "Dr. Jonathan Lopes",
    role: "Advogado — OAB/DF 00.000",
    photo: "/j.png",
    bio: [
      "Jonathan Lopes Advocacia atua exclusivamente em Direito do Trabalho, com foco na defesa de empregados que tiveram seus direitos violados — seja por verbas não pagas, demissão indevida, assédio moral ou trabalho sem registro.",
      "Cada caso é conduzido com análise técnica rigorosa, transparência sobre prazos e probabilidades reais. Você sabe o que esperar em cada etapa, sem juridiquês.",
    ],
    credentials: [
      "Especialização em Direito do Trabalho",
      "Atuação em rescisões indiretas e horas extras",
      "Análise de contratos e verbas trabalhistas",
      "Defesa em casos de assédio moral",
    ],
    stat: { value: "100%", label: "Atuação trabalhista" },
  },

  practiceAreas: [
    {
      id: "empregado",
      label: "Empregado",
      areas: [
        {
          icon: "Briefcase",
          title: "Verbas Rescisórias",
          description:
            "Cobrança de aviso prévio, férias, 13º, FGTS, multa e tudo o que é seu por direito após a demissão.",
        },
        {
          icon: "Clock",
          title: "Horas Extras",
          description:
            "Horas extras, adicional noturno, intervalos não respeitados e jornada excessiva — com cálculos detalhados.",
        },
        {
          icon: "FileX",
          title: "Trabalho Sem Registro",
          description:
            "Reconhecimento de vínculo empregatício e cobrança retroativa de todas as verbas devidas pelo período.",
        },
        {
          icon: "ShieldAlert",
          title: "Assédio Moral",
          description:
            "Indenização por danos morais em casos de humilhação, perseguição ou sobrecarga abusiva no trabalho.",
        },
        {
          icon: "Gavel",
          title: "Rescisão Indireta",
          description:
            "Quando a empresa comete falta grave, você pode pedir rescisão e receber todas as verbas como demissão sem justa causa.",
        },
        {
          icon: "AlertTriangle",
          title: "Adicionais e Periculosidade",
          description:
            "Insalubridade, periculosidade e demais adicionais não pagos durante o vínculo empregatício.",
        },
      ],
    },
  ],

  process: [
    {
      step: "01",
      title: "Primeiro contato",
      description:
        "Você nos chama pelo WhatsApp e descreve resumidamente sua situação. Confirmamos disponibilidade.",
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
      role: "Verbas rescisórias",
      initials: "CL",
      quote:
        "Atendimento atencioso desde o primeiro contato. Recebi todas as verbas que a empresa não tinha pago e o Dr. Jonathan explicou tudo com clareza.",
    },
    {
      name: "Cliente",
      role: "Reconhecimento de vínculo",
      initials: "CL",
      quote:
        "Trabalhei como autônomo por anos, mas era empregado de verdade. O escritório conseguiu o reconhecimento do vínculo e todas as verbas retroativas.",
    },
    {
      name: "Cliente",
      role: "Assédio moral",
      initials: "CL",
      quote:
        "Profissional sério, ético e que escuta de verdade. Me senti respeitada durante todo o processo.",
    },
  ],

  faq: [
    {
      question: "Qual o prazo para entrar com uma ação trabalhista?",
      answer:
        "O prazo é de até 2 anos após o término do contrato de trabalho. Dentro desse período, é possível cobrar valores referentes aos últimos 5 anos. Por isso, agir rápido faz diferença.",
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
        "Atendo das duas formas. Consultas podem ser totalmente online por videochamada e WhatsApp, ou presenciais em Brasília quando preferir.",
    },
  ],
};
