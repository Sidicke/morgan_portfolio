export interface NavigationItem {
  label: string;
  href: string;
}

export interface CoachingFormula {
  id: string;
  number: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  platformsCount: number;
  platforms: string[];
  features: string[];
  image: string;
  isPopular?: boolean;
  ctaText: string;
  whatsappMessage: string;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  focus: string;
  isCoaching?: boolean;
  badge?: string;
  tagColor?: string;
  accentBg?: string;
  accentText?: string;
  accentBorder?: string;
  iconBg?: string;
}

export interface TimelineMilestone {
  period: string;
  title: string;
  role: string;
  description: string;
  category: string;
  badgeColor: string;
  colorClass: string;
  dotColor: string;
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
  coaching: {
    badge: string;
    heading: string;
    subtitle: string;
    intro: string;
    formulas: CoachingFormula[];
  };
  about: {
    sectionBadge: string;
    heading: string;
    summary: string;
    quote: string;
    quoteAuthor: string;
    pillars: {
      number: string;
      title: string;
      description: string;
      color: string;
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
      colorBg: string;
      colorBorder: string;
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
    corridor: "Chine & France vers le Bénin",
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
    { label: "Services", href: "#expertises" },
    { label: "Parcours", href: "#parcours" },
    { label: "Réalisations", href: "#realisations" },
    { label: "À propos", href: "#a-propos" },
    { label: "Contact", href: "#contact" },
  ],
  coaching: {
    badge: "PROGRAMMES STRATÉGIQUES",
    heading: "Coaching & Accompagnement en Importation",
    subtitle: "Deux formules adaptées à votre niveau d'ambition et à votre modèle commercial",
    intro:
      "Que vous débutiez dans le commerce international ou souhaitiez structurer un réseau de distribution à forte valeur, choisissez le programme conçu pour vous rendre totalement autonome et rentable.",
    formulas: [
      {
        id: "formule-1",
        number: "01",
        name: "Formule 1 : Fondations Stratégiques",
        badge: "Pratique & Accessible",
        tagline: "Maîtrise opérationnelle de 2 plateformes stratégiques",
        description:
          "Une formation pratique et accessible conçue pour transmettre les bases essentielles du commerce international. Ce programme permet de maîtriser 2 plateformes stratégiques (Alibaba et Taobao) afin d'apprendre à rechercher des fournisseurs fiables, négocier les meilleurs tarifs, sécuriser les paiements et gérer le suivi logistique ainsi que la réception des colis.",
        platformsCount: 2,
        platforms: ["Alibaba", "Taobao"],
        features: [
          "Recherche ciblée & identification de fournisseurs vérifiés",
          "Techniques directes de négociation des prix et quantités minimales (MOQ)",
          "Sécurisation intégrale des paiements sans risque d'escroquerie",
          "Suivi logistique départ usine et coordination de réception à Cotonou",
        ],
        image: "/images/formule-1.jpeg",
        isPopular: false,
        ctaText: "Rejoindre la Formule 1",
        whatsappMessage:
          "Bonjour Morgan Bocovo, je souhaite m'inscrire et obtenir toutes les informations concernant la Formule 1 (Bases Alibaba & Taobao).",
      },
      {
        id: "formule-2",
        number: "02",
        name: "Formule 2 : Immersion Sourcing Pro",
        badge: "Programme Avancé & Complet",
        tagline: "Maîtrise approfondie de 6 plateformes incontournables",
        description:
          "Un programme complet et immersif destiné aux entrepreneurs souhaitant exploiter tout le potentiel du sourcing international. Cette formule offre la maîtrise de 6 plateformes incontournables (Alibaba, Taobao, Pinduoduo, JD.ID, Xianyu, etc.), en approfondissant l'audit des fournisseurs, la sécurisation avancée des flux financiers, la gestion complète de la chaîne logistique et la résolution des litiges.",
        platformsCount: 6,
        platforms: ["Alibaba", "Taobao", "Pinduoduo", "JD.ID", "Xianyu", "+ Plateformes Pro"],
        features: [
          "Maîtrise experte de 6 plateformes chinoises pour des prix directs usine",
          "Audit approfondi : solvabilité, antécédents et certifications usines",
          "Sécurisation avancée des flux financiers (Alipay, WeChat Pay, comptes pro)",
          "Gestion de bout en bout de la chaîne logistique (maritime, aérien, dédouanement)",
          "Stratégies préventives et résolution méthodique des litiges commerciaux",
        ],
        image: "/images/formule-2.jpeg",
        isPopular: true,
        ctaText: "Rejoindre la Formule 2 (Immersion)",
        whatsappMessage:
          "Bonjour Morgan Bocovo, je souhaite m'inscrire et bénéficier du programme immersif Formule 2 (Maîtrise de 6 plateformes & Sourcing Avancé).",
      },
    ],
  },
  expertises: {
    sectionBadge: "SERVICES & EXPERTISE",
    heading: "Des solutions concrètes pour vos échanges internationaux.",
    intro:
      "De la formation stratégique à la réception de vos colis, un écosystème sur-mesure pour réussir chaque étape de vos importations.",
    items: [
      {
        id: "coaching",
        number: "01",
        title: "Coaching & Accompagnement",
        badge: "2 Formules disponibles",
        description:
          "Formations et accompagnements stratégiques pour maîtriser le sourcing international, négocier avec les usines et sécuriser vos opérations d'importation.",
        focus: "Formule 1 (Alibaba & Taobao) / Formule 2 (6 Plateformes)",
        isCoaching: true,
        accentBg: "bg-emerald-50 text-emerald-800 border-emerald-300",
        iconBg: "bg-emerald-100 text-emerald-800",
      },
      {
        id: "sourcing",
        number: "02",
        title: "Sourcing & Audit fournisseurs",
        badge: "Chine & Europe",
        description:
          "Identification, vérification et négociation auprès de fournisseurs fiables en Chine et en Europe.",
        focus: "Chine & France / 1688 / Alibaba / Audit pré-paiement",
        accentBg: "bg-amber-50 text-amber-900 border-amber-300",
        iconBg: "bg-amber-100 text-amber-800",
      },
      {
        id: "payments",
        number: "03",
        title: "Sécurisation des paiements",
        badge: "Alipay & WeChat",
        description:
          "Accompagnement dans la vérification et la sécurisation des transactions financières internationales.",
        focus: "Alipay / WeChat Pay / Protection du capital client",
        accentBg: "bg-blue-50 text-blue-900 border-blue-300",
        iconBg: "bg-blue-100 text-blue-800",
      },
      {
        id: "logistics",
        number: "04",
        title: "Logistique & Transit",
        badge: "Fret Maritime & Aérien",
        description:
          "Coordination des expéditions maritimes et aériennes jusqu'à leur arrivée sécurisée au Bénin.",
        focus: "Fret maritime & aérien / Suivi départ usine / Arrivée Cotonou",
        accentBg: "bg-cyan-50 text-cyan-900 border-cyan-300",
        iconBg: "bg-cyan-100 text-cyan-800",
      },
      {
        id: "consulting",
        number: "05",
        title: "Conseil & Faisabilité",
        badge: "Rentabilité Réelle",
        description:
          "Analyse des coûts complets, des risques et de la rentabilité opérationnelle de vos projets d'importation.",
        focus: "Analyse financière / Rentabilité nette / Cahier des charges",
        accentBg: "bg-purple-50 text-purple-900 border-purple-300",
        iconBg: "bg-purple-100 text-purple-800",
      },
    ],
  },
  timeline: {
    sectionBadge: "PARCOURS PROFESSIONNEL",
    heading: "De l'analyse au terrain, un parcours forgé par l'expérience.",
    intro:
      "Une trajectoire multidimensionnelle conjuguant leadership d'entreprise, immersion industrielle et rigueur technique.",
    milestones: [
      {
        period: "01 / Actuel",
        title: "Entrepreneur et conseil en importation",
        role: "CEO BARON MERIDIAN & DG BAO CONSILIUM",
        description:
          "Entrepreneur et conseil en importation : CEO de BARON MERIDIAN & DG de BAO CONSILIUM (Accompagnement, sourcing, sécurisation et logistique Chine/France vers le Bénin).",
        category: "Leadership & Importation",
        badgeColor: "cuivre",
        colorClass: "bg-orange-50 text-orange-900 border-orange-300",
        dotColor: "bg-orange-600",
      },
      {
        period: "02 / Terrain",
        title: "Immersion professionnelle : GDIZ-Bénin",
        role: "Département DEO-GTC",
        description:
          "Immersion professionnelle : Passage au sein du département DEO-GTC à la GDIZ-Bénin (immersion terrain au cœur de l'environnement industriel et des flux logistiques).",
        category: "Industrie & Logistique",
        badgeColor: "vert",
        colorClass: "bg-emerald-50 text-emerald-900 border-emerald-300",
        dotColor: "bg-emerald-600",
      },
      {
        period: "03 / Entrepreneuriat",
        title: "Fondation de BARON MERIDIAN",
        role: "Cabinet de conseil",
        description:
          "Fondation de BARON MERIDIAN : Création d'une entreprise de consulting spécialisée dans la structuration des projets et des approvisionnements.",
        category: "Consulting Stratégique",
        badgeColor: "ambre",
        colorClass: "bg-amber-50 text-amber-900 border-amber-300",
        dotColor: "bg-amber-600",
      },
      {
        period: "04 / Branding",
        title: "Designer graphique",
        role: "Identités visuelles",
        description:
          "Designer graphique : Conception visuelle, branding et création d'identités percutantes pour entreprises et marques.",
        category: "Design & Identité",
        badgeColor: "indigo",
        colorClass: "bg-indigo-50 text-indigo-900 border-indigo-300",
        dotColor: "bg-indigo-600",
      },
      {
        period: "05 / Technique",
        title: "Informatique & Web Développement",
        role: "Ingénierie & Systèmes",
        description:
          "Informatique & Web Développement : Solides fondations techniques en développement web et systèmes, garantissant rigueur et précision méthodologique.",
        category: "Tech & Systèmes",
        badgeColor: "cyan",
        colorClass: "bg-cyan-50 text-cyan-900 border-cyan-300",
        dotColor: "bg-cyan-600",
      },
    ],
  },
  about: {
    sectionBadge: "ENGAGEMENT & VISION",
    heading: "L'humain et la rigueur du terrain au cœur des échanges.",
    summary:
      "Entrepreneur à la croisée de la technologie et du commerce international, j'accompagne commerçants et entreprises dans la sécurisation intégrale de leurs approvisionnements depuis la Chine et la France vers le Bénin. Une démarche concrète : vérifier les usines avant tout engagement, maîtriser chaque coût et coordonner la logistique jusqu'à la livraison finale à Cotonou.",
    quote:
      "Sécuriser chaque étape de vos approvisionnements pour transformer vos projets d'import en réussites durables.",
    quoteAuthor: "Morgan Bocovo",
    pillars: [
      {
        number: "01",
        title: "Vérification préalable",
        description: "Audit strict de solvabilité et de conformité des fournisseurs d'usines.",
        color: "bg-emerald-500/10 text-emerald-800 border-emerald-300",
      },
      {
        number: "02",
        title: "Sécurisation financière",
        description: "Contrôle des flux et anticipation des imprévus sans risque d'escroquerie.",
        color: "bg-amber-500/10 text-amber-900 border-amber-300",
      },
      {
        number: "03",
        title: "Maîtrise logistique",
        description: "Suivi départ usine, acheminement et réception conforme à destination.",
        color: "bg-blue-500/10 text-blue-900 border-blue-300",
      },
    ],
  },
  caseStudies: {
    sectionBadge: "CAS D'ÉTUDE RÉEL",
    heading: "Sécuriser un approvisionnement, de la Chine au Bénin.",
    intro:
      "Une approche méthodique pour éliminer les risques, négocier en direct d'usine et acheminer en toute sérénité.",
    studies: [
      {
        id: "case-01",
        number: "01",
        title: "Sécurisation et acheminement d'une ligne d'approvisionnement (Chine vers Cotonou)",
        category: "Corridor International",
        context:
          "Un projet d'approvisionnement nécessitant une vérification préalable du fournisseur et une coordination complète des opérations d'importation.",
        role: "Conseil & Coordination",
        intervention:
          "Analyse de conformité usine, négociation directe des tarifs et pilotage de l'acheminement maritime.",
        result:
          "Réception conforme à Cotonou, fonds 100% sécurisés et jusqu'à 35% d'économies négociées sur les coûts d'achat usine.",
        hasLink: false,
      },
    ],
  },
  contact: {
    sectionBadge: "CONTACT DIRECT",
    heading: "Parlons de votre projet d'importation.",
    subtitle:
      "Un projet d'importation depuis la Chine ou la France ? Échangeons directement sur vos volumes et votre calendrier.",
    location: "Cotonou / Abomey-Calavi (Bénin)",
    channels: [
      {
        type: "whatsapp",
        label: "WhatsApp Direct",
        value: "+229 01 67 17 43 69",
        actionUrl:
          "https://wa.me/2290167174369?text=Bonjour%20Morgan%20Bocovo,%20je%20souhaite%20échanger%20avec%20vous%20concernant%20un%20projet%20d%27importation.",
        colorBg: "bg-emerald-500/15 hover:bg-emerald-500/25",
        colorBorder: "border-emerald-500/30",
      },
      {
        type: "email",
        label: "E-mail professionnel",
        value: "bocovomorgan24@gmail.com",
        actionUrl: "mailto:bocovomorgan24@gmail.com",
        colorBg: "bg-amber-500/15 hover:bg-amber-500/25",
        colorBorder: "border-amber-500/30",
      },
      {
        type: "tiktok",
        label: "TikTok officiel",
        value: "@morgan.import",
        actionUrl: "https://www.tiktok.com/@morgan.import?_r=1&_t=ZS-9B4xtosHC8S",
        colorBg: "bg-rose-500/15 hover:bg-rose-500/25",
        colorBorder: "border-rose-500/30",
      },
    ],
    dataNotice:
      "Échanges confidentiels exclusivement dédiés à vos opérations d'importation.",
  },
  footer: {
    name: "MORGAN BOCOVO",
    signature: "Sécuriser chaque approvisionnement pour transformer vos projets d'import en réussites durables.",
    copyrightOwner: "Morgan Bocovo",
  },
};
