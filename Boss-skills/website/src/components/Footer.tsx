import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <p style={{ marginBottom: '8px' }}>
        <Link href="/" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>MY BOSS SKILLS</Link>
        {' '}&copy; 2025 &mdash; Made with ❌ love and 💀 suffering
      </p>
      <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
        <a href="https://github.com/anthropics/boss-skills" target="_blank" rel="noopener noreferrer">GitHub</a>
        {' · '}
        <Link href="/contribute">Contribute</Link>
        {' · '}
        MIT License
      </p>
      <p style={{ marginTop: '8px', opacity: 0.6 }}>
        This is a parody project. Any resemblance to your actual boss is entirely intentional.
      </p>
    </footer>
  );
}
