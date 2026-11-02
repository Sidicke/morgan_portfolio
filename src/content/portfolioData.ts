export interface NavigationItem {
  label: string;
  href: string;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  focus: string;
}

export interface TimelineMilestone {
  period: string;
  title: string;
  role: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  category: string;
  context: string;
  role: string;
  intervention: string;
  result: string;
  hasLink: boolean;
}

export interface PortfolioContentV4 {
  meta: {
    publicName: string;
    fullName: string;
    signature: string;
    roleTitle: string;
    corridor: string;
    heroH1Line1: string;
    heroH1Line2: string;
    heroH1Italic: string;
    heroParagraph: string;
    ctaPrimary: {
      label: string;
      href: string;
    };
    ctaSecondary: {
      label: string;
      href: string;
    };
  };
  navigation: NavigationItem[];
  about: {
    sectionBadge: string;
    heading: string;
    leadParagraph: string;
    bodyParagraph: string;
    quote: string;
    commitments: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  expertises: {
    sectionBadge: string;
    heading: string;
    intro: string;
    items: ExpertiseItem[];
  };
  timeline: {
    sectionBadge: string;
    heading: string;
    intro: string;
    milestones: TimelineMilestone[];
  };
  caseStudies: {
    sectionBadge: string;
    heading: string;
    intro: string;
    studies: CaseStudy[];
  };
  contact: {
    sectionBadge: string;
    heading: string;
    subtitle: string;
    location: string;
    channels: {
      type: "email" | "whatsapp" | "tiktok";
      label: string;
      value: string;
      actionUrl: string;
    }[];
    dataNotice: string;
  };
  footer: {
    name: string;
    signature: string;
    copyrightOwner: string;
  };
}

export const portfolioContent: PortfolioContentV4 = {
  meta: {
    publicName: "Morgan Bocovo",
    fullName: "Morgan Bocovo",
    signature: "ENTREPRENEUR · IMPORT-EXPORT · BÉNIN",
    roleTitle: "Entrepreneur & Conseiller en Projets d'Importation",
    corridor: "Chine & France ➔ Bénin",
    heroH1Line1: "Bâtir des relations.",
    heroH1Line2: "Connecter les marchés.",
    heroH1Italic: "Connecter",
    heroParagraph:
      "J'accompagne les entrepreneurs et commerçants dans la sécurisation de leurs importations depuis la Chine et la France vers le Bénin.",
    ctaPrimary: {
      label: "Échanger sur WhatsApp",
      href: "https://wa.me/2290167174369?text=Bonjour%20Morgan%20Bocovo,%20je%20souhaite%20échanger%20sur%20un%20projet%20d%27importation.",
    },
    ctaSecondary: {
      label: "Découvrir mes services",
      href: "#expertises",
    },
  },
  navigation: [
    { label: "À propos", href: "#a-propos" },
    { label: "Services", href: "#expertises" },
    { label: "Parcours", href: "#parcours" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    sectionBadge: "Repères & Trajectoire",
    heading: "L'humain et la rigueur du terrain au cœur des échanges.",
    leadParagraph:
      "Entrepreneur à la croisée de la technologie, de la finance et du commerce international, j'associe rigueur analytique et expérience du terrain.",
    bodyParagraph:
      "J'accompagne les entreprises dans leurs opérations d'importation, de la vérification des fournisseurs à la coordination logistique entre la Chine, l'Europe et le Bénin.",
    quote:
      "Sécuriser chaque étape de vos approvisionnements pour transformer vos projets d'import en réussites durables.",
    commitments: [
      {
        number: "01",
        title: "Vérifier avant d'engager",
        description: "Sécuriser les fournisseurs et les transactions.",
      },
      {
        number: "02",
        title: "Anticiper les risques",
        description: "Maîtriser les coûts et les imprévus.",
      },
      {
        number: "03",
        title: "Agir sur le terrain",
        description: "Accompagner chaque étape jusqu'à la livraison.",
      },
    ],
  },
  expertises: {
    sectionBadge: "SERVICES & ACCOMPAGNEMENT",
    heading: "Des solutions concrètes pour vos échanges internationaux.",
    intro:
      "De la recherche de fournisseurs à la livraison, un accompagnement adapté à vos projets d'importation.",
    items: [
      {
        id: "sourcing",
        number: "01",
        title: "Sourcing & Audit fournisseurs",
        description:
          "Identification, vérification et négociation auprès de fournisseurs fiables en Chine et en Europe.",
        focus: "Chine & France · 1688 / Alibaba · Audit pré-paiement",
      },
      {
        id: "payments",
        number: "02",
        title: "Sécurisation des paiements",
        description:
          "Accompagnement dans la vérification et la sécurisation des transactions internationales.",
        focus: "Alipay · WeChat Pay · Protection du capital client",
      },
      {
        id: "logistics",
        number: "03",
        title: "Logistique & Transit",
        description:
          "Coordination des expéditions maritimes et aériennes jusqu'à leur arrivée au Bénin.",
        focus: "Fret maritime & aérien · Suivi départ usine · Arrivée Cotonou",
      },
      {
        id: "consulting",
        number: "04",
        title: "Conseil & Faisabilité",
        description:
          "Analyse des coûts, des risques et de la rentabilité de vos projets d'importation.",
        focus: "Analyse systémique · Rentabilité réelle · Cahier des charges",
      },
    ],
  },
  timeline: {
    sectionBadge: "Repères & Trajectoire",
    heading: "De l'analyse au terrain, un parcours construit par l'expérience.",
    intro: "Un parcours entre technologie, finance et commerce international.",
    milestones: [
      {
        period: "01 — ACTUEL",
        title: "Entrepreneur & Conseil en Importation",
        role: "Activité Principale",
        description:
          "Accompagnement de commerçants et d'entreprises dans leurs projets d'approvisionnement et leurs opérations d'importation entre la Chine, la France et le Bénin.",
      },
      {
        period: "02 — EXPÉRIENCE TERRAIN",
        title: "Immersion professionnelle — GDIZ-Bénin",
        role: "Zone Industrielle de Glo-Djigbé",
        description:
          "Expérience de terrain dans l'environnement industriel et logistique de la GDIZ, au contact des opérations et des flux commerciaux.",
      },
      {
        period: "03 — FONDATIONS",
        title: "Technologie, Finance & Analyse",
        role: "Méthodologie & Risques",
        description:
          "Un parcours associant modélisation informatique, analyse financière et approche méthodique des risques.",
      },
    ],
  },
  caseStudies: {
    sectionBadge: "CAS D'ÉTUDE",
    heading: "Sécuriser un approvisionnement, de la Chine au Bénin.",
    intro:
      "Découvrez une approche structurée pour réduire les risques et accompagner les opérations d'importation.",
    studies: [
      {
        id: "case-01",
        number: "01",
        title: "Sécurisation et acheminement d'une ligne d'approvisionnement (Chine ➔ Cotonou)",
        category: "Corridor International",
        context:
          "Un projet d'approvisionnement nécessitant une vérification préalable du fournisseur et une coordination des opérations d'importation.",
        role: "Conseil & Coordination",
        intervention:
          "Analyse du fournisseur, accompagnement des négociations et coordination des étapes d'acheminement.",
        result:
          "Réception conforme de la marchandise à Cotonou, sécurisation intégrale des fonds et jusqu'à 35 % d'économies négociées sur les coûts d'achat.",
        hasLink: false,
      },
    ],
  },
  contact: {
    sectionBadge: "CONTACT DIRECT",
    heading: "Parlons de votre projet d'importation.",
    subtitle:
      "Un projet d'importation depuis la Chine ou la France ? Échangeons sur vos besoins et les solutions adaptées.",
    location: "Cotonou / Abomey-Calavi (Bénin)",
    channels: [
      {
        type: "whatsapp",
        label: "WhatsApp",
        value: "+229 01 67 17 43 69",
        actionUrl:
          "https://wa.me/2290167174369?text=Bonjour%20Morgan%20Bocovo,%20je%20souhaite%20échanger%20avec%20vous%20concernant%20un%20projet%20d%27importation.",
      },
      {
        type: "email",
        label: "E-mail direct",
        value: "bocovomorgan24@gmail.com",
        actionUrl: "mailto:bocovomorgan24@gmail.com",
      },
      {
        type: "tiktok",
        label: "TikTok officiel",
        value: "@morgan.import",
        actionUrl: "https://www.tiktok.com/@morgan.import?_r=1&_t=ZS-9B4xtosHC8S",
      },
    ],
    dataNotice:
      "Les informations recueillies sont destinées exclusivement à l'évaluation de vos besoins d'importation.",
  },
  footer: {
    name: "MORGAN BOCOVO.",
    signature: "Sécuriser chaque étape de vos approvisionnements pour transformer vos projets d'import en réussites durables.",
    copyrightOwner: "Morgan Bocovo",
  },
};
