
import React from 'react';
import { Category, Project, Client, VideoItem } from './types';
import { 
  Dribbble, 
  Gamepad2, 
  Dumbbell, 
  Layers, 
  Trees, 
  GraduationCap, 
  Trophy,
  Users,
  CheckCircle,
  Map,
  Smile
} from 'lucide-react';

export const CATEGORIES: Category[] = [
  {
    id: 'playground',
    title: 'Aire de jeux',
    description: 'Des espaces ludiques sécurisés pour l\'épanouissement des enfants.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop',
    icon: 'Gamepad2',
    fullDescription: 'Nous concevons des aires de jeux qui stimulent l\'imagination et favorisent le développement physique et social des enfants de tous âges. Nos structures sont fabriquées avec des matériaux de haute qualité, résistants aux intempéries et conformes aux normes de sécurité les plus strictes.',
    features: ['Structures multi-activités', 'Toboggans et balançoires', 'Jeux à ressort', 'Parcours d\'équilibre'],
    benefits: ['Sécurité maximale (norme EN1176)', 'Design ergonomique et coloré', 'Haute résistance aux UV', 'Maintenance simplifiée']
  },
  {
    id: 'fitness',
    title: 'Sport & Fitness Plein Air',
    description: 'Équipements de fitness extérieurs robustes pour tous les âges.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop',
    icon: 'Dumbbell',
    fullDescription: 'Le fitness en plein air est une solution idéale pour encourager une vie saine dans les espaces publics. Nos équipements sont conçus pour offrir une expérience d\'entraînement complète, sollicitant tous les groupes musculaires tout en étant accessibles à tous.',
    features: ['Stations de musculation guidée', 'Appareils cardio (vélos, elliptiques)', 'Zones de Street Workout', 'Équipements seniors'],
    benefits: ['Accès libre au sport', 'Résistance au vandalisme', 'Adapté à tous les niveaux', 'Installation sur tous types de sols']
  },
  {
    id: 'flooring',
    title: 'Revêtement de sol',
    description: 'Sols amortissants et techniques pour sécurité et performance.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
    icon: 'Layers',
    fullDescription: 'La sécurité d\'une aire de jeux commence par le sol. Nous proposons une large gamme de revêtements amortissants (EPDM, gazon synthétique, dalles) qui protègent les enfants en cas de chute et apportent une touche esthétique unique à vos projets.',
    features: ['Sol coulé en EPDM', 'Dalles amortissantes', 'Gazon synthétique de sport', 'Peintures techniques'],
    benefits: ['Absorption des chocs certifiée', 'Drainage optimal des eaux', 'Personnalisation infinie (couleurs/motifs)', 'Durabilité exceptionnelle']
  },
  {
    id: 'urban',
    title: 'Mobilier urbain',
    description: 'Bancs, corbeilles et abris pour embellir vos espaces publics.',
    image: 'https://images.unsplash.com/photo-1520624844391-2cba2839d891?q=80&w=1000&auto=format&fit=crop',
    icon: 'Trees',
    fullDescription: 'Notre mobilier urbain allie esthétique moderne et fonctionnalité. Nous transformons les espaces publics en lieux de rencontre conviviaux grâce à des produits durables qui s\'intègrent harmonieusement dans l\'architecture urbaine marocaine.',
    features: ['Bancs et banquettes ergonomiques', 'Corbeilles et tri sélectif', 'Abris bus et pergolas', 'Potelets et barrières'],
    benefits: ['Traitement anti-corrosion', 'Design contemporain', 'Confort d\'utilisation', 'Respect de l\'environnement']
  },
  {
    id: 'educational',
    title: 'Matériel éducatif',
    description: 'Outils pédagogiques innovants pour écoles et crèches.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop',
    icon: 'GraduationCap',
    fullDescription: 'EDUPLAY accompagne le monde de l\'éducation avec des solutions d\'aménagement qui favorisent l\'apprentissage par le jeu. Notre matériel éducatif est conçu pour stimuler la créativité, la motricité fine et la collaboration entre élèves.',
    features: ['Mobilier de classe flexible', 'Jeux muraux interactifs', 'Équipements psychomoteurs', 'Coins lecture et repos'],
    benefits: ['Qualité pédagogique', 'Ergonomie adaptée à l\'âge', 'Matériaux non-toxiques', 'Facilité de rangement']
  },
  {
    id: 'sports_court',
    title: 'Terrain de sport',
    description: 'Conception et réalisation de terrains multisports (City Stades).',
    image: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d?q=80&w=1000&auto=format&fit=crop',
    icon: 'Trophy',
    fullDescription: 'Nous réalisons des terrains multisports (City Stades) clés en main, permettant la pratique du football, basketball, handball et volleyball sur un même espace. Nos terrains sont conçus pour résister à une utilisation intensive.',
    features: ['Clôtures rigides et pare-ballons', 'Buts multisports intégrés', 'Gazon synthétique ou sol résine', 'Éclairage LED basse consommation'],
    benefits: ['Optimisation de l\'espace', 'Polyvalence des activités', 'Réduction des nuisances sonores', 'Homologation fédérale possible']
  }
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Parc Central Kids', location: 'Casablanca', category: 'Aire de jeux', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: 'Collège Mohammed VI', location: 'Rabat', category: 'Terrain de sport', image: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d?q=80&w=800&auto=format&fit=crop' },
  { id: '3', title: 'Corniche Marina', location: 'Tanger', category: 'Mobilier urbain', image: 'https://images.unsplash.com/photo-1520624844391-2cba2839d891?q=80&w=800&auto=format&fit=crop' },
  { id: '4', title: 'Espace Fitness Jarda', location: 'Marrakech', category: 'Fitness', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop' },
  { id: '5', title: 'Crèche Les P\'tits Loups', location: 'Agadir', category: 'Matériel éducatif', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop' },
  { id: '6', title: 'Gymnase Omnisports', location: 'Fès', category: 'Revêtement de sol', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop' },
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
  }
];

export const STATISTICS = [
  { label: 'Projets Réalisés', value: '500+', icon: CheckCircle, color: 'text-orange-600' },
  { label: 'Clients Satisfaits', value: '250+', icon: Users, color: 'text-blue-600' },
  { label: 'Années d\'Expérience', value: '12+', icon: Map, color: 'text-green-600' },
  { label: 'Sourires d\'Enfants', value: '1M+', icon: Smile, color: 'text-pink-600' },
];
