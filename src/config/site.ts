/**
 * Configuração do site — TUDO que muda por cliente fica aqui.
 *
 * Ao criar uma branch nova pra um cliente (ex: `vila-nova`), edite somente
 * este arquivo (e as imagens em /public). Os componentes leem tudo daqui.
 *
 * O conteúdo abaixo é placeholder (lorem ipsum) — substituir na branch do cliente.
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

  contact: {
    phone: string;
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
  name: "Lorem Ipsum Advocacia",
  shortName: "Lorem Ipsum",
  oab: "OAB/SP 000.000",
  tagline: "Lorem ipsum dolor sit amet, consectetur",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  url: "https://template-advocacia.vercel.app",

  contact: {
    phone: "(00) 00000-0000",
    whatsapp: "5500000000000",
    whatsappMessage: "Lorem ipsum dolor sit amet.",
    email: "contato@loremipsum.adv.br",
    address: "Lorem Ipsum, 1000 — Cidade/UF",
  },

  social: {
    instagram: "https://instagram.com/loremipsum",
    linkedin: "https://linkedin.com/in/loremipsum",
  },

  hero: {
    eyebrow: "Lorem ipsum · dolor sit",
    headline: "Lorem ipsum dolor sit amet,",
    headlineEmphasis: "consectetur adipiscing.",
    subheadline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaPrimary: "Lorem ipsum dolor",
    ctaSecondary: "Sit amet consectetur",
    stats: [
      { value: "20+", label: "Anos de atuação" },
      { value: "850", label: "Casos conduzidos" },
      { value: "98%", label: "Satisfação" },
    ],
  },

  highlights: [
    {
      icon: "MonitorSmartphone",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      icon: "ShieldCheck",
      title: "Consectetur elit",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    },
    {
      icon: "Lock",
      title: "Sit amet adipiscing",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
  ],

  about: {
    eyebrow: "Quem nós somos",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    name: "Lorem Ipsum",
    role: "Advogado(a) — OAB/SP 000.000",
    photo: "/about-photo.jpg",
    bio: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    credentials: [
      "Lorem ipsum dolor sit — Universidade Ipsum",
      "Pós-graduação em Lorem Ipsum",
      "Membro da Comissão Lorem Ipsum da OAB",
      "Autor de publicações em Lorem Ipsum",
    ],
    stat: { value: "20+", label: "Anos no contencioso" },
  },

  practiceAreas: [
    {
      icon: "Briefcase",
      title: "Lorem Trabalhista",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      icon: "Heart",
      title: "Ipsum de Família",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    },
    {
      icon: "ShoppingBag",
      title: "Dolor do Consumidor",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
    {
      icon: "Scale",
      title: "Sit amet Civil",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    },
    {
      icon: "Home",
      title: "Consectetur Imobiliário",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      icon: "FileText",
      title: "Adipiscing Preventiva",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      step: "02",
      title: "Dolor sit amet",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      step: "03",
      title: "Consectetur elit",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      step: "04",
      title: "Adipiscing veniam",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    },
  ],

  testimonials: [
    {
      name: "Lorem S.",
      role: "Cliente — Trabalhista",
      initials: "LS",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Ipsum P.",
      role: "Cliente — Consumidor",
      initials: "IP",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Dolor L.",
      role: "Cliente — Família",
      initials: "DL",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ],

  faq: [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Consectetur adipiscing elit, sed do eiusmod?",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Duis aute irure dolor in reprehenderit?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Excepteur sint occaecat cupidatat non proident?",
      answer:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Nemo enim ipsam voluptatem quia voluptas?",
      answer:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    },
  ],
};
