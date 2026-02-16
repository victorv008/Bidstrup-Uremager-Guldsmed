import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { Heart, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onAddToCart }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize wishlist state from localStorage
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('bidstrup-wishlist') || '[]');
    setIsSaved(savedItems.includes(product.id));
  }, [product.id]);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    const savedItems = JSON.parse(localStorage.getItem('bidstrup-wishlist') || '[]');
    let newSavedItems;
    
    if (isSaved) {
      newSavedItems = savedItems.filter((id: number) => id !== product.id);
    } else {
      newSavedItems = [...savedItems, product.id];
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 400);
    }
    
    localStorage.setItem('bidstrup-wishlist', JSON.stringify(newSavedItems));
    setIsSaved(!isSaved);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div 
      className="group flex flex-col items-center cursor-pointer reveal-item"
      onClick={onClick}
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-luxury-card mb-6">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-luxury-accent text-white text-[9px] uppercase font-bold px-3 py-1.5 tracking-widest shadow-sm">
              Nyhed
            </span>
          )}
        </div>

        {/* Wishlist Heart */}
        <button 
          onClick={toggleWishlist}
          className={`absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white shadow-sm ${isAnimating ? 'animate-heart-pop' : ''}`}
        >
          <Heart 
            size={18} 
            strokeWidth={1.5} 
            className={`transition-colors duration-300 ${isSaved ? 'fill-luxury-accent text-luxury-accent' : 'text-gray-400'}`}
          />
        </button>

        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        
        {/* Hover Action Button: Læg i kurv */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-luxury-accent text-white py-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-luxury-text transition-colors"
          >
            <ShoppingBag size={14} />
            Læg i kurv
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-[-70px] transition-all duration-500 bg-white/90 backdrop-blur-sm text-center hidden md:block">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Se Detaljer</span>
        </div>
      </div>

      <div className="text-center space-y-1">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{product.brand}</p>
        <h3 className="text-lg font-serif text-luxury-text group-hover:text-luxury-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-bold mt-2">
          {product.price} kr.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;