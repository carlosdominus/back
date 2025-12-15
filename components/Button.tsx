import React from 'react';
import { COLORS } from '../constants';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button: React.FC<Props> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden font-bold py-4 px-8 rounded-xl transition-all duration-200 transform active:scale-95 flex items-center justify-center gap-2 shadow-lg";
  
  const variants = {
    primary: `text-white hover:brightness-110 hover:shadow-xl`,
    secondary: `bg-white text-gray-800 border-2 border-gray-200 hover:bg-gray-50`,
  };

  // Custom style for the specific primary green
  const style = variant === 'primary' 
    ? { backgroundColor: COLORS.primary, ...props.style }
    : props.style;

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      style={style}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
    </button>
  );
};

export default Button;