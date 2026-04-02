'use client';

interface AnnoyanceBarProps {
  level: 'mild' | 'moderate' | 'high' | 'soul-crushing';
  label?: string;
}

export default function AnnoyanceBar({ level, label }: AnnoyanceBarProps) {
  const levelMap = {
    mild: { width: 25, color: 'bg-green-500', label: 'Mild' },
    moderate: { width: 50, color: 'bg-yellow-500', label: 'Moderate' },
    high: { width: 75, color: 'bg-orange-500', label: 'High' },
    'soul-crushing': { width: 100, color: 'bg-red-500', label: 'Soul-Crushing' },
  };

  const config = levelMap[level];

  return (
    <div className="w-full">
      <style>{`
        @keyframes fillBar {
          from {
            width: 0;
          }
          to {
            width: ${config.width}%;
          }
        }

        .annoyance-fill {
          animation: fillBar 0.6s ease-out forwards;
          image-rendering: pixelated;
        }

        .bar-container {
          border: 2px solid #f0f6f7;
          background: #1a1a1a;
          padding: 2px;
        }
      `}</style>

      {label && (
        <div className="text-xs text-frost mb-1 font-bold" style={{ fontFamily: 'monospace' }}>
          {label}
        </div>
      )}

      <div className="bar-container h-4 w-full">
        <div
          className={`annoyance-fill h-full ${config.color}`}
          style={{
            width: 0,
            animation: `fillBar 0.6s ease-out forwards`,
          }}
        />
      </div>

      <div className="text-xs text-slate mt-1 text-right" style={{ fontFamily: 'monospace' }}>
        {config.label}
      </div>
    </div>
  );
}
