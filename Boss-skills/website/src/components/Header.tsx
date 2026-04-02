'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme, useLocale } from '@/contexts/AppContext';

const NAV_ITEMS = {
  en: [
    { label: 'Skills',     href: '/#skills' },
    { label: 'Playground', href: '/#playground' },
    { label: 'About',      href: '/#about' },
    { label: 'Contribute', href: '/#contribute' },
  ],
  zh: [
    { label: '技能库', href: '/#skills' },
    { label: '模拟器', href: '/#playground' },
    { label: '关于',   href: '/#about' },
    { label: '来一个', href: '/#contribute' },
  ],
};

/* Unified font size for all header elements — 20% larger than previous 1.125rem */
const HEADER_FONT = "'Jersey 10', monospace";
const HEADER_SIZE = '1.35rem';
const CTRL_SIZE = '0.78rem'; /* right-side controls: 20% up from 0.65rem */

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLocale();

  const navItems = NAV_ITEMS[locale];
  const isDark = theme === 'dark';

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg-primary)',
    }}>
      <nav style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        height: '72px',
        boxSizing: 'border-box',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: HEADER_FONT,
          fontSize: HEADER_SIZE,
          color: 'var(--text-primary)',
          textDecoration: 'none',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          MY BOSS SKILLS
        </Link>

        {/* ZH pixel font injection — nav text 20% smaller */}
        {locale === 'zh' && (
          <style>{`
            .nav-link-zh {
              font-family: var(--font-pixel-cjk), sans-serif !important;
              text-transform: none !important;
              letter-spacing: 0 !important;
              font-size: 1.08rem !important;
            }
          `}</style>
        )}

        {/* Desktop Nav */}
        <div className="header-desktop" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
          flex: 1,
        }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={locale === 'zh' ? 'nav-link-zh' : ''} style={{
              fontFamily: HEADER_FONT,
              fontSize: HEADER_SIZE,
              fontWeight: 400,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              padding: '6px 12px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              opacity: 0.75,
              transition: 'opacity 100ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right controls — unified font */}
        <div className="header-desktop" style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          <button
            onClick={() => setLocale('en')}
            className="toggle-btn"
            style={{
              fontFamily: HEADER_FONT,
              fontSize: CTRL_SIZE,
              ...(locale === 'en' ? { background: 'var(--text-primary)', color: 'var(--bg-primary)', borderColor: 'var(--text-primary)' } : {}),
            }}
          >
            EN
          </button>
          <button
            onClick={() => setLocale('zh')}
            className="toggle-btn"
            style={{
              fontFamily: HEADER_FONT,
              fontSize: CTRL_SIZE,
              ...(locale === 'zh' ? { background: 'var(--text-primary)', color: 'var(--bg-primary)', borderColor: 'var(--text-primary)' } : {}),
            }}
          >
            ZH
          </button>

          <button
            onClick={toggleTheme}
            className="toggle-btn"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{ fontFamily: HEADER_FONT, fontSize: CTRL_SIZE, lineHeight: 1 }}
          >
            {isDark ? '☀' : '☾'}
          </button>

          <a
            href="https://github.com/KongZhen/boss-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="toggle-btn"
            style={{ fontFamily: HEADER_FONT, fontSize: CTRL_SIZE }}
          >
            ★ GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="header-mobile"
          style={{
            background: 'transparent',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            fontFamily: HEADER_FONT,
            fontSize: '1rem',
            padding: '6px 10px',
            cursor: 'pointer',
            marginLeft: 'auto',
          }}
        >
          {isMenuOpen ? '✕' : '≡'}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div style={{
          padding: '8px 32px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          borderTop: '1px solid var(--border-color)',
        }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={locale === 'zh' ? 'nav-link-zh' : ''}
              style={{
                fontFamily: HEADER_FONT,
                fontSize: HEADER_SIZE,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                padding: '10px 4px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '1px solid var(--border-color)',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: '8px', paddingTop: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setLocale('en')}
              className="toggle-btn"
              style={{
                fontFamily: HEADER_FONT, fontSize: CTRL_SIZE,
                ...(locale === 'en' ? { background: 'var(--text-primary)', color: 'var(--bg-primary)', borderColor: 'var(--text-primary)' } : {}),
              }}
            >EN</button>
            <button
              onClick={() => setLocale('zh')}
              className="toggle-btn"
              style={{
                fontFamily: HEADER_FONT, fontSize: CTRL_SIZE,
                ...(locale === 'zh' ? { background: 'var(--text-primary)', color: 'var(--bg-primary)', borderColor: 'var(--text-primary)' } : {}),
              }}
            >ZH</button>
            <button
              onClick={toggleTheme}
              className="toggle-btn"
              style={{ fontFamily: HEADER_FONT, fontSize: CTRL_SIZE }}
            >
              {isDark ? '☀' : '☾'}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .header-desktop { display: none !important; }
          .header-mobile  { display: inline-flex !important; }
        }
        @media (min-width: 769px) {
          .header-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
