import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../constants';

interface Props {
  data: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={data.avatar} 
              alt={data.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
            {data.verified && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                <CheckCircle2 size={16} className="text-blue-500 fill-blue-50" />
              </div>
            )}
          </div>
          <div>
            <h4 className="font-bold text-[#1a1a1a] text-sm">{data.name}</h4>
            <p className="text-xs text-[#666666]">{data.location}</p>
          </div>
        </div>
        {data.tag && (
          <span className={`text-[10px] uppercase tracking-wide font-bold px-2 py-1 rounded-full ${data.tagColor || 'bg-gray-100 text-gray-600'}`}>
            {data.tag}
          </span>
        )}
      </div>

      <div className="flex-1">
        <p className="text-[#666666] text-sm leading-relaxed mb-4">"{data.quote}"</p>
      </div>

      <div className="flex gap-0.5 mt-auto pt-4 border-t border-gray-50">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < data.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;