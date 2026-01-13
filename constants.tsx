
import React from 'react';
import { Category, Project, Client, VideoItem } from './types';
import { 
  Gamepad2, 
  Dumbbell, 
  Layers, 
  Trees, 
  GraduationCap, 
  Trophy,
  Users,
  CheckCircle,
  Map,
  Smile,
  Activity,
  Award
} from 'lucide-react';

export interface ExtendedCategory extends Category {
  color: string;
  bgColor: string;
  accent: string;
}

const generateGallery = (category: string) => {
  const images = {
    'Aire de jeux': [
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018',
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30',
      'https://images.unsplash.com/photo-1588072432836-e10032774350',
      'https://images.unsplash.com/photo-1588072432904-843af07f01ec',
      'https://images.unsplash.com/photo-1596464716151-5471d4715f33',
      'https://images.unsplash.com/photo-1603126727210-948f2197607a',
      'https://images.unsplash.com/photo-1601058268499-e52658b8bb88',
      'https://images.unsplash.com/photo-1472162072942-cd5147eb3902',
      'https://images.unsplash.com/photo-1566367576585-051277d52997'
    ],
    'Terrain de sport': [
      'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
      'https://images.unsplash.com/photo-1526676037777-05a232554f77',
      'https://images.unsplash.com/photo-1544919982-b61976f0ba43',
      'https://images.unsplash.com/photo-1504450758481-7338eba7524a',
      'https://images.unsplash.com/photo-1543351611-58f69d7c1781',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018',
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc'
    ],
    'Mobilier urbain': [
      'https://images.unsplash.com/photo-1520624844391-2cba2839d891',
      'https://images.unsplash.com/photo-1496307653780-42ee777d4833',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
      'https://images.unsplash.com/photo-1495562569060-2eec283d3391',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      'https://images.unsplash.com/photo-1444464666168-49d633b867ad',
      'https://images.unsplash.com/photo-1433086177654-c9545b41d446',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470'
    ]
  };
  return (images[category as keyof typeof images] || images['Aire de jeux']).map(url => `${url}?q=80&w=1000&auto=format&fit=crop`);
};

