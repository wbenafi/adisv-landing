import { Timestamp } from 'firebase/firestore';

export interface SiteConfig {
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl: string;
  aboutMission: string;
  aboutVision: string;
  aboutHistory: string;
  contactAddress: string;
  contactPhone: string;
  contactEmail: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  year: number;
  imageUrl: string;
  status: 'completed' | 'in_progress' | 'planned';
  createdAt: Timestamp;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  photoUrl: string;
  order: number;
  bio?: string;
}

export interface GalleryImage {
  id: string;
  imageUrl: string;
  caption: string;
  year: number;
  createdAt: Timestamp;
}

// Mock data for development
export const mockSiteConfig: SiteConfig = {
  heroTitle: 'Asociación de Desarrollo Integral de San Vicente',
  heroSubtitle: 'Trabajando juntos por el desarrollo sostenible de nuestra comunidad desde 1985',
  heroImageUrl: '/images/hero-bg.jpg',
  aboutMission: 'Promover el desarrollo integral y sostenible de la comunidad de San Vicente, mejorando la calidad de vida de sus habitantes a través de proyectos participativos que fortalezcan el tejido social, económico y ambiental.',
  aboutVision: 'Ser una organización líder en desarrollo comunitario, reconocida por su transparencia, compromiso y capacidad de gestión, donde cada habitante de San Vicente tenga acceso a oportunidades de crecimiento y bienestar.',
  aboutHistory: 'Fundada en 1985, la Asociación de Desarrollo Integral de San Vicente nació del esfuerzo conjunto de vecinos comprometidos con el progreso de nuestra comunidad. A lo largo de casi cuatro décadas, hemos ejecutado más de 50 proyectos que han transformado positivamente la vida de miles de familias.',
  contactAddress: 'Calle Principal, San Vicente, Costa Rica',
  contactPhone: '+506 2222-3333',
  contactEmail: 'info@adisvcostarica.org',
  facebookUrl: 'https://facebook.com/adisvcostarica',
  instagramUrl: 'https://instagram.com/adisvcostarica',
};

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Parque Comunitario Central',
    description: 'Construcción de un parque recreativo con áreas verdes, juegos infantiles y espacios para actividades comunitarias. Este proyecto beneficia a más de 500 familias del sector.',
    year: 2024,
    imageUrl: '/images/projects/parque.jpg',
    status: 'completed',
    createdAt: { seconds: 1704067200, nanoseconds: 0 } as Timestamp,
  },
  {
    id: '2',
    title: 'Sistema de Agua Potable',
    description: 'Mejoramiento del sistema de distribución de agua potable para garantizar el acceso continuo y de calidad a todas las familias de la comunidad.',
    year: 2024,
    imageUrl: '/images/projects/agua.jpg',
    status: 'in_progress',
    createdAt: { seconds: 1706745600, nanoseconds: 0 } as Timestamp,
  },
  {
    id: '3',
    title: 'Centro de Capacitación',
    description: 'Construcción de un centro de capacitación técnica para jóvenes y adultos, ofreciendo cursos de informática, idiomas y habilidades vocacionales.',
    year: 2023,
    imageUrl: '/images/projects/capacitacion.jpg',
    status: 'completed',
    createdAt: { seconds: 1672531200, nanoseconds: 0 } as Timestamp,
  },
  {
    id: '4',
    title: 'Iluminación LED',
    description: 'Instalación de alumbrado público LED en las principales calles y espacios públicos, mejorando la seguridad y reduciendo el consumo energético.',
    year: 2023,
    imageUrl: '/images/projects/iluminacion.jpg',
    status: 'completed',
    createdAt: { seconds: 1675209600, nanoseconds: 0 } as Timestamp,
  },
  {
    id: '5',
    title: 'Programa de Reciclaje',
    description: 'Implementación de un programa integral de reciclaje comunitario con puntos de recolección estratégicos y educación ambiental.',
    year: 2022,
    imageUrl: '/images/projects/reciclaje.jpg',
    status: 'completed',
    createdAt: { seconds: 1640995200, nanoseconds: 0 } as Timestamp,
  },
  {
    id: '6',
    title: 'Ampliación del Salón Comunal',
    description: 'Proyecto de ampliación y modernización del salón comunal para eventos culturales, reuniones y actividades de la comunidad.',
    year: 2025,
    imageUrl: '/images/projects/salon.jpg',
    status: 'planned',
    createdAt: { seconds: 1735689600, nanoseconds: 0 } as Timestamp,
  },
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'María Elena Rodríguez',
    position: 'Presidenta',
    photoUrl: '/images/team/presidente.jpg',
    order: 1,
    bio: 'Líder comunitaria con más de 15 años de experiencia en gestión de proyectos sociales.',
  },
  {
    id: '2',
    name: 'Carlos Jiménez Mora',
    position: 'Vicepresidente',
    photoUrl: '/images/team/vicepresidente.jpg',
    order: 2,
    bio: 'Ingeniero civil comprometido con el desarrollo de infraestructura comunitaria.',
  },
  {
    id: '3',
    name: 'Ana Lucía Vargas',
    position: 'Secretaria',
    photoUrl: '/images/team/secretaria.jpg',
    order: 3,
    bio: 'Administradora de empresas especializada en organizaciones sin fines de lucro.',
  },
  {
    id: '4',
    name: 'Roberto Hernández',
    position: 'Tesorero',
    photoUrl: '/images/team/tesorero.jpg',
    order: 4,
    bio: 'Contador público con amplia experiencia en gestión financiera transparente.',
  },
  {
    id: '5',
    name: 'Sofía Ramírez',
    position: 'Vocal I',
    photoUrl: '/images/team/vocal1.jpg',
    order: 5,
    bio: 'Educadora comprometida con el desarrollo educativo de la comunidad.',
  },
  {
    id: '6',
    name: 'José Manuel Campos',
    position: 'Vocal II',
    photoUrl: '/images/team/vocal2.jpg',
    order: 6,
    bio: 'Empresario local activo en iniciativas de desarrollo económico.',
  },
];

export const mockGalleryImages: GalleryImage[] = [
  {
    id: '1',
    imageUrl: '/images/gallery/evento1.jpg',
    caption: 'Inauguración del Parque Comunitario',
    year: 2024,
    createdAt: { seconds: 1704067200, nanoseconds: 0 } as Timestamp,
  },
  {
    id: '2',
    imageUrl: '/images/gallery/evento2.jpg',
    caption: 'Jornada de reforestación comunitaria',
    year: 2024,
    createdAt: { seconds: 1706745600, nanoseconds: 0 } as Timestamp,
  },
  {
    id: '3',
    imageUrl: '/images/gallery/evento3.jpg',
    caption: 'Festival Cultural de San Vicente',
    year: 2023,
    createdAt: { seconds: 1696118400, nanoseconds: 0 } as Timestamp,
  },
  {
    id: '4',
    imageUrl: '/images/gallery/evento4.jpg',
    caption: 'Capacitación en habilidades digitales',
    year: 2023,
    createdAt: { seconds: 1688169600, nanoseconds: 0 } as Timestamp,
  },
  {
    id: '5',
    imageUrl: '/images/gallery/evento5.jpg',
    caption: 'Entrega de becas estudiantiles',
    year: 2023,
    createdAt: { seconds: 1680307200, nanoseconds: 0 } as Timestamp,
  },
  {
    id: '6',
    imageUrl: '/images/gallery/evento6.jpg',
    caption: 'Celebración del Día de la Madre',
    year: 2022,
    createdAt: { seconds: 1652313600, nanoseconds: 0 } as Timestamp,
  },
];

