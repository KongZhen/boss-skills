import type { Metadata } from "next";
import "./globals.css";
import "../styles/pixel.css";
import { Header } from "@/components/Header";
// Footer is now integrated into page.tsx as SiteFooter
import { AppProvider } from "@/contexts/AppContext";

export const metadata: Metadata = {
  title: "MY BOSS SKILLS — A Serious Framework for Unserious Bosses",
  description:
    "Turn any AI into your worst boss nightmare. Open-source satirical AI skills that expose workplace absurdity through humor.",
  keywords: [
    "boss", "satire", "workplace", "AI", "skills", "humor", "management", "open-source",
  ],
  authors: [{ name: "Boss Skills Team" }],
  metadataBase: new URL("https://boss-skills.com"),
  openGraph: {
    title: "MY BOSS SKILLS",
    description: "A serious open-source framework for unserious bosses.",
    type: "website",
    url: "https://boss-skills.com",
    images: [{ url: "/hero-boss-en.png", width: 406, height: 406, alt: "Boss Skills" }],
  },
  twitter: {
    card: "summary",
    title: "MY BOSS SKILLS",
    description: "A serious open-source framework for unserious bosses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f5f0e8" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0e1622" media="(prefers-color-scheme: dark)" />
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical Ark Pixel fonts */}
        <link rel="preload" href="/fonts/ark-pixel-12px-proportional-zh_cn.otf.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/ark-pixel-12px-proportional-latin.otf.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{ __html: `
  @font-face {
    font-family: 'Ark Pixel 12px';
    src: url('/fonts/ark-pixel-12px-proportional-zh_cn.otf.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    unicode-range: U+4E00-9FFF, U+3400-4DBF, U+3000-303F, U+FF00-FFEF;
  }
  @font-face {
    font-family: 'Ark Pixel 12px';
    src: url('/fonts/ark-pixel-12px-proportional-latin.otf.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    unicode-range: U+0000-00FF, U+0100-024F, U+2000-206F;
  }
` }} />
        <link
          href="https://fonts.googleapis.com/css2?family=Jersey+10&family=Jersey+20&family=Zen+Dots&family=Pixelify+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Anti-FOUC: apply theme class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('boss-skills-theme');if(t==='dark'){document.documentElement.classList.add('dark')}else if(t==='light'){document.documentElement.classList.add('light')}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <AppProvider>
          <Header />
          <main className="flex-grow">{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
