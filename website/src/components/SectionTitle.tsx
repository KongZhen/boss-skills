interface SectionTitleProps {
  en: string;
  cn: string;
  subtitle?: string;
}

export default function SectionTitle({ en, cn, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <style>{`
        .pixel-divider {
          display: inline-block;
          height: 4px;
          width: 120px;
          background: linear-gradient(to right,
            #89aec8 0%, #89aec8 20%,
            transparent 20%, transparent 40%,
            #89aec8 40%, #89aec8 60%,
            transparent 60%, transparent 80%,
            #89aec8 80%, #89aec8 100%);
          background-size: 100% 100%;
          margin: 16px auto;
          image-rendering: pixelated;
        }
      `}</style>

      <h2
        className="text-4xl font-bold text-frost mb-2"
        style={{ fontFamily: 'monospace', letterSpacing: '2px' }}
      >
        {en}
      </h2>
      <p
        className="text-lg text-slate"
        style={{ fontFamily: 'monospace', letterSpacing: '1px' }}
      >
        {cn}
      </p>

      <div className="pixel-divider" />

      {subtitle && (
        <p className="text-sm text-slate mt-4 italic">{subtitle}</p>
      )}
    </div>
  );
}
