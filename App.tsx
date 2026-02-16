import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import JewelryView from './views/JewelryView';
import ServiceView from './views/ServiceView';
import ProductDetailView from './views/ProductDetailView';
import { SearchOverlay, CartDrawer, LoginModal } from './components/Overlays';
import { ViewType, Product, CartItem } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [activeCategory, setActiveCategory] = useState<string>('Vores Udvalg');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const navigateToView = (view: ViewType, category?: string) => {
    setCurrentView(view);
    setActiveCategory(category || (view === 'jewelry' ? 'Vores Udvalg' : ''));
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const cartTotal = useMemo(() => 
    cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  , [cart]);

  const renderView = () => {
    switch (currentView) {
      case 'home': 
        return <HomeView onNavigate={navigateToView} onSelectProduct={navigateToProduct} onAddToCart={addToCart} />;
      case 'jewelry': 
        return <JewelryView title={activeCategory} onSelectProduct={navigateToProduct} onAddToCart={addToCart} />;
      case 'service': 
        return <ServiceView />;
      case 'detail': 
        return selectedProduct ? (
          <ProductDetailView product={selectedProduct} onAddToCart={addToCart} />
        ) : <HomeView onNavigate={navigateToView} onSelectProduct={navigateToProduct} onAddToCart={addToCart} />;
      default: 
        return <HomeView onNavigate={navigateToView} onSelectProduct={navigateToProduct} onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-luxury-accent selection:text-white">
      <Header 
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
        onNavigate={navigateToView}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
      />
      
      <main className="flex-grow pt-[80px]">
        {renderView()}
      </main>

      <Footer />

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <CartDrawer 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        items={cart} 
        total={cartTotal}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;