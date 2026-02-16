import React from 'react';

interface HeroProps {
  onSeKollektion: () => void;
  onBookService: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSeKollektion, onBookService }) => {
  return (
    <section className="relative w-full h-[85vh] bg-luxury-beige overflow-hidden">
      <div className="absolute inset-0 opacity-10">
         <img 
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Background Texture" 
            className="w-full h-full object-cover mix-blend-multiply"
         />
      </div>

      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        <div className="max-w-xl space-y-8">
          <span className="text-luxury-accent uppercase tracking-[0.4em] text-[10px] font-bold">
            Etableret 1928
          </span>
          <h1 className="font-serif text-6xl md:text-8xl leading-tight text-luxury-text">
            Tidløs elegance & dansk håndværk
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
            Oplev vores kuraterede udvalg af eksklusive ure og smykker. 
            Vi forener traditionelt urmageri med moderne design.
          </p>
          <div className="flex gap-6 pt-4">
            <button 
              onClick={onSeKollektion}
              className="bg-black text-white px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-luxury-accent transition-all transform hover:-translate-y-1"
            >
              Se Kollektion
            </button>
            <button 
              onClick={onBookService}
              className="border border-black text-black px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-black hover:text-white transition-all transform hover:-translate-y-1"
            >
              Book Service
            </button>
          </div>
        </div>

        <div className="hidden lg:block absolute right-12 bottom-0 w-2/5 h-[85%] bg-white p-6 shadow-[-40px_-40px_100px_rgba(0,0,0,0.05)] transform translate-y-12">
            <img 
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Watch Detail"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;