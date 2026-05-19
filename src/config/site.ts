/**
 * Configuração do site — TUDO que muda por cliente fica aqui.
 *
 * Branch: andre-barbosa
 * Cliente: André Barbosa Advocacia (foco em Direito Trabalhista)
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
  name: "André Barbosa Advocacia",
  shortName: "André Barbosa",
  oab: "OAB/SP 00.000", // ← preencher com OAB real
  tagline: "Advocacia Trabalhista",
  description:
    "Advocacia trabalhista com atendimento humanizado e estratégia técnica. Defesa dos seus direitos diante de demissões injustas, verbas não pagas, assédio e mais.",
  url: "https://template-advocacia-git-andre-barbosa.vercel.app",

  contact: {
    phone: "(11) 93472-2863",
    whatsapp: "5511934722863",
    whatsappMessage:
      "Olá, Dr. André. Vim pelo site e gostaria de tirar uma dúvida trabalhista.",
    email: "contato@andrebarbosaadv.com.br",
  },

  social: {
    instagram: "https://instagram.com/andrebarbosaadv",
  },

  hero: {
    eyebrow: "André Barbosa · Advocacia Trabalhista",
    headline: "Seus direitos",
    headlineEmphasis: "não podem esperar.",
    subheadline:
      "Demissão injusta, verbas não pagas, assédio no trabalho. Existe lei, existe justiça — e existem direitos que devem ser respeitados.",
    ctaPrimary: "Consulta gratuita",
    ctaSecondary: "Ver áreas de atuação",
    stats: [
      { value: "100%", label: "Foco em trabalhista" },
      { value: "1ª", label: "Consulta gratuita" },
      { value: "24h", label: "Resposta no WhatsApp" },
    ],
  },

  highlights: [
    {
      icon: "Gavel",
      title: "Justiça que age rápido",
      description:
        "Análise técnica imediata do seu caso e início ágil das medidas — porque cada dia importa em ações trabalhistas.",
    },
    {
      icon: "Handshake",
      title: "Atendimento humanizado",
      description:
        "Linguagem clara, escuta atenta e contato direto com o advogado responsável. Sem juridiquês, sem promessas vazias.",
    },
    {
      icon: "ShieldCheck",
      title: "Experiência e ética",
      description:
        "Atuação pautada pelo Código de Ética da OAB, com sigilo absoluto e transparência total sobre prazos e honorários.",
    },
  ],

  about: {
    eyebrow: "Sobre o escritório",
    title:
      "Defendemos quem foi desrespeitado pela empresa — com técnica e firmeza.",
    name: "Dr. André Barbosa",
    role: "Advogado Trabalhista — OAB/SP 00.000",
    // photo: "/sobre.png", // adicionar foto quando disponível
    bio: [
      "O escritório André Barbosa Advocacia atua exclusivamente em Direito do Trabalho, com foco na defesa de trabalhadores que tiveram seus direitos violados — seja por demissão injusta, verbas rescisórias não pagas, assédio moral, jornada abusiva ou trabalho sem registro.",
      "Cada caso é analisado com rigor técnico, transparência sobre os cenários reais e estratégia processual definida em conjunto com o cliente. Você sabe o que esperar em cada etapa — sem promessas, sem juridiquês.",
    ],
    credentials: [
      "Especialização em Direito do Trabalho",
      "Atuação em rescisões indiretas e ações revisionais",
      "Defesa em casos de assédio moral e dano existencial",
      "Acompanhamento direto do cliente em todas as fases",
    ],
    stat: { value: "100%", label: "Foco em Direito Trabalhista" },
  },

  practiceAreas: [
    {
      id: "trabalhista",
      label: "Trabalhista",
      areas: [
        {
          icon: "Briefcase",
          title: "Verbas Rescisórias",
          description:
            "Cobrança de verbas não pagas: aviso prévio, férias, 13º, FGTS, multa e tudo o que é seu por direito após a demissão.",
        },
        {
          icon: "AlertTriangle",
          title: "Demissão Injusta",
          description:
            "Análise da legalidade da demissão por justa causa e reversão quando houver irregularidade na conduta da empresa.",
        },
        {
          icon: "Clock",
          title: "Horas Extras e Adicionais",
          description:
            "Cobrança de horas extras, adicional noturno, periculosidade, insalubridade e intervalos intra/interjornada não respeitados.",
        },
        {
          icon: "ShieldAlert",
          title: "Assédio Moral",
          description:
            "Indenização por danos morais em casos de humilhação, perseguição, sobrecarga abusiva e situações degradantes no trabalho.",
        },
        {
          icon: "FileX",
          title: "Trabalho Sem Registro",
          description:
            "Reconhecimento de vínculo empregatício e cobrança retroativa de todas as verbas devidas pelo período trabalhado.",
        },
        {
          icon: "Gavel",
          title: "Rescisão Indireta",
          description:
            "Quando a empresa comete falta grave, o empregado pode pedir a rescisão e receber todas as verbas como se fosse demissão sem justa causa.",
        },
      ],
    },
    {
      id: "familia",
      label: "Família",
      areas: [
        {
          icon: "Baby",
          title: "Guarda de Filhos",
          description:
            "Definição de guarda compartilhada ou unilateral, regulamentação de visitas e proteção do melhor interesse da criança.",
        },
        {
          icon: "Coins",
          title: "Pensão Alimentícia",
          description:
            "Fixação, revisão ou execução de pensão — para filhos, ex-cônjuge ou ascendentes, com cálculos justos e atualizados.",
        },
        {
          icon: "HeartCrack",
          title: "Divórcio",
          description:
            "Divórcio consensual ou litigioso, com partilha de bens equilibrada e foco em preservar o emocional de todos os envolvidos.",
        },
        {
          icon: "Home",
          title: "Planejamento Familiar",
          description:
            "Orientação jurídica preventiva para proteger sua família: união estável, pacto antenupcial, testamento e doação em vida.",
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
      title: "Consulta gratuita",
      description:
        "Marcamos a consulta inicial sem custo. Analisamos documentos e avaliamos a viabilidade do caso.",
    },
    {
      step: "03",
      title: "Estratégia e proposta",
      description:
        "Apresentamos a melhor estratégia, prazos realistas e honorários por escrito antes de qualquer compromisso.",
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
      role: "Rescisão indireta",
      initials: "CL",
      quote:
        "O Dr. André foi atencioso desde o primeiro contato. Conseguiu reverter minha demissão por justa causa e ainda ganhei todas as verbas devidas.",
    },
    {
      name: "Cliente",
      role: "Horas extras",
      initials: "CL",
      quote:
        "Trabalhei anos sem receber horas extras corretamente. Em poucos meses o escritório conseguiu o pagamento retroativo. Recomendo demais.",
    },
    {
      name: "Cliente",
      role: "Assédio moral",
      initials: "CL",
      quote:
        "Profissional sério, ético e que trata o cliente como gente. Me senti acolhida e respeitada durante todo o processo.",
    },
  ],

  faq: [
    {
      question: "A primeira consulta é mesmo gratuita?",
      answer:
        "Sim. A análise inicial do seu caso é gratuita e sem compromisso. Você apresenta a situação, avaliamos a viabilidade jurídica e só seguimos se fizer sentido pra você.",
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
      question: "Já fui demitido por justa causa — ainda posso reverter?",
      answer:
        "Sim, em muitos casos a justa causa aplicada pela empresa é irregular ou desproporcional. Vale a pena fazer uma análise técnica antes de aceitar a demissão.",
    },
    {
      question: "Vocês atendem presencial ou só online?",
      answer:
        "Atendemos das duas formas. Consultas e acompanhamento podem ser totalmente online por videochamada e WhatsApp, ou presenciais no escritório quando preferir.",
    },
  ],
};
