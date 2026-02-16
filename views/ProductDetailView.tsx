import React from 'react';
import { Product } from '../types';
import { Shield, Truck, RotateCcw } from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, onAddToCart }) => {
  return (
    <div className="container mx-auto px-6 py-20 animate-in fade-in zoom-in-95 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="bg-luxury-card">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover aspect-[4/5] shadow-xl" />
        </div>

        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">{product.brand}</span>
            <h1 className="text-5xl font-serif">{product.name}</h1>
            <p className="text-2xl font-bold">{product.price} kr.</p>
          </div>

          <p className="text-gray-500 leading-relaxed text-lg font-light">
            {product.description}
          </p>

          <div className="space-y-4 pt-6">
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-black text-white py-5 uppercase text-xs font-bold tracking-[0.2em] hover:bg-luxury-accent transition-all transform hover:-translate-y-1"
            >
              Læg i kurv
            </button>
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck size={20} strokeWidth={1} />
                <span className="text-[9px] uppercase font-bold tracking-widest">Fri Fragt</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw size={20} strokeWidth={1} />
                <span className="text-[9px] uppercase font-bold tracking-widest">30 dages retur</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield size={20} strokeWidth={1} />
                <span className="text-[9px] uppercase font-bold tracking-widest">2 års garanti</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;