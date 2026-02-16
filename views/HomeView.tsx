import React, { useState, useEffect, useMemo } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { ViewType, Product } from '../types';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectProduct, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'nyheder' | 'populært'>('nyheder');

  const filteredProducts = useMemo(() => {
    if (activeTab === 'nyheder') {
      return PRODUCTS.filter(p => p.isNew).slice(0, 4);
    }
    return PRODUCTS.filter(p => p.isPopular).slice(0, 4);
  }, [activeTab]);

  // Handle intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      let delay = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          // Apply staggered delay
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('visible');
          delay += 100;
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    // Get items that haven't been revealed yet
    const items = document.querySelectorAll('.reveal-item:not(.visible)');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredProducts]); // Re-run when products change on tab switch

  return (
    <div className="animate-in fade-in duration-700">
      <Hero 
        onSeKollektion={() => onNavigate('jewelry')} 
        onBookService={() => onNavigate('service')} 
      />
      
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          {/* Tabs Section */}
          <div className="flex flex-col items-center mb-16 space-y-8">
            <div className="flex items-center gap-12">
              <button 
                onClick={() => setActiveTab('nyheder')}
                className={`relative py-2 transition-all duration-300 ${
                  activeTab === 'nyheder' 
                  ? 'text-luxury-text font-serif text-3xl md:text-4xl font-bold' 
                  : 'text-gray-300 font-serif text-3xl md:text-4xl hover:text-gray-400'
                }`}
              >
                Nyheder
                {activeTab === 'nyheder' && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-luxury-accent animate-in fade-in zoom-in duration-500"></span>
                )}
              </button>
              
              <button 
                onClick={() => setActiveTab('populært')}
                className={`relative py-2 transition-all duration-300 ${
                  activeTab === 'populært' 
                  ? 'text-luxury-text font-serif text-3xl md:text-4xl font-bold' 
                  : 'text-gray-300 font-serif text-3xl md:text-4xl hover:text-gray-400'
                }`}
              >
                Populært
                {activeTab === 'populært' && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-luxury-accent animate-in fade-in zoom-in duration-500"></span>
                )}
              </button>
            </div>
            
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed text-center italic">
              {activeTab === 'nyheder' 
                ? 'Gå på opdagelse i de seneste tilføjelser til vores kollektion.' 
                : 'Se de mest eftertragtede designs, som vores kunder elsker.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 min-h-[500px]">
            {filteredProducts.map(p => (
              <ProductCard 
                key={`${activeTab}-${p.id}`} 
                product={p} 
                onClick={() => onSelectProduct(p)} 
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          <div className="mt-20 text-center">
            <button 
              onClick={() => onNavigate('jewelry')}
              className="group text-[11px] font-bold uppercase tracking-[0.3em] border-b-2 border-black pb-2 hover:text-luxury-accent hover:border-luxury-accent transition-all inline-flex items-center gap-4"
            >
              Se alle produkter
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;