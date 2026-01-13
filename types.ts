
export interface Category {
  id: string;
  title: string;
  image: string;
  description: string;
  icon: string;
  fullDescription?: string;
  features?: string[];
  benefits?: string[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
  gallery: string[];
  description?: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}

export interface VideoItem {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
}
