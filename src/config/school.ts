// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /** Nom du cycle. Doit correspondre aux cycles acceptés par le backend (utils/schemas.js). */
  name: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

export const school: SchoolProfile = {
  id: 'cpl-yanfouom-dapaong',
  logo: '/logo-cpl-yanfouom.png',
  settings: {
    name: 'CPL YANFOUOM',
    shortName: 'CPL YANFOUOM',
    slogan: 'ÉDUQUER POUR TRANSFORMER',
    address: 'Quartier Nanolgue — Dapaong, Togo',
    email: 'contact@cpl-yanfouom.tg',
    phone: '+228 92 34 39 31',
    phone2: '+228 98 94 80 73',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 75000,
    canteenFee: 400,
    badgeFee: 1000,
    uniformFee: 3500,
    apeFee: 2000,
  },
  footerText:
    'Un complexe scolaire privé laïc à Dapaong, du collège au lycée, engagé depuis 2000 pour la réussite de tous les jeunes, filles comme garçons.',
  hero: {
    eyebrow: 'TRAVAIL - ÉGALITÉ - RÉUSSITE',
    titleLines: ['Complexe Privé', 'Laïc'],
    highlight: 'YANFOUOM',
    intro:
      'Bienvenue sur le site officiel du CPL YANFOUOM, au quartier Nanolgue à Dapaong : un établissement privé laïc d’enseignement secondaire, du collège au lycée, engagé pour la scolarisation et la réussite des jeunes filles comme des garçons.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'La direction du CPL YANFOUOM',
    eyebrow: 'UN MOT DE LA DIRECTION',
    titleLines: ['Éduquer chaque jeune,', 'filles comme garçons.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'Au CPL YANFOUOM, nous croyons que l’éducation est la clé de l’avenir de chaque jeune et de toute la région. Notre ambition est d’offrir à tous, et en particulier aux jeunes filles, un cadre d’apprentissage exigeant, sûr et bienveillant.',
      'Notre équipe éducative accompagne les élèves avec exigence et attention, de la 6e jusqu’à la Terminale, en lien étroit avec les familles de Nanolgue et de toute la ville de Dapaong, pour qu’ils réussissent le BEPC, le baccalauréat et la suite de leurs études.',
    ],
    signature: 'GOGUE Yendoutin — Adjoint',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le CPL YANFOUOM (Complexe Scolaire Privé Laïc Yanfouom) est implanté dans le quartier Nanolgue, à Dapaong, au nord du Togo, dans la région des Savanes. C’est un établissement privé et laïc d’enseignement secondaire.',
      'Créé en octobre 2000, d’abord comme un collège, l’établissement s’est agrandi avec l’ouverture du lycée en 2010, pour devenir un complexe scolaire complet couvrant tout le cycle secondaire : le collège, de la 6e à la 3e, et le lycée, de la Seconde à la Terminale.',
      'Le CPL YANFOUOM est reconnu pour sa politique d’encouragement de la scolarisation des jeunes filles. Il suit les programmes officiels togolais et prépare ses élèves au BEPC et au baccalauréat.',
    ],
    stats: [
      { value: 'Un suivi attentif', label: 'Chaque élève est suivi avec attention.' },
      { value: 'Un cadre sûr', label: 'Pour apprendre dans de bonnes conditions.' },
      { value: 'Pour bien réussir', label: 'Notre engagement pour chaque enfant.' },
    ],
  },
  values: [
    { icon: 'graduation', title: 'Excellence académique', text: 'Une préparation sérieuse au BEPC et au baccalauréat.' },
    { icon: 'heart', title: 'Scolarisation des filles', text: 'Encourager et accompagner chaque jeune fille vers la réussite.' },
    { icon: 'idea', title: 'Discipline et travail', text: 'Le goût de l’effort et la rigueur au quotidien.' },
    { icon: 'users', title: 'Communauté', text: 'Une communauté éducative unie avec les familles de Dapaong.' },
  ],
  faq: [
    {
      q: 'Quels niveaux propose le CPL YANFOUOM ?',
      a: 'Le CPL YANFOUOM couvre tout le cycle secondaire : le collège (de la 6e à la 3e) et le lycée (de la Seconde à la Terminale), avec la préparation au BEPC et au baccalauréat.',
    },
    {
      q: 'Avez-vous un bus scolaire ?',
      a: 'Contactez le secrétariat pour connaître les possibilités de transport et les quartiers de Dapaong desservis.',
    },
    {
      q: 'Les frais de scolarité au CPL YANFOUOM s’élèvent à combien ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
    {
      q: 'Quelles sont les échéances de paiement ?',
      a: 'Le paiement de la scolarité peut être effectué en trois tranches. Le calendrier est communiqué lors de l’inscription.',
    },
    {
      q: 'Vous semblez avoir un programme bien défini que vous leur léguez ?',
      a: 'Nos programmes conjuguent apprentissages fondamentaux, développement personnel et ouverture sur le monde. Découvrez le détail dans la rubrique Nos cycles.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
  ],
  cycles: [
    {
      name: 'Collège',
      slug: 'college',
      age: '12 à 16 ans',
      text: 'Le collège prépare les élèves à poursuivre leurs études avec confiance. Les enseignements approfondissent les connaissances, les méthodes de travail et l’esprit critique.',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Accompagnement et suivi des progrès',
        'Préparation aux examens et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Excellence académique',
          text: 'Des enseignements exigeants et un suivi régulier.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'S’exprimer et s’ouvrir à de nouveaux horizons.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et développer ses compétences.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Une (1) copie légalisée de l’acte de naissance ou un jugement supplétif légalisé (dossier scolaire pour tout le cycle)',
      'Un (1) certificat de scolarité',
      'Les bulletins de notes de l’année écoulée (et le CEPD pour l’entrée en 6e)',
      'Un carnet de correspondance (pour la réinscription)',
      'Une (1) chemise dossier à rabat',
      'Un (1) carnet de santé',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)
