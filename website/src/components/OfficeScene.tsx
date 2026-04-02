'use client';

export default function OfficeScene() {
  return (
    <div className="w-full flex justify-center py-12 px-4">
      <style>{`
        .office-scene {
          display: inline-block;
          position: relative;
          width: 320px;
          height: 240px;
          background: linear-gradient(180deg, #004e8a 0%, #002c55 100%);
          image-rendering: pixelated;
          border: 4px solid #f0f6f7;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        /* Desk */
        .desk {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          width: 160px;
          height: 60px;
          background: #8B4513;
          border: 3px solid #5a2d0c;
          border-top: 6px solid #a0522d;
        }

        .desk::before {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 10px;
          width: 12px;
          height: 20px;
          background: #654321;
          border: 1px solid #3e2723;
        }

        .desk::after {
          content: '';
          position: absolute;
          bottom: -20px;
          right: 10px;
          width: 12px;
          height: 20px;
          background: #654321;
          border: 1px solid #3e2723;
        }

        /* Desk surface items */
        .desk-lamp {
          position: absolute;
          top: -30px;
          right: 20px;
          width: 12px;
          height: 8px;
          background: #ffd700;
          border-radius: 0;
          box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
        }

        .desk-lamp::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 2px;
          width: 8px;
          height: 8px;
          background: #333;
          border: 1px solid #555;
        }

        .coffee-mug {
          position: absolute;
          top: -20px;
          left: 30px;
          width: 16px;
          height: 16px;
          background: #8b4513;
          border: 2px solid #5a2d0c;
          border-radius: 0;
        }

        .coffee-mug::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 3px;
          width: 6px;
          height: 10px;
          border: 2px solid #5a2d0c;
          border-left: none;
        }

        /* Nameplate */
        .nameplate {
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 12px;
          background: #444;
          border: 2px solid #222;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          color: #ffd700;
          font-weight: bold;
          font-family: monospace;
          letter-spacing: 1px;
        }

        /* Boss character */
        .boss-char {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: 32px;
          height: 48px;
        }

        /* Boss head */
        .boss-head {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: #d4a574;
          border: 2px solid #8b6f47;
        }

        /* Boss eyes - blink animation */
        .boss-eyes {
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 4px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .eye {
          width: 2px;
          height: 2px;
          background: #000;
          animation: blink 3s infinite;
        }

        .eye:last-child {
          animation-delay: 0s;
        }

        @keyframes blink {
          0%, 10%, 15%, 100% {
            opacity: 1;
            height: 2px;
          }
          11%, 14% {
            opacity: 1;
            height: 0px;
          }
        }

        /* Boss suit */
        .boss-suit {
          position: absolute;
          top: 22px;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 22px;
          background: #1a1a1a;
          border: 2px solid #0a0a0a;
        }

        .boss-suit::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 4px;
          background: #c0c0c0;
          border: 1px solid #808080;
        }

        /* Boss arms */
        .boss-arms {
          position: absolute;
          top: 28px;
          left: 2px;
          display: flex;
          gap: 20px;
          width: 28px;
        }

        .arm {
          width: 4px;
          height: 12px;
          background: #d4a574;
          border: 1px solid #8b6f47;
        }

        .arm.typing {
          animation: armType 0.6s ease-in-out infinite;
        }

        @keyframes armType {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        /* Fingers */
        .finger {
          position: absolute;
          width: 2px;
          height: 3px;
          background: #d4a574;
        }

        /* Chair back */
        .chair-back {
          position: absolute;
          bottom: 45px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 30px;
          background: #333;
          border: 2px solid #111;
          border-radius: 0;
        }

        .chair-back::before {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 8px;
          background: #222;
          border: 2px solid #111;
        }

        /* Grid pattern background */
        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 30%;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: 0 0;
        }

        /* Responsive scaling */
        @media (max-width: 640px) {
          .office-scene {
            width: 240px;
            height: 180px;
            transform: scale(0.85);
            transform-origin: center;
          }
        }
      `}</style>

      <div className="office-scene">
        <div className="grid-pattern" />

        {/* Boss Character */}
        <div className="boss-char">
          <div className="boss-head">
            <div className="boss-eyes">
              <div className="eye" />
              <div className="eye" />
            </div>
          </div>
          <div className="boss-suit">
            <div className="boss-suit::before" />
          </div>
          <div className="boss-arms">
            <div className="arm typing" style={{ animationDelay: '0s' }} />
            <div className="arm typing" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>

        {/* Chair behind boss */}
        <div className="chair-back" />

        {/* Desk */}
        <div className="desk">
          <div className="desk-lamp" />
          <div className="coffee-mug" />
          <div className="nameplate">THE BOSS</div>
        </div>
      </div>
    </div>
  );
}
