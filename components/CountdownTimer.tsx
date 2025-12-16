import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import { COLORS } from '../constants';

const CountdownTimer: React.FC = () => {
  // Initial state: 3 minutes 35 seconds = 215 seconds
  const [timeLeft, setTimeLeft] = useState(215);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-red-50 rounded-xl border border-red-100 w-full max-w-sm mx-auto my-6 shadow-sm">
      <div className="text-sm uppercase font-bold text-red-600 tracking-wider mb-2 flex items-center gap-2">
        <Timer size={16} />
        Tempo restante para garantir esse preço
      </div>
      <div className="text-4xl font-black text-red-600 font-mono tracking-tighter" style={{ textShadow: '0 2px 4px rgba(239, 68, 68, 0.2)' }}>
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>
    </div>
  );
};

export default CountdownTimer;