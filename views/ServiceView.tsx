import React from 'react';
import { Clock, ShieldCheck, PenTool } from 'lucide-react';

const ServiceView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Banner */}
      <section className="bg-luxury-beige py-24 text-center">
        <div className="container mx-auto px-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-luxury-accent block mb-4">Urmager & Guldsmed</span>
          <h1 className="text-5xl font-serif mb-6">Service & Reparationer</h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Vi passer på dine kæreste ejendele. På vores eget værksted i Vanløse udfører vi alt fra simple batteriskift til komplekse restaureringer af antikke ure.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h2 className="text-3xl font-serif">Book din tid</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Navn" className="bg-luxury-card border-none p-4 text-sm focus:ring-1 focus:ring-luxury-accent outline-none" />
            <input type="email" placeholder="Email" className="bg-luxury-card border-none p-4 text-sm focus:ring-1 focus:ring-luxury-accent outline-none" />
            <select className="col-span-1 md:col-span-2 bg-luxury-card border-none p-4 text-sm outline-none">
              <option>Vælg service type</option>
              <option>Batteriskift</option>
              <option>Eftersyn af mekanisk ur</option>
              <option>Reparation af smykke</option>
              <option>Vurdering</option>
            </select>
            <textarea placeholder="Beskrivelse af opgaven" rows={5} className="col-span-1 md:col-span-2 bg-luxury-card border-none p-4 text-sm outline-none"></textarea>
            <button className="col-span-1 md:col-span-2 bg-black text-white py-4 uppercase text-xs font-bold tracking-[0.2em] hover:bg-luxury-accent transition-colors">
              Send anmodning
            </button>
          </form>
        </div>

        <div className="space-y-10">
          <h2 className="text-3xl font-serif">Hvorfor vælge os?</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-luxury-beige flex items-center justify-center shrink-0">
                <PenTool size={20} className="text-luxury-accent" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase mb-2">Eget værksted</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Dine ting forlader aldrig huset. Vi udfører alt arbejde lokalt med største ekspertise.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-luxury-beige flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-luxury-accent" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase mb-2">Garanti på alt arbejde</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Vi står inde for vores håndværk og yder altid garanti på de udførte reparationer.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-luxury-beige flex items-center justify-center shrink-0">
                <Clock size={20} className="text-luxury-accent" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase mb-2">Hurtig ekspedition</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Vi ved hvor meget dine smykker betyder for dig. Vi stræber efter kortest mulige ventetid.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceView;