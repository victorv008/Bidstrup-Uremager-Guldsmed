import React from 'react';
import { X, Search, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<OverlayProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 transition-all duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" onClick={onClose} />
      <div className={`absolute top-0 left-0 w-full bg-white border-b border-gray-100 shadow-2xl p-10 md:p-24 flex flex-col items-center justify-center transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button onClick={onClose} className="absolute top-10 right-10 hover:rotate-90 transition-transform p-2 group">
          <X size={32} strokeWidth={1} className="group-hover:text-luxury-accent transition-colors" />
        </button>
        <div className="max-w-4xl w-full relative">
          <input 
            type="text" 
            placeholder="Hvad leder du efter?" 
            className="w-full text-3xl md:text-6xl font-serif border-b border-black py-8 outline-none pr-12 placeholder:text-gray-100 focus:placeholder:text-gray-50 transition-all"
            autoFocus={isOpen}
          />
          <Search className="absolute right-0 bottom-12 opacity-10" size={50} />
          <div className="mt-12">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 mb-6">Populære søgninger</h4>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {['Vielsesringe', 'Rolex', 'Halskæder', 'Urmager Service'].map(term => (
                <button key={term} className="flex items-center gap-2 group text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-luxury-accent" />
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoginModal: React.FC<OverlayProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-6 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative bg-white w-full max-w-md p-10 md:p-16 transition-all duration-500 ease-out ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'}`}>
        <button onClick={onClose} className="absolute top-6 right-6 opacity-40 hover:opacity-100 hover:rotate-90 transition-all"><X size={24} /></button>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-3">Velkommen</h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">Log ind på din profil</p>
        </div>
        <form className="space-y-6" onSubmit={e => e.preventDefault()}>
          <div>
            <input type="email" placeholder="Email" className="w-full bg-luxury-card p-5 text-sm outline-none border-b border-transparent focus:border-luxury-accent transition-colors" />
          </div>
          <div>
            <input type="password" placeholder="Kodeord" className="w-full bg-luxury-card p-5 text-sm outline-none border-b border-transparent focus:border-luxury-accent transition-colors" />
          </div>
          <button className="w-full bg-black text-white py-5 uppercase text-xs font-bold tracking-[0.3em] hover:bg-luxury-accent transition-all transform hover:-translate-y-1 shadow-lg">
            Log Ind
          </button>
        </form>
        <div className="mt-10 pt-8 border-t border-gray-50 text-center flex flex-col gap-4">
          <button className="text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-black transition-colors">Glemt kodeord?</button>
          <button className="text-[10px] uppercase font-bold tracking-widest text-black border-b border-black self-center pb-0.5 hover:text-luxury-accent hover:border-luxury-accent">Opret ny konto</button>
        </div>
      </div>
    </div>
  );
};

interface CartDrawerProps extends OverlayProps {
  items: CartItem[];
  total: number;
  onRemove: (id: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, total, onRemove }) => {
  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <div className={`absolute top-0 right-0 w-full max-w-[480px] h-full bg-white shadow-2xl flex flex-col transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-10 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-3xl font-serif">Din Kurv</h2>
          <button onClick={onClose} className="hover:rotate-90 transition-all p-2 bg-gray-50 rounded-full"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-300 gap-6">
              <ShoppingBag size={80} strokeWidth={0.5} className="opacity-20" />
              <div className="text-center">
                <p className="uppercase text-[11px] font-bold tracking-[0.4em] mb-4">Din kurv er tom</p>
                <button onClick={onClose} className="text-[10px] font-bold uppercase border-b border-black pb-1 hover:text-luxury-accent">Start med at handle</button>
              </div>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-8 group animate-in slide-in-from-right-4 duration-500">
                <div className="w-28 h-36 bg-luxury-card shrink-0 overflow-hidden relative">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={item.name} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-1 block">{item.brand}</span>
                    <h4 className="font-serif text-xl mb-1 leading-tight group-hover:text-luxury-accent transition-colors">{item.name}</h4>
                    <p className="text-xs text-gray-400 italic">Antal: {item.quantity}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-base tracking-tight">{item.price * item.quantity} kr.</span>
                    <button 
                      onClick={() => onRemove(item.id)} 
                      className="text-gray-300 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-10 border-t border-gray-100 bg-luxury-beige shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>Fragt</span>
                <span>Gratis</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-serif text-2xl">Total</span>
                <span className="text-2xl font-bold">{total} kr.</span>
              </div>
            </div>
            <button className="w-full bg-black text-white py-6 uppercase text-xs font-bold tracking-[0.3em] hover:bg-luxury-accent transition-all transform hover:-translate-y-1 shadow-xl">
              Gå til betaling
            </button>
            <div className="mt-6 flex justify-center items-center gap-3 opacity-30 grayscale">
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};