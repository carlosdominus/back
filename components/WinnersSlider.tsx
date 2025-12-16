import React, { useState, useEffect } from 'react';
import { Trophy, CheckCircle2 } from 'lucide-react';
import { RECENT_WINNERS } from '../constants';

const WinnersSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % RECENT_WINNERS.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mb-8 max-w-sm mx-auto">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Trophy size={14} className="text-yellow-600 fill-yellow-100" />
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
          Ganhadores Recentes
        </h3>
      </div>

      <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Carousel Track */}
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {RECENT_WINNERS.map((winner) => (
            <div key={winner.id} className="w-full flex-shrink-0 p-3">
              <div className="flex items-center justify-between gap-3">
                
                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src={winner.avatar} 
                      alt={winner.name} 
                      className="w-10 h-10 rounded-full border border-gray-100"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                      <CheckCircle2 size={10} className="text-green-500 fill-green-50" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 leading-tight">{winner.name}</p>
                    <p className="text-[10px] text-gray-400">{winner.location}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-green-500"></span>
                      {winner.date}
                    </p>
                  </div>
                </div>

                {/* Prize Info - Right Aligned */}
                <div className="text-right pl-2 border-l border-gray-50">
                  <p className="text-[10px] text-gray-500 mb-0.5">Saque realizado</p>
                  <p className="text-sm font-black text-[#1a4d3f] whitespace-nowrap">{winner.prize}</p>
                  <span className="inline-block mt-1 text-[9px] font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded-full border border-green-100">
                    {winner.game}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dot Indicators */}
      <div className="flex justify-center gap-1.5 mt-2">
        {RECENT_WINNERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex 
                ? 'w-4 h-1.5 bg-[#1a4d3f]' 
                : 'w-1.5 h-1.5 bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WinnersSlider;