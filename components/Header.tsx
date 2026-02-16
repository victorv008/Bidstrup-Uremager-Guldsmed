import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, User, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { ViewType } from '../types';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenLogin: () => void;
  onNavigate: (view: ViewType, category?: string) => void;
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenCart, onOpenLogin, onNavigate, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex flex-col items-start group">
          <span className="font-serif text-2xl tracking-[0.2em] font-bold group-hover:text-luxury-accent transition-colors">BIDSTRUP</span>
          <span className="text-[9px] uppercase tracking-widest text-gray-400">Uremager & Guldsmed</span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative">
              <button 
                onClick={() => onNavigate(item.view)}
                className="text-[11px] font-bold uppercase tracking-[0.15em] hover:text-luxury-accent transition-colors flex items-center gap-1 py-4"
              >
                {item.label}
                {item.hasMegaMenu && <ChevronDown size={12} className="opacity-40 group-hover:rotate-180 transition-transform" />}
              </button>

              {item.hasMegaMenu && (
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[750px] bg-white shadow-2xl border-t border-luxury-accent p-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out translate-y-4 group-hover:translate-y-0 flex gap-12 z-50">
                  <div className="flex-1">
                    <h4 className="font-serif text-2xl mb-8 text-black border-b border-gray-100 pb-4">{item.label}</h4>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                      {item.megaMenuCategories?.map(cat => (
                        <button 
                          key={cat} 
                          onClick={() => onNavigate('jewelry', cat)} 
                          className="text-sm text-gray-500 hover:text-black hover:translate-x-2 transition-all text-left flex items-center gap-2 group/item"
                        >
                          <span className="w-1 h-1 bg-luxury-accent opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="w-[280px] bg-luxury-beige p-8 flex flex-col justify-center items-center text-center rounded-sm overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=40&w=400" alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-accent mb-3">Ny Kollektion</span>
                    <p className="relative z-10 text-base font-serif mb-6 italic leading-relaxed">Oplev årets smukkeste nyheder fra førende mærker</p>
                    <button 
                      onClick={() => onNavigate('jewelry')} 
                      className="relative z-10 text-[11px] font-bold uppercase border-b-2 border-black pb-1 hover:text-luxury-accent hover:border-luxury-accent transition-all"
                    >
                      Udforsk
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button onClick={onOpenSearch} className="hover:text-luxury-accent transition-all transform hover:scale-110" aria-label="Søg">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button onClick={onOpenLogin} className="hover:text-luxury-accent transition-all transform hover:scale-110" aria-label="Profil">
            <User size={22} strokeWidth={1.5} />
          </button>
          <button onClick={onOpenCart} className="relative group p-1" aria-label="Kurv">
            <ShoppingBag size={22} strokeWidth={1.5} className="group-hover:text-luxury-accent transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-in zoom-in-50 duration-300">
                {cartCount}
              </span>
            )}
          </button>
          <button className="md:hidden hover:text-luxury-accent transition-colors"><Menu size={22} /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;