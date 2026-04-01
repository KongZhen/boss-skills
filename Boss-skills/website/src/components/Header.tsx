'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Skills', href: '/skills' },
    { label: 'Playground', href: '/playground' },
    { label: 'About', href: '/about' },
    { label: 'Contribute', href: '/contribute' },
  ];

  return (
    <header className="nav-bar">
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: 'clamp(0.6rem, 1.5vw, 0.85rem)',
          color: 'var(--text-primary)',
          textDecoration: 'none',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          MY BOSS SKILLS
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: '2px solid var(--border-color)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-pixel)',
            fontSize: '0.7rem',
            padding: '4px 8px',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? '✕' : '≡'}
        </button>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/anthropics/boss-skills"
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn pixel-btn-ghost"
          style={{ fontSize: '0.5rem', padding: '6px 12px' }}
        >
          ★ GitHub
        </a>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="mobile-dropdown" style={{
          borderTop: '2px solid var(--border-color)',
          padding: '12px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{ display: 'block', padding: '10px 12px' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
