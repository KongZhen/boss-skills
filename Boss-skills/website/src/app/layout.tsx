import type { Metadata } from "next";
import "./globals.css";
import "../styles/pixel.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MY BOSS SKILLS — A Serious Framework for Unserious Bosses",
  description:
    "Turn any AI into your worst boss nightmare. Open-source satirical AI skills that expose workplace absurdity through humor.",
  keywords: [
    "boss", "satire", "workplace", "AI", "skills", "humor", "management", "open-source",
  ],
  authors: [{ name: "Boss Skills Team" }],
  openGraph: {
    title: "MY BOSS SKILLS",
    description: "A serious open-source framework for unserious bosses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta name="theme-color" content="#f5f0e8" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0e1622" media="(prefers-color-scheme: dark)" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Noto+Sans+SC:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
