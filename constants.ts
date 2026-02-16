import { NavItem, Product, ViewType, Review } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Hjem', view: 'home' },
  { 
    label: 'Smykker', 
    view: 'jewelry', 
    hasMegaMenu: true,
    megaMenuCategories: ['Halskæde', 'Øreringe', 'Armbånd', 'Ringe'],
    ctaLabel: 'Se alle smykker'
  },
  { 
    label: 'Ure', 
    view: 'jewelry', 
    hasMegaMenu: true,
    megaMenuCategories: ['Herreure', 'Dameure', 'Børneure'],
    ctaLabel: 'Se alle ure'
  },
  { label: 'Service & Reparationer', view: 'service' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Daisy Vedhæng',
    brand: 'Georg Jensen',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=800',
    category: 'jewelry',
    subCategory: 'Halskæde',
    material: 'Sølv',
    isNew: true,
    isPopular: false,
    description: 'Klassisk Georg Jensen Daisy vedhæng i hvid emalje og sterlingsølv.'
  },
  {
    id: 2,
    name: 'Classic Petite Rose',
    brand: 'Daniel Wellington',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800',
    category: 'watch',
    subCategory: 'Dameure',
    material: 'Andet',
    isNew: false,
    isPopular: true,
    description: 'Et elegant ur med mesh-rem i rosa guld finish.'
  },
  {
    id: 3,
    name: 'Elephant Vedhæng',
    brand: 'Ole Lynggaard',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b1a308c021?auto=format&fit=crop&q=80&w=800',
    category: 'jewelry',
    subCategory: 'Halskæde',
    material: 'Guld',
    isNew: true,
    isPopular: true,
    description: 'Ikonisk elefant-vedhæng i 18kt guld med en enkelt brillant.'
  },
  {
    id: 4,
    name: 'Prospex Diver',
    brand: 'Seiko',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595dd?auto=format&fit=crop&q=80&w=800',
    category: 'watch',
    subCategory: 'Herreure',
    material: 'Andet',
    isNew: true,
    isPopular: false,
    description: 'Robust dykkerur med automatisk værk og safirglas.'
  },
  {
    id: 5,
    name: 'Fusion Ring',
    brand: 'Georg Jensen',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    category: 'jewelry',
    subCategory: 'Ringe',
    material: 'Guld',
    isNew: false,
    isPopular: true,
    description: 'Fusion ring i 18kt hvidguld og rødguld.'
  },
  {
    id: 6,
    name: 'Nature Ring',
    brand: 'Ole Lynggaard',
    price: 15400,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    category: 'jewelry',
    subCategory: 'Ringe',
    material: 'Guld',
    isNew: true,
    isPopular: false,
    description: 'Håndlavet ring med tekstureret overflade inspireret af naturen.'
  },
  {
    id: 7,
    name: 'Chronograph Black',
    brand: 'Seiko',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800',
    category: 'watch',
    subCategory: 'Herreure',
    material: 'Andet',
    isNew: false,
    isPopular: true,
    description: 'Præcisions-kronograf fra Seiko med sort urskive.'
  },
  {
    id: 8,
    name: 'Shooting Stars',
    brand: 'Ole Lynggaard',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1535633302704-b02f4f122750?auto=format&fit=crop&q=80&w=800',
    category: 'jewelry',
    subCategory: 'Øreringe',
    material: 'Guld',
    isNew: true,
    isPopular: true,
    description: 'Delikate ørestikker i guld formet som stjerneskud.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: 'Mette Hansen',
    text: 'Fantastisk service! Fik repareret mit arvestykke, og det ser ud som nyt. Meget professionel urmager.',
    date: '2 uger siden'
  },
  {
    id: 2,
    author: 'Christian Jensen',
    text: 'Stort udvalg af smykker og meget hjælpsomt personale. Købte en forlovelsesring og fik den bedste rådgivning.',
    date: '1 måned siden'
  },
  {
    id: 3,
    author: 'Sofie Nielsen',
    text: 'Hurtig levering og smukt pakket ind. Mine nye øreringe er endnu flottere i virkeligheden.',
    date: '3 dage siden'
  }
];