'use client';

import Link from 'next/link';
import AnnoyanceBar from './AnnoyanceBar';

type AnnoyanceLevel = 'mild' | 'moderate' | 'high' | 'soul-crushing';

interface PixelBossCardProps {
  name: string;
  nameEn: string;
  nameCn: string;
  description: string;
  descriptionCn?: string;
  oneLiner: string;
  oneLineCn?: string;
  annoyanceLevel: AnnoyanceLevel;
  slug: string;
  locale?: 'en' | 'cn';
}

export default function PixelBossCard({
  name,
  nameEn,
  nameCn,
  description,
  descriptionCn,
  oneLiner,
  oneLineCn,
  annoyanceLevel,
  slug,
  locale = 'en',
}: PixelBossCardProps) {
  return (
    <>
    <style>
      {`
        .boss-card {
          border: 4px solid #89aec8;
          background: #002c55;
          padding: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          image-rendering: pixelated;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .boss-card:hover {
          border-color: #f0f6f7;
          box-shadow: 0 0 12px rgba(240, 246, 247, 0.3), inset 0 0 12px rgba(240, 246, 247, 0.1);
          transform: translateY(-2px);
        }

        .boss-card:active {
          transform: translateY(0);
          box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
        }

        .boss-avatar {
          width: 100%;
          height: 80px;
          background: linear-gradient(135deg, #004a8a 0%, #001f3f 100%);
          border: 2px solid #89aec8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          color: #f0f6f7;
          font-family: monospace;
        }

        .boss-name {
          font-size: 14px;
          font-weight: bold;
          color: #f0f6f7;
          font-family: monospace;
          letter-spacing: 1px;
          margin: 0;
        }

        .boss-subtitle {
          font-size: 10px;
          color: #89aec8;
          font-family: monospace;
          margin: 0 0 8px 0;
        }

        .boss-description {
          font-size: 11px;
          color: #89aec8;
          font-family: monospace;
          line-height: 1.3;
          margin: 0 0 8px 0;
          flex: 1;
        }

        .boss-one-liner {
          font-size: 10px;
          color: #f0f6f7;
          font-family: monospace;
          font-style: italic;
          margin: 8px 0;
          border-left: 2px solid #f0a000;
          padding-left: 8px;
        }

        .boss-select-btn {
          background: #002c55;
          border: 2px solid #f0a000;
          color: #f0f6f7;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: bold;
          font-family: monospace;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: block;
          text-align: center;
        }

        .boss-select-btn:hover {
          background: #f0a000;
          color: #002c55;
          box-shadow: 0 0 8px rgba(240, 160, 0, 0.5);
        }

        .boss-select-btn:active {
          transform: inset;
        }
      `}
    </style>

    <Link href={`/skills/${slug}`} className="boss-card">
      <div className="boss-avatar">👔</div>

      <div>
        <h3 className="boss-name">{locale === 'en' ? nameEn : nameCn}</h3>
        <p className="boss-subtitle">{locale === 'cn' ? nameCn : nameEn}</p>
        <p className="boss-description">
          {locale === 'en' ? description : descriptionCn || description}
        </p>
        <p className="boss-one-liner">
          "{locale === 'en' ? oneLiner : oneLineCn || oneLiner}"
        </p>
      </div>

      <AnnoyanceBar level={annoyanceLevel} />

      <div className="boss-select-btn">► SELECT ◄</div>
    </Link>
    </>
  );
}
