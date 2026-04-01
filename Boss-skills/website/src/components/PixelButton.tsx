'use client';

import Link from 'next/link';

type ButtonVariant = 'primary' | 'success' | 'warning' | 'error';

interface PixelButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function PixelButton({
  variant = 'primary',
  children,
  onClick,
  href,
  className = '',
}: PixelButtonProps) {
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'nes-btn is-primary',
    success: 'nes-btn is-success',
    warning: 'nes-btn is-warning',
    error: 'nes-btn is-error',
  };

  const baseClass = `${variantClasses[variant]} ${className}`;

  const style: React.CSSProperties = {
    fontFamily: 'monospace',
    fontSize: '14px',
    fontWeight: 'bold',
    imageRendering: 'pixelated',
  };

  if (href) {
    return (
      <Link href={href} className={baseClass} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass} style={style}>
      {children}
    </button>
  );
}
