import React, { useEffect, useState } from 'react';
import { ShieldCheck, AlertTriangle, ArrowRight, Lock, TrendingUp } from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import TestimonialCard from './components/TestimonialCard';
import Button from './components/Button';
import { TESTIMONIALS, COLORS } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-[#1a4d3f] selection:text-white pb-24">
      
      {/* Top Notification Bar - Reduced padding for compactness */}
      <div className="bg-[#1a4d3f] text-white py-1.5 px-4 text-center text-xs font-medium shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-center gap-2 animate-pulse">
          <TrendingUp size={14} className="text-green-300" />
          <span>58 pessoas investiram no App nas últimas 2 horas.</span>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-2xl mx-auto px-4 pt-4 pb-12">
        
        {/* Warning / Social Proof Header - Compact version */}
        <div className="text-center mb-4 bg-orange-50 border border-orange-100 rounded-lg p-2 shadow-sm mx-auto max-w-md">
          <p className="text-orange-800 font-medium text-xs flex items-center justify-center gap-1.5">
            <AlertTriangle size={14} />
            Normalmente quem sai agora se arrepende depois.
          </p>
        </div>

        {/* Hero Section - Drastically reduced spacing */}
        <div className="text-center space-y-2 mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-[10px] tracking-widest uppercase">
            Última Chance
          </span>
          
          <h1 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] leading-tight tracking-tight">
            ⚠️ Espera! Não Saia Ainda...
          </h1>
          
          <p className="text-[#666666] text-sm sm:text-base max-w-lg mx-auto leading-relaxed px-4">
            Esta condição especial não estará disponível novamente.
            Liberamos uma última chance para você garantir agora — antes que expire.
          </p>
        </div>

        {/* Offer / Pricing Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-10 relative transform hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#1a4d3f] to-green-600"></div>
          
          <div className="p-5 sm:p-8 text-center">
            {/* Removed the "De R$ 197,00" block as requested */}
            <div className="mb-4">
               <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-[10px] uppercase tracking-wide font-bold">Oferta Relâmpago</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 mb-4">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wide">Exclusivo SOMENTE agora</span>
              <div className="flex items-baseline justify-center gap-2">
                 <span className="text-gray-400 text-xl font-medium line-through decoration-red-400 decoration-2">
                    R$ 197
                 </span>
                 <span className="text-5xl sm:text-6xl font-black text-[#1a4d3f] tracking-tight">
                    R$ 97
                 </span>
              </div>
              <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                Exclusivo SOMENTE se você clicar no botão abaixo agora.
              </p>
            </div>

            <div className="mb-6 -mt-2 scale-90 origin-center">
              <CountdownTimer />
            </div>

            <div className="space-y-4">
              <Button fullWidth className="text-lg shadow-green-900/20 shadow-xl py-4 animate-pulse-custom">
                <div className="flex flex-col items-center leading-none">
                  <span className="text-xs sm:text-sm font-medium opacity-90 mb-0.5">QUERO GARANTIR</span>
                  <span className="text-2xl sm:text-3xl font-black tracking-tight">POR R$ 97</span>
                </div>
                <ArrowRight size={24} className="ml-2" />
              </Button>
              
              {/* Guarantee Seal */}
              <div className="flex justify-center pt-2">
                <img 
                  src="https://i.ibb.co/1Y27fWg9/Selo-de-Garantia-de-30-Dias-PNG-Transparente-Sem-Fundo.png" 
                  alt="Garantia de 30 Dias" 
                  className="h-16 object-contain"
                />
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-2 border-t border-gray-50">
                <Lock size={12} />
                <span>Pagamento 100% Seguro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="space-y-8">
          <div className="text-center flex flex-col items-center">
            {/* Google Seal */}
            <img 
              src="https://i.ibb.co/zH6rRHBg/google.png" 
              alt="Google Reviews" 
              className="h-8 mb-4 object-contain"
            />
            
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
              O que as pessoas estão dizendo sobre o LotoApp
            </h3>
            <div className="h-1 w-16 bg-[#1a4d3f] mx-auto rounded-full opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} data={testimonial} />
            ))}
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-400 italic">
              Depoimentos reais. Os Resultados individuais podem variar.
            </p>
          </div>
          
          <div className="pt-8">
             <Button fullWidth variant="secondary" className="shadow-none border-gray-200">
                Quero Garantir por R$97,00
             </Button>
          </div>
        </section>

      </main>

      {/* Sticky Bottom CTA (Mobile First approach) */}
      <div 
        className={`fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 transition-transform duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-full md:translate-y-0'}`}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:flex flex-col">
            <span className="text-[10px] font-bold text-red-500 uppercase">Oferta expira em breve</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-gray-400 line-through">R$ 197</span>
              <span className="text-lg font-bold text-[#1a4d3f]">R$ 97,00</span>
            </div>
          </div>
          <Button className="w-full sm:w-auto flex-1 py-3 text-sm shadow-lg shadow-green-900/10">
            Quero Garantir por R$97,00
          </Button>
        </div>
      </div>

    </div>
  );
};

export default App;