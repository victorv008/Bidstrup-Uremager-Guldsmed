import React, { useState, useMemo, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface JewelryViewProps {
  title?: string;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

interface FilterState {
  categories: string[];
  materials: string[];
}

const JewelryView: React.FC<JewelryViewProps> = ({ title = "Vores Udvalg", onSelectProduct, onAddToCart }) => {
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    categories: [],
    materials: [],
  });
  
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    kategori: true,
    materiale: true,
  });

  // Effect to handle navigation to a specific subcategory
  useEffect(() => {
    if (title !== "Vores Udvalg" && title !== "Smykker" && title !== "Ure") {
      setActiveFilters(prev => ({
        ...prev,
        categories: [title]
      }));
    } else {
      setActiveFilters({ categories: [], materials: [] });
    }
  }, [title]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleFilterChange = (type: 'categories' | 'materials', value: string) => {
    setActiveFilters(prev => {
      const current = prev[type];
      const next = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      
      const newState = { ...prev, [type]: next };
      return newState;
    });
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const categoryMatch = activeFilters.categories.length === 0 || activeFilters.categories.includes(p.subCategory);
      const materialMatch = activeFilters.materials.length === 0 || activeFilters.materials.includes(p.material);
      return categoryMatch && materialMatch;
    });
  }, [activeFilters]);

  // Entrance animation logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      let delay = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('visible');
          delay += 80;
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    const items = document.querySelectorAll('.reveal-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredProducts]); // Re-run when products change (filtering)

  const categoryOptions = ['Halskæde', 'Øreringe', 'Armbånd', 'Ringe', 'Herreure', 'Dameure', 'Børneure'];
  const materialOptions = ['Guld', 'Sølv'];

  const FilterSection = ({ title, id, options, type }: { title: string, id: string, options: string[], type: 'categories' | 'materials' }) => (
    <div className="border-b border-gray-100 pb-6 mb-6">
      <button 
        onClick={() => toggleSection(id)}
        className="w-full flex justify-between items-center group mb-4"
      >
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] group-hover:text-luxury-accent transition-colors">
          {title}
        </h3>
        {expandedSections[id] ? <ChevronUp size={14} className="text-gray-400" /> : <ChevronDown size={14} className="text-gray-400" />}
      </button>
      
      {expandedSections[id] && (
        <ul className="space-y-3 animate-in fade-in slide-in-from-top-1 duration-300">
          {options.map(opt => (
            <li key={opt} className="flex items-center gap-3">
              <label className="flex items-center gap-3 cursor-pointer group w-full">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    className="peer appearance-none w-4 h-4 border border-gray-300 rounded-sm checked:bg-luxury-accent checked:border-luxury-accent transition-all cursor-pointer"
                    checked={activeFilters[type].includes(opt)}
                    onChange={() => handleFilterChange(type, opt)}
                  />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none hidden peer-checked:block left-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className={`text-sm transition-colors ${activeFilters[type].includes(opt) ? 'text-black font-medium' : 'text-gray-500 group-hover:text-black'}`}>
                  {opt}
                </span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-6 py-20 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row gap-16">
        
        {/* Smart Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-32">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-sm font-bold uppercase tracking-[0.1em]">Filtrering</h2>
              {(activeFilters.categories.length > 0 || activeFilters.materials.length > 0) && (
                <button 
                  onClick={() => setActiveFilters({ categories: [], materials: [] })}
                  className="text-[10px] text-gray-400 hover:text-red-500 uppercase tracking-widest transition-colors underline"
                >
                  Nulstil
                </button>
              )}
            </div>

            <FilterSection title="KATEGORI" id="kategori" options={categoryOptions} type="categories" />
            <FilterSection title="MATERIALE" id="materiale" options={materialOptions} type="materials" />

            <div className="mt-12 bg-luxury-beige p-8 rounded-sm">
              <h4 className="font-serif text-lg mb-4">Gave inspiration?</h4>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">Lad os hjælpe dig med at finde den perfekte gave til en du holder af.</p>
              <button className="text-[10px] font-bold uppercase border-b border-black pb-1 hover:text-luxury-accent transition-colors">Udforsk Guiden</button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-4xl font-serif mb-2">{title}</h1>
              <p className="text-sm text-gray-400">{filteredProducts.length} produkter fundet</p>
            </div>
            <div className="flex items-center gap-4">
               <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Sorter:</span>
               <select className="bg-transparent border-b border-gray-200 py-1 text-sm focus:outline-none cursor-pointer">
                  <option>Nyeste</option>
                  <option>Pris: Lav til Høj</option>
                  <option>Pris: Høj til Lav</option>
               </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map(p => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  onClick={() => onSelectProduct(p)} 
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="py-40 text-center border-2 border-dashed border-gray-100 rounded-lg">
               <p className="text-gray-400 italic">Ingen produkter matcher dine valgte filtre.</p>
               <button 
                 onClick={() => setActiveFilters({ categories: [], materials: [] })}
                 className="mt-4 text-xs font-bold uppercase tracking-widest underline hover:text-luxury-accent"
               >
                 Nulstil alle filtre
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JewelryView;