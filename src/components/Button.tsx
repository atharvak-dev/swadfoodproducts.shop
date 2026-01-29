import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  isLoading = false,
  disabled = false,
  className,
  type = 'button',
  onClick,
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] min-w-[48px]';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary-400 to-primary-500 text-white shadow-warm hover:shadow-float hover:scale-105 focus:ring-primary-400',
    secondary:
      'bg-white text-secondary-800 border-2 border-secondary-200 hover:bg-secondary-50 hover:border-secondary-300 focus:ring-secondary-300',
    outline:
      'bg-transparent text-primary-500 border-2 border-primary-300 hover:bg-primary-50 hover:border-primary-400 focus:ring-primary-400',
    ghost:
      'bg-transparent text-secondary-800 hover:bg-primary-50 hover:text-primary-500 focus:ring-primary-400',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: isDisabled ? 1 : 1.02 }}
      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && (
            <Icon className={cn('w-5 h-5', children ? 'mr-2' : '')} />
          )}
          {children}
          {Icon && iconPosition === 'right' && (
            <Icon className={cn('w-5 h-5', children ? 'ml-2' : '')} />
          )}
        </>
      )}
    </motion.button>
  );
}