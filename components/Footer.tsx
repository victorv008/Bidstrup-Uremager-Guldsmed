import React from 'react';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-beige pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* Google Reviews Section */}
        <div className="mb-20">
            <div className="flex flex-col items-center text-center mb-10">
                <div className="flex items-center gap-2 mb-2">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                        alt="Google" 
                        className="w-6 h-6"
                    />
                    <span className="font-bold text-lg">4.9 / 5</span>
                </div>
                <p className="text-gray-500 text-sm">Baseret på 86 anmeldelser</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {REVIEWS.map((review) => (
                    <div key={review.id} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                             <div className="flex gap-1 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                                ))}
                             </div>
                             <span className="text-xs text-gray-400">{review.date}</span>
                        </div>
                        <p className="text-gray-700 italic mb-6 line-clamp-3">"{review.text}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 text-xs">
                                {review.author.charAt(0)}
                            </div>
                            <span className="font-bold text-sm">{review.author}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="border-t border-gray-300 my-10"></div>

        {/* Standard Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
                <h3 className="font-serif text-2xl mb-6">BIDSTRUP</h3>
                <address className="not-italic text-gray-600 text-sm space-y-2">
                    <p>Jernbane Allé 37</p>
                    <p>2720 Vanløse</p>
                    <br />
                    <p>Tlf: +45 38 71 08 85</p>
                    <p>Email: kontakt@bidstrup-ure.dk</p>
                </address>
            </div>

            <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-6">Information</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-black">Om Os</a></li>
                    <li><a href="#" className="hover:text-black">Handelsbetingelser</a></li>
                    <li><a href="#" className="hover:text-black">Cookiepolitik</a></li>
                    <li><a href="#" className="hover:text-black">Kontakt</a></li>
                </ul>
            </div>

             <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-6">Kategorier</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-black">Ure</a></li>
                    <li><a href="#" className="hover:text-black">Smykker</a></li>
                    <li><a href="#" className="hover:text-black">Vielsesringe</a></li>
                    <li><a href="#" className="hover:text-black">Dåbsgaver</a></li>
                </ul>
            </div>

             <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-6">Nyhedsbrev</h4>
                <p className="text-gray-600 text-sm mb-4">Få de gode tilbud før alle andre.</p>
                <div className="flex">
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        className="bg-white border border-gray-300 px-4 py-2 w-full text-sm focus:outline-none focus:border-black"
                    />
                    <button className="bg-black text-white px-4 py-2 text-xs font-bold uppercase hover:bg-luxury-accent transition-colors">
                        Tilmeld
                    </button>
                </div>
            </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-16">
            &copy; {new Date().getFullYear()} Bidstrup Uremager & Guldsmed. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;