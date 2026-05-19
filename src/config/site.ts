/**
 * Configuração do site — TUDO que muda por cliente fica aqui.
 *
 * Branch: vila-nova
 * Cliente: Vila Nova | Advocacia e Assessoria Jurídica
 */

export type PracticeArea = {
  title: string;
  description: string;
  icon: string;
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

  practiceAreas: PracticeArea[];

  process: ProcessStep[];

  testimonials: Testimonial[];

  faq: FaqItem[];
};

export const siteConfig: SiteConfig = {
  name: "Vila Nova | Advocacia e Assessoria Jurídica",
  shortName: "Vila Nova",
  oab: "OAB/PB 00.000", // ← preencher com o número real
  tagline: "Advocacia e Assessoria Jurídica",
  description:
    "Atendimento jurídico especializado em Direito Civil, Trabalhista e Previdenciário. Consultas mediante agendamento.",
  url: "https://template-advocacia-git-vila-nova.vercel.app",

  logo: {
    src: "/vn.webp",
    width: 700,
    height: 200,
    alt: "Vila Nova — Advocacia e Assessoria Jurídica",
  },

  contact: {
    phone: "(32) 9985-8984",
    whatsapp:
      "https://api.whatsapp.com/message/WRDW2BB5KJ7OP1?autoload=1&app_absent=0&utm_source=ig",
    whatsappMessage:
      "Olá, vim pelo site da Vila Nova Advocacia e gostaria de tirar uma dúvida.",
    email: "contato@vilanovadvocacia.adv.br",
    address: "Barbacena · MG",
  },

  social: {
    instagram: "https://www.instagram.com/leandrovilanova.adv/",
  },

  hero: {
    eyebrow: "Vila Nova · Advocacia e Assessoria Jurídica",
    headline: "Direito que",
    headlineEmphasis: "defende você.",
    subheadline:
      "Atuação em Direito Civil, Trabalhista e Previdenciário — com escuta atenta, técnica apurada e estratégia clara.",
    ctaPrimary: "Agendar consulta",
    ctaSecondary: "Áreas de atuação",
    stats: [
      { value: "100%", label: "Atendimento personalizado" },
      { value: "5+", label: "Áreas de atuação" },
      { value: "24h", label: "Resposta no WhatsApp" },
    ],
  },

  highlights: [
    {
      icon: "ShieldCheck",
      title: "Análise jurídica criteriosa",
      description:
        "Cada caso é estudado a fundo antes de qualquer estratégia — sem promessas, com clareza sobre prazos e probabilidades reais.",
    },
    {
      icon: "Handshake",
      title: "Atendimento próximo",
      description:
        "Consultas mediante agendamento, com escuta atenta e linguagem acessível. Você fala direto com o advogado responsável.",
    },
    {
      icon: "Lock",
      title: "Sigilo e ética profissional",
      description:
        "Atuação pautada pelo Código de Ética da OAB, com sigilo absoluto sobre todas as informações compartilhadas.",
    },
  ],

  about: {
    eyebrow: "Sobre o escritório",
    title:
      "Um escritório que une técnica jurídica e atendimento humanizado.",
    name: "Dr. Leandro Vila Nova",
    role: "Advogado — Vila Nova Advocacia",
    bio: [
      "Vila Nova Advocacia e Assessoria Jurídica é um escritório especializado em Direito Civil, Trabalhista e Previdenciário, com atuação focada na defesa dos direitos do cliente e na construção de soluções jurídicas sólidas e eficazes.",
      "Cada caso é conduzido com escuta atenta, análise técnica rigorosa e total transparência sobre prazos, riscos e custos. Acreditamos que o direito se faz com presença, ética e estratégia — não com promessas.",
    ],
    credentials: [
      "Especialização em Direito Civil e Trabalhista",
      "Atuação em ações previdenciárias e revisionais",
      "Elaboração e revisão de contratos empresariais e particulares",
      "Adequação à LGPD para empresas e profissionais",
    ],
    stat: { value: "100%", label: "Casos com acompanhamento direto" },
  },

  practiceAreas: [
    {
      icon: "Scale",
      title: "Direito Civil",
      description:
        "Indenizações por danos morais e materiais, responsabilidade civil, questões contratuais e ações cíveis em geral.",
    },
    {
      icon: "ShoppingBag",
      title: "Direito do Consumidor",
      description:
        "Cobranças indevidas, negativações injustas, problemas com bancos, planos de saúde, comércio eletrônico e prestadores de serviço.",
    },
    {
      icon: "Briefcase",
      title: "Direito do Trabalho",
      description:
        "Verbas rescisórias, rescisão indireta, assédio moral, horas extras, estabilidade da gestante e reconhecimento de vínculo.",
    },
    {
      icon: "HeartHandshake",
      title: "Direito Previdenciário",
      description:
        "Aposentadorias, auxílios, BPC/LOAS, revisões e acréscimo de 25% para aposentados por invalidez junto ao INSS.",
    },
    {
      icon: "FileText",
      title: "Elaboração de Contratos",
      description:
        "Análise, revisão e elaboração de contratos civis e empresariais, com cláusulas claras e proteção jurídica adequada.",
    },
    {
      icon: "ShieldCheck",
      title: "Adequação à LGPD",
      description:
        "Consultoria preventiva para adequação de empresas e profissionais à Lei Geral de Proteção de Dados.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Primeiro contato",
      description:
        "Você nos chama pelo WhatsApp ou e-mail e descreve resumidamente sua demanda. Confirmamos disponibilidade.",
    },
    {
      step: "02",
      title: "Agendamento",
      description:
        "Marcamos a consulta no melhor horário pra você — presencial ou online. Pedimos os documentos relevantes com antecedência.",
    },
    {
      step: "03",
      title: "Análise e proposta",
      description:
        "Avaliamos o caso, explicamos cenários possíveis e apresentamos honorários por escrito antes de qualquer compromisso.",
    },
    {
      step: "04",
      title: "Acompanhamento",
      description:
        "Conduzimos o caso com atualizações periódicas e canal direto pra dúvidas — sem você ficar correndo atrás de informação.",
    },
  ],

  testimonials: [
    {
      name: "Cliente",
      role: "Direito do Trabalho",
      initials: "CL",
      quote:
        "Atendimento atencioso desde o primeiro contato. O Dr. Leandro explicou tudo com clareza e conduziu o processo com seriedade.",
    },
    {
      name: "Cliente",
      role: "Direito Previdenciário",
      initials: "CL",
      quote:
        "Profissional sério e dedicado. Conseguiu o acréscimo de 25% na minha aposentadoria após meses tentando sozinho.",
    },
    {
      name: "Cliente",
      role: "Direito do Consumidor",
      initials: "CL",
      quote:
        "Resolveu em poucas semanas uma cobrança indevida que eu vinha arrastando há mais de um ano. Recomendo demais.",
    },
  ],

  faq: [
    {
      question: "Como funcionam as consultas?",
      answer:
        "As consultas são mediante agendamento, podendo ser presenciais ou online por videochamada. Após o primeiro contato pelo WhatsApp, confirmamos um horário e enviamos as orientações sobre documentos necessários.",
    },
    {
      question: "Vocês atendem em todo o Brasil?",
      answer:
        "Sim. Atuamos com atendimento online em todo o território nacional para ações cíveis, trabalhistas, previdenciárias e elaboração de contratos.",
    },
    {
      question: "Quanto custa contratar o escritório?",
      answer:
        "Os honorários variam conforme a complexidade e o tipo de causa. Em ações trabalhistas e previdenciárias, geralmente trabalhamos com honorários ad exitum (percentual sobre o êxito). Tudo é apresentado por escrito e combinado em contrato antes do início.",
    },
    {
      question: "Quanto tempo demora um processo?",
      answer:
        "Depende da Vara e da complexidade. Processos trabalhistas levam em média de 8 a 18 meses; previdenciários, de 12 a 24 meses. Apresentamos uma estimativa realista logo na análise inicial do caso.",
    },
    {
      question: "Vocês fazem orçamentos por DM no Instagram?",
      answer:
        "Não. Para garantir uma análise responsável e proteger seus dados, qualquer orientação jurídica é feita exclusivamente em consulta agendada. Pelo WhatsApp confirmamos disponibilidade e tiramos dúvidas sobre o agendamento.",
    },
  ],
};
