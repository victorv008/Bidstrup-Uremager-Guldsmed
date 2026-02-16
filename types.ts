export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  subCategory: string;
  material: 'Guld' | 'Sølv' | 'Andet';
  isNew?: boolean;
  isPopular?: boolean;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type ViewType = 'home' | 'jewelry' | 'service' | 'detail';

export interface NavItem {
  label: string;
  view: ViewType;
  hasMegaMenu?: boolean;
  megaMenuCategories?: string[];
  ctaLabel?: string;
}

export interface Review {
  id: number;
  author: string;
  text: string;
  date: string;
}