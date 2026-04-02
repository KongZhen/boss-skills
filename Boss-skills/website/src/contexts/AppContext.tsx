'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

/* ═══════ Types ═══════ */
export type Theme = 'light' | 'dark';
export type Locale = 'en' | 'zh';

/* ═══════ Theme Context ═══════ */
interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

/* ═══════ Locale Context ═══════ */
interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
});

export function useLocale() {
  return useContext(LocaleContext);
}

/* ═══════ Combined App Provider ═══════ */
export function AppProvider({ children }: { children: React.ReactNode }) {
  // ── Theme ──────────────────────────────────────────────
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // On mount, read from localStorage or fall back to system preference
    const stored = localStorage.getItem('boss-skills-theme') as Theme | null;
    const resolved: Theme =
      stored === 'light' || stored === 'dark'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    // This useEffect runs once on mount to sync external state (localStorage/matchMedia)
    // into React — exactly the recommended pattern per React docs.
    /* eslint-disable-next-line react-hooks/set-state-in-effect */
    setTheme(resolved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('boss-skills-theme', theme);
    // Allow CSS transitions after first theme resolution (prevents FOUC flicker)
    requestAnimationFrame(() => root.classList.add('theme-ready'));
  }, [theme, mounted]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  // ── Locale ─────────────────────────────────────────────
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const stored = localStorage.getItem('boss-skills-locale') as Locale | null;
    if (stored === 'en' || stored === 'zh') {
      /* eslint-disable-next-line react-hooks/set-state-in-effect */
      setLocaleState(stored);
      document.documentElement.lang = stored === 'zh' ? 'zh-CN' : 'en';
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('boss-skills-locale', l);
    // Update html lang attribute
    document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        {children}
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}
