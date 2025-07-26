import { useState, useEffect } from "react";

interface Winner {
  id: string;
  name: string;
  amount: number;
}

const RANDOM_NAMES = [
  "CryptoNinja",
  "SolanaKing",
  "BlockchainPro",
  "DefiMaster",
  "TokenHunter",
  "CyberTrader",
  "NeonWallet",
  "QuantumSOL",
  "EtherGhost",
  "ChainReaper",
  "MoonFarmer",
  "DiamondHands",
  "RocketFuel",
  "GalaxyNode",
  "CosmicSOL",
  "TurboTrader",
  "NitroNFT",
  "PlasmaWave",
  "VortexSOL",
  "NebulaCoin",
];

export default function WinnerTicker() {
  const [currentWinner, setCurrentWinner] = useState<Winner | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const generateRandomWinner = (): Winner => {
    const randomName =
      RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
    const randomAmount = Number((Math.random() * 9.5 + 0.5).toFixed(2));

    return {
      id: Math.random().toString(36).substr(2, 9),
      name: randomName,
      amount: randomAmount,
    };
  };

  useEffect(() => {
    // Set initial winner
    setCurrentWinner(generateRandomWinner());

    // Update winner every 3 seconds with fade transition
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      // After fade out completes, change winner and fade in
      setTimeout(() => {
        setCurrentWinner(generateRandomWinner());
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!currentWinner) return null;

  return (
    <div className="winner-ticker">
      <div className={`winner-display ${isVisible ? "visible" : "hidden"}`}>
        <div className="winner-item">
          <span className="winner-name neon-text">{currentWinner.name}</span>
          <span className="winner-amount neon-purple">
            won {currentWinner.amount} SOL
          </span>
        </div>
      </div>

      <style>{`
        .winner-ticker {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          font-family: "Orbitron", monospace;
          font-size: 0.9rem;
          max-width: 250px;
          min-height: 60px;
        }

        .winner-display {
          transition: all 0.3s ease-in-out;
          transform-origin: right center;
        }

        .winner-display.visible {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .winner-display.hidden {
          opacity: 0;
          transform: translateX(20px) scale(0.95);
        }

        .winner-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 10px;
          border: 2px solid rgba(0, 255, 136, 0.4);
          backdrop-filter: blur(15px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          animation: newWinnerPulse 3s ease-out;
        }

        .winner-item:before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 136, 0.2),
            transparent
          );
          animation: shimmer 3s infinite;
        }

        .winner-item:hover {
          transform: translateX(-8px) scale(1.02);
          border-color: rgba(0, 255, 136, 0.8);
          box-shadow: 0 0 25px rgba(0, 255, 136, 0.4);
        }

        .winner-name {
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 4px;
          letter-spacing: 3px;
        }

        .winner-amount {
          font-size: 1rem;
          font-weight: 100;
          letter-spacing: 0px;
        }

        @keyframes newWinnerPulse {
          0% {
            border-color: rgba(153, 69, 255, 0.8);
            box-shadow: 0 0 30px rgba(153, 69, 255, 0.6);
            transform: scale(1.05);
          }
          50% {
            border-color: rgba(0, 255, 136, 0.8);
            box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
            transform: scale(1.02);
          }
          100% {
            border-color: rgba(0, 255, 136, 0.4);
            box-shadow: none;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @media (max-width: 768px) {
          .winner-ticker {
            max-width: 220px;
            font-size: 0.8rem;
            min-height: 55px;
          }

          .winner-item {
            padding: 10px 14px;
          }

          .winner-name {
            font-size: 0.8rem;
          }

          .winner-amount {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          .winner-ticker {
            max-width: 200px;
            font-size: 0.7rem;
            min-height: 50px;
          }

          .winner-item {
            padding: 8px 12px;
          }

          .winner-name {
            font-size: 0.75rem;
          }

          .winner-amount {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
}
