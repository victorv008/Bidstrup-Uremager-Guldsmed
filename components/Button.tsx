import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 transition-all duration-300 uppercase tracking-widest text-xs font-bold";
  
  const variants = {
    primary: "bg-black text-white hover:bg-luxury-accent hover:text-white",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    ghost: "text-black hover:text-luxury-accent"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;