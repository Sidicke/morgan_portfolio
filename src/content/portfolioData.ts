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

export interface TimelineFieldGridImage {
  src: string;
  alt: string;
  caption: string;
  type?: "image" | "video";
}

export interface TimelineFieldGrid {
  id: string;
  number: string;
  title: string;
  badge: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  accentColor: string;
  previewImage: string;
  images: TimelineFieldGridImage[];
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
    fieldGridsHeading: string;
    fieldGridsSubtitle: string;
    fieldGrids: TimelineFieldGrid[];
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
    fieldGridsHeading: "Immersion & Opérations sur le Terrain",
    fieldGridsSubtitle:
      "Cliquez sur chaque grille pour découvrir les preuves visuelles et les descriptions détaillées de nos opérations.",
    fieldGrids: [
      {
        id: "prospection-terrain",
        number: "01",
        title: "Prospection Terrain",
        badge: "Déploiement & Écoute",
        subtitle: "Immersion directe auprès des commerçants et entrepreneurs locaux",
        shortDescription:
          "Déploiement de l'équipe Baron Meridian sur le terrain pour aller à la rencontre des commerçants, comprendre leurs besoins d'approvisionnement et présenter nos solutions d'import-export.",
        fullDescription:
          "À travers les déploiements terrain de BARON MERIDIAN, notre équipe va directement à la rencontre des commerçants, grossistes et porteurs de projets au Bénin. Cette présence active sur le terrain permet de recueillir leurs besoins réels, d'expliquer en face-à-face le fonctionnement sécurisé du sourcing international (Chine & France) et d'établir un diagnostic précis avant toute opération d'importation.",
        highlights: [
          "Déploiement mobile de l'équipe Baron Meridian dans les zones commerciales",
          "Entretiens directs avec les commerçants et présentation des garanties d'importation",
          "Sensibilisation sur la sécurisation des achats et diagnostic personnalisé sur place",
        ],
        accentColor: "bg-amber-50 text-amber-900 border-amber-300",
        previewImage: "/images/parcours/prospection-1.jpeg",
        images: [
          {
            src: "/images/parcours/prospection-1.jpeg",
            alt: "Équipe Baron Meridian déployée en prospection sur le terrain",
            caption:
              "Déploiement de l'équipe Baron Meridian sur le terrain au contact direct des entrepreneurs et commerçants.",
          },
          {
            src: "/images/parcours/prospection-2.jpeg",
            alt: "Engagement et dynamisme de l'équipe Baron Meridian en mission terrain",
            caption:
              "Mobilisation et cohésion de l'équipe Baron Meridian lors d'une campagne de prospection locale.",
          },
          {
            src: "/images/parcours/prospection-3.jpeg",
            alt: "Analyse mobile et coordination sur le terrain",
            caption:
              "Vérification en temps réel des catalogues fournisseurs et démonstration mobile sur le terrain.",
          },
          {
            src: "/images/parcours/prospection-4.jpeg",
            alt: "Entretien de proximité Baron Meridian Import-Export avec une commerçante",
            caption:
              "Séance d'écoute et de conseil en face-à-face pour analyser les besoins d'approvisionnement d'une cliente.",
          },
          {
            src: "/images/parcours/prospection-5.jpeg",
            alt: "Remise de supports et présentation Baron Meridian à une cliente",
            caption:
              "Présentation détaillée de nos procédures d'importation et remise de nos coordonnées professionnelles.",
          },
          {
            src: "/images/parcours/prospection-6.jpeg",
            alt: "Cellule de suivi et débriefing de prospection Baron Meridian",
            caption:
              "Point d'équipe en fin de journée : traitement des demandes recueillies et relance téléphonique des prospects.",
          },
        ],
      },
      {
        id: "consulting-logistique",
        number: "02",
        title: "Consulting & Logistique",
        badge: "Stratégie & Coordination",
        subtitle: "Devis détaillés, négociation usine en Chine, contrats et suivi cargo",
        shortDescription:
          "Cadrage contractuel, cotations transparentes, négociation directe avec les usines chinoises, contrôle qualité avant expédition et facturation officielle Baron Meridian.",
        fullDescription:
          "Le pôle Consulting & Logistique de BARON MERIDIAN assure une traçabilité documentaire et opérationnelle intégrale : établissement des devis détaillés en FCFA, contractualisation sécurisée avec cachet officiel, échange direct avec les usines en Chine pour l'inspection visuelle des produits, marquage cargo personnalisé (BENIN CARGO 3011 / BOCOVO) et suivi des bordereaux de transport aérien et maritime.",
        highlights: [
          "Factures de commande officielles Baron Meridian et contrats d'engagement cachetés",
          "Négociation directe avec les fabricants chinois et inspection photo avant emballage",
          "Étiquetage cargo rigoureux (Benin Cargo 3011) et suivi des bordereaux jusqu'au bon de livraison",
        ],
        accentColor: "bg-emerald-50 text-emerald-900 border-emerald-300",
        previewImage: "/images/parcours/prospection-4.jpeg",
        images: [
          {
            src: "/images/parcours/consulting-1.jpeg",
            alt: "Facture de commande officielle Baron Meridian cachetée et payée",
            caption:
              "Facture de commande officielle BARON MERIDIAN avec détail des coûts HT, taxes douanières et cachet PAYÉ.",
          },
          {
            src: "/images/parcours/consulting-2.jpeg",
            alt: "Négociation directe avec l'usine en Chine et instructions cargo",
            caption:
              "Échange direct avec le fabricant en Chine et transmission des instructions d'étiquetage (BENIN CARGO 3011 / BOCOVO).",
          },
          {
            src: "/images/parcours/consulting-3.jpeg",
            alt: "Inspection qualité et vérification du colis en usine chinoise",
            caption:
              "Contrôle qualité visuel : vérification du produit, des accessoires et du colisage protecteur avant expédition.",
          },
          {
            src: "/images/parcours/consulting-4.jpeg",
            alt: "Bordereau d'expédition logistique Yunda Express vers l'entrepôt maritime",
            caption:
              "Bordereau logistique interne en Chine acheminant la marchandise vers le hub d'expédition internationale (BENIN-SEA).",
          },
          {
            src: "/images/parcours/consulting-5.jpeg",
            alt: "Bon de livraison Benin Cargo tamponné LIVRÉ à Cotonou",
            caption:
              "Bon de livraison officiel Benin Cargo (Transport aérien CN -> BJ) tamponné et signé à la réception à Cotonou.",
          },
          {
            src: "/images/parcours/consulting-6.jpeg",
            alt: "Contrat d'engagement et clauses de garantie Baron Meridian",
            caption:
              "Cadre contractuel clair définissant les engagements de livraison, de confidentialité et de garantie signés par le DG Morgan Bocovo.",
          },
          {
            src: "/images/parcours/consulting-7.jpeg",
            alt: "Facture de commande Baron Meridian pour expédition aérienne",
            caption:
              "Facture de commande structurée précisant la référence dossier, le mode d'expédition (Avion) et les frais de service.",
          },
          {
            src: "/images/parcours/consulting-8.jpeg",
            alt: "Devis détaillé et cotation multi-articles pour un client",
            caption:
              "Chiffrage transparent d'un panier d'approvisionnement varié (vêtements, maroquinerie, accessoires) validé en FCFA.",
          },
          {
            src: "/images/parcours/consulting-9.jpeg",
            alt: "Cotation détaillée hors-taxes et calcul des frais de retrait",
            caption:
              "Préparation minutieuse de la liste de commande avec tarification unitaire HT pour validation budgétaire client.",
          },
          {
            src: "/images/parcours/consulting-10.jpeg",
            alt: "Rédaction et vérification manuelle d'une facture de commande client",
            caption:
              "Établissement sur-mesure du dossier de commande client lors d'une séance de consulting.",
          },
          {
            src: "/images/parcours/consulting-11.jpeg",
            alt: "Validation comptable d'un dossier d'importation Baron Meridian",
            caption:
              "Dossier de commande complet validé avec quittance de règlement Mobile Money et cachet de la direction générale.",
          },
          {
            src: "/images/parcours/consulting-12.jpeg",
            alt: "Exemplaire d'archive de facture de commande Baron Meridian",
            caption:
              "Traçabilité documentaire systématique pour chaque opération d'achat et de transit international.",
          },
        ],
      },
      {
        id: "acheminement-reussi",
        number: "03",
        title: "Acheminement Réussi",
        badge: "Engagement & Résultat",
        subtitle: "Réception physique des colis et cartons sécurisés à Cotonou",
        shortDescription:
          "Preuves concrètes de nos arrivages : colis scellés au nom de Baron Meridian, cartons groupés réceptionnés intacts à Cotonou et remise finale aux clients.",
        fullDescription:
          "Chaque opération pilotée par BARON MERIDIAN aboutit à un acheminement physique vérifiable. Du départ des entrepôts de Guangzhou et Yiwu jusqu'à l'arrivée effective à Cotonou, tous nos colis portent un marquage d'identification strict (BARON MERIDIAN / BOCOVO Morgan) garantissant zéro perte et une remise conforme aux clients.",
        highlights: [
          "Colis scellés et identifiés BARON MERIDIAN / BOCOVO Morgan jusqu'à Cotonou",
          "Traçabilité complète par code-barres (STO / ZTO Express & Benin Cargo 3011)",
          "Réception physique intacte des cartons de groupage et livraison finale aux clients",
        ],
        accentColor: "bg-cyan-50 text-cyan-900 border-cyan-300",
        previewImage: "/images/parcours/acheminement-2.jpeg",
        images: [
          {
            src: "/images/parcours/acheminement-1.jpeg",
            alt: "Colis scellé et badgé Baron Meridian arrivé à Cotonou",
            caption:
              "Colis officiel badgé BARON MERIDIAN adressé à BOCOVO Morgan (+229 67 17 43 69 — Bénin, Cotonou).",
          },
          {
            src: "/images/parcours/acheminement-2.jpeg",
            alt: "Carton de groupage 3011-Benin Cargo + BARON MERIDIAN",
            caption:
              "Carton de marchandise (5,25 kg) clairement identifié BARON MERIDIAN pour un transit sécurisé sans perte.",
          },
          {
            src: "/images/parcours/acheminement-3.jpeg",
            alt: "Colis STO Express avec étiquette BENIN CARGO 3011 / BOCOVO FRANCK",
            caption:
              "Double étiquetage de sécurité (code-barres usine + fiche d'acheminement Benin Cargo 3011).",
          },
          {
            src: "/images/parcours/acheminement-4.jpeg",
            alt: "Lot de cartons et colis réceptionnés à destination",
            caption:
              "Arrivage réussi : ensemble de cartons et colis clients réceptionnés intacts et prêts pour la remise finale.",
          },
          {
            src: "/images/parcours/acheminement-5.jpeg",
            alt: "Emballage protégé à bulles avec mention 3011-Benin Cargo + BARON MERIDIAN",
            caption:
              "Protection renforcée des marchandises fragiles avec mention d'inspection photo obligatoire en entrepôt.",
          },
          {
            src: "/images/parcours/acheminement-6.jpeg",
            alt: "Plusieurs colis clients triés après dégroupage",
            caption:
              "Tri et vérification des différents lots clients à l'ouverture des balles de groupage.",
          },
          {
            src: "/images/parcours/acheminement-7.jpeg",
            alt: "Colis express ZTO acheminé depuis Guangzhou vers le Bénin",
            caption:
              "Suivi de bout en bout d'un pli de marchandise express depuis la province du Guangdong jusqu'à Cotonou.",
          },
          {
            src: "/images/parcours/acheminement-8.jpeg",
            alt: "Préparation et marquage manuel de colis en entrepôt",
            caption:
              "Identification manuelle doublée sur chaque sachet logistique avant départ cargo.",
          },
          {
            src: "/images/parcours/acheminement-9.jpeg",
            alt: "Étiquette de suivi ZTO Express vers le hub Benin Cargo",
            caption:
              "Étiquette de traçabilité ZTO Express confirmant l'enregistrement du colis en centre de tri.",
          },
          {
            src: "/images/parcours/acheminement-video.mp4",
            alt: "Vidéo de contrôle et réception des colis acheminés",
            caption:
              "Vidéo opérationnelle montrant la vérification physique des colis acheminés avec succès.",
            type: "video",
          },
        ],
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