export const CATEGORIES: ExtendedCategory[] = [
  {
    id: 'playground',
    title: 'Aire de jeux',
    description: 'Espaces ludiques certifiés alliant sécurité, pédagogie et créativité.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop',
    icon: 'Gamepad2',
    color: 'text-ciec-green',
    bgColor: 'bg-[#E6F3EC]',
    accent: '#008D41',
    fullDescription: 'Conception d\'aires de jeux conformes aux normes EN1176. Nous créons des univers sécurisés qui favorisent l\'épanouissement physique et social des enfants.',
    features: ['Structures multi-activités', 'Parcours d\'aventure', 'Jeux inclusifs (PMR)', 'Aménagements thématiques'],
    benefits: ['Sécurité certifiée', 'Matériaux haute résistance', 'Design sur-mesure', 'Installation professionnelle']
  },
  {
    id: 'fitness',
    title: 'Équipement de sport fitness',
    description: 'Stations de fitness en plein air pour promouvoir le bien-être urbain.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop',
    icon: 'Activity',
    color: 'text-ciec-pistachio',
    bgColor: 'bg-[#F2F8E9]',
    accent: '#8CC63F',
    fullDescription: 'Solutions de fitness outdoor durables et ergonomiques. Nos équipements permettent une pratique sportive accessible à tous les niveaux de performance.',
    features: ['Stations de musculation', 'Appareils cardio extérieurs', 'Zones Street Workout', 'Circuits santé seniors'],
    benefits: ['Résistance aux intempéries', 'Ergonomie certifiée', 'Maintenance simplifiée', 'Usage intensif']
  },
  {
    id: 'flooring',
    title: 'Revêtement de sol',
    description: 'Sols amortissants techniques pour une sécurité maximale en zone de jeux.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
    icon: 'Layers',
    color: 'text-ciec-orange',
    bgColor: 'bg-[#FFF4E8]',
    accent: '#F7941E',
    fullDescription: 'Expertise en sols amortissants (EPDM, dalles, gazon synthétique). Nos revêtements garantissent une absorption des chocs conforme aux normes HIC.',
    features: ['Sol coulé EPDM', 'Dalles amortissantes', 'Gazon synthétique de sport', 'Peintures techniques'],
    benefits: ['Antidérapant', 'Drainage optimal', 'Designs personnalisables', 'Durabilité certifiée']
  },
  {
    id: 'urban',
    title: 'Mobilier urbain',
    description: 'Design et fonctionnalité pour l\'aménagement des espaces publics.',
    image: 'https://images.unsplash.com/photo-1520624844391-2cba2839d891?q=80&w=1000&auto=format&fit=crop',
    icon: 'Trees',
    color: 'text-ciec-green',
    bgColor: 'bg-[#E6F3EC]',
    accent: '#008D41',
    fullDescription: 'Sélection rigoureuse de mobilier urbain architectural. Nous transformons les espaces de passage en lieux de rencontre conviviaux et esthétiques.',
    features: ['Bancs et assises contemporaines', 'Corbeilles et tri sélectif', 'Abris bus et pergolas', 'Potelets de protection'],
    benefits: ['Esthétique premium', 'Traitement anti-corrosion', 'Confort d\'assise', 'Intégration paysagère']
  },
  {
    id: 'educational',
    title: 'Matériel éducatif',
    description: 'Supports pédagogiques pour écoles, crèches et centres d\'apprentissage.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop',
    icon: 'GraduationCap',
    color: 'text-ciec-yellow',
    bgColor: 'bg-[#FFFBE6]',
    accent: '#FFD200',
    fullDescription: 'Aménagement d\'espaces d\'apprentissage stimulants. Notre matériel favorise la créativité et la motricité fine dans un cadre sécurisé.',
    features: ['Mobilier de classe flexible', 'Jeux muraux interactifs', 'Parcours de motricité', 'Rangement pédagogique'],
    benefits: ['Ergonomie adaptée', 'Couleurs stimulantes', 'Facile à nettoyer', 'Matériaux non-toxiques']
  },
  {
    id: 'sports_court',
    title: 'Terrain de sport',
    description: 'Réalisation de city-stades et plateaux sportifs multisports.',
    image: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d?q=80&w=1000&auto=format&fit=crop',
    icon: 'Trophy',
    color: 'text-ciec-pistachio',
    bgColor: 'bg-[#F2F8E9]',
    accent: '#8CC63F',
    fullDescription: 'Conception et installation de terrains multisports clés en main. Nous optimisons l\'espace pour permettre la pratique de plusieurs disciplines.',
    features: ['Clôtures rigides renforcées', 'Gazon synthétique sport', 'Buts et paniers intégrés', 'Éclairage LED basse conso'],
    benefits: ['Polyvalence d\'usage', 'Réduction du bruit', 'Cohésion sociale', 'Installation rapide']
  }
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Parc Ghandi', location: 'Casablanca', category: 'Aire de jeux', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop', gallery: generateGallery('Aire de jeux'), description: 'Réaménagement complet d\'un espace vert iconique de Casablanca.' },
  { id: '2', title: 'Collège Mohammed VI', location: 'Rabat', category: 'Terrain de sport', image: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d?q=80&w=800&auto=format&fit=crop', gallery: generateGallery('Terrain de sport'), description: 'Plateau sportif multisports haut de gamme pour milieu scolaire.' },
  { id: '3', title: 'Corniche de Tanger', location: 'Tanger', category: 'Mobilier urbain', image: 'https://images.unsplash.com/photo-1520624844391-2cba2839d891?q=80&w=800&auto=format&fit=crop', gallery: generateGallery('Mobilier urbain'), description: 'Aménagement urbain d\'une zone littorale d\'exception.' },
  { id: '4', title: 'Résidence Anfa Sky', location: 'Casablanca', category: 'Revêtement de sol', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop', gallery: generateGallery('Aire de jeux'), description: 'Sols amortissants haute performance pour résidence privée.' },
  { id: '5', title: 'École Les Orangers', location: 'Agadir', category: 'Matériel éducatif', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop', gallery: generateGallery('Aire de jeux'), description: 'Espaces d\'apprentissage interactifs et ludiques.' },
  { id: '6', title: 'Parc de la Ligue Arabe', location: 'Casablanca', category: 'Fitness', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop', gallery: generateGallery('Terrain de sport'), description: 'Zone de fitness urbaine accessible à tous.' },
  { id: '7', title: 'Marina de Rabat', location: 'Rabat', category: 'Mobilier urbain', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop', gallery: generateGallery('Mobilier urbain'), description: 'Mobilier architectural pour zones portuaires de prestige.' },
  { id: '8', title: 'Lycée Lyautey', location: 'Casablanca', category: 'Terrain de sport', image: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d?q=80&w=800&auto=format&fit=crop', gallery: generateGallery('Terrain de sport'), description: 'Rénovation d\'infrastructures sportives académiques.' },
  { id: '9', title: 'Parc Ibn Sina', location: 'Rabat', category: 'Aire de jeux', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop', gallery: generateGallery('Aire de jeux'), description: 'Aire de jeux thématique centrale au coeur de Rabat.' },
  { id: '10', title: 'Corniche d\'Agadir', location: 'Agadir', category: 'Mobilier urbain', image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=800&auto=format&fit=crop', gallery: generateGallery('Mobilier urbain'), description: 'Équipements de confort pour promenade côtière touristique.' },
];

export const CLIENTS: Client[] = [
  { id: '1', name: 'Ville de Casablanca', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Logo_of_Casablanca.svg/2560px-Logo_of_Casablanca.svg.png' },
  { id: '2', name: 'Ministère de l\'Éducation', logo: 'https://upload.wikimedia.org/wikipedia/fr/4/4c/Logotype_du_minist%C3%A8re_de_l%27%C3%A9ducation_nationale.png' },
  { id: '3', name: 'Emaar Morocco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Emaar_Properties_Logo.svg/2560px-Emaar_Properties_Logo.svg.png' },
  { id: '4', name: 'OCP Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/OCP_Group_logo.svg/1200px-OCP_Group_logo.svg.png' },
];

export const VIDEOS: VideoItem[] = [
  { 
    id: '1', 
    title: 'Installation d\'aire de jeux premium', 
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-kids-playing-in-a-colorful-outdoor-playground-32598-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: '2', 
    title: 'Présentation Mobilier Urbain Durable', 
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-bench-in-a-green-park-44648-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1520624844391-2cba2839d891?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: '3', 
    title: 'Tests de résistance Fitness Plein Air', 
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-exercising-in-outdoor-gym-equipment-23429-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: '4', 
    title: 'Réalisation d\'un City Stade', 
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-teens-playing-basketball-on-an-outdoor-court-34281-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: '5', 
    title: 'Expertise Technique Revêtements Sols', 
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-feet-running-on-a-track-22874-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: '6', 
    title: 'Innovation Matériel Éducatif', 
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-little-girl-playing-with-wooden-toys-at-home-34538-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop'
  }
];

export const STATISTICS = [
  { label: 'Projets Réalisés', value: '1,500+', icon: CheckCircle, color: 'text-ciec-green' },
  { label: 'Clients Corporate', value: '450+', icon: Users, color: 'text-ciec-orange' },
  { label: 'Expertise Métier', value: '15 Ans', icon: Award, color: 'text-ciec-pistachio' },
  { label: 'Surface Aménagée', value: '300k m²', icon: Map, color: 'text-ciec-yellow' },
];
