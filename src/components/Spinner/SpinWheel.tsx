// import { useState, useRef } from "react";

// interface SpinWheelProps {
//   onWin: (amount: number) => void;
// }

// const PRIZES = [
//   { amount: 0.5, color: "#FF6B6B", angle: 0 },
//   { amount: 1.0, color: "#4ECDC4", angle: 45 },
//   { amount: 2.0, color: "#45B7D1", angle: 90 },
//   { amount: 3.0, color: "#96CEB4", angle: 135 },
//   { amount: 5.0, color: "#FFEAA7", angle: 180 },
//   { amount: 7.5, color: "#DDA0DD", angle: 225 },
//   { amount: 10.0, color: "#98D8C8", angle: 270 },
//   { amount: 1.5, color: "#F7DC6F", angle: 315 },
// ];

// export default function SpinWheel({ onWin }: SpinWheelProps) {
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [rotation, setRotation] = useState(0);
//   const wheelRef = useRef<HTMLDivElement>(null);

//   const spinWheel = () => {
//     if (isSpinning) return;

//     setIsSpinning(true);

//     // Random spin: 5-8 full rotations + random angle
//     const spins = Math.floor(Math.random() * 4) + 5;
//     const randomAngle = Math.floor(Math.random() * 360);
//     const totalRotation = rotation + spins * 360 + randomAngle;

//     setRotation(totalRotation);

//     // Calculate winning prize
//     const normalizedAngle = (360 - (totalRotation % 360)) % 360;
//     const prizeIndex = Math.floor(normalizedAngle / 45);
//     const wonPrize = PRIZES[prizeIndex];

//     setTimeout(() => {
//       setIsSpinning(false);
//       onWin(wonPrize.amount);
//     }, 3000);
//   };

//   return (
//     <div className="spin-wheel-container">
//       <div className="wheel-wrapper">
//         <div className="wheel-pointer"></div>
//         <div
//           ref={wheelRef}
//           className={`wheel ${isSpinning ? "spinning" : ""}`}
//           style={{ transform: `rotate(${rotation}deg)` }}
//         >
//           {PRIZES.map((prize, index) => (
//             <div
//               key={index}
//               className="wheel-segment"
//               style={{
//                 transform: `rotate(${prize.angle}deg)`,
//                 backgroundColor: prize.color,
//               }}
//             >
//               <div className="prize-text">
//                 <span className="prize-amount">{prize.amount}</span>
//                 <span className="prize-currency">SOL</span>
//               </div>
//             </div>
//           ))}

//           <div className="wheel-center">
//             <div className="center-circle">
//               <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
//                 <defs>
//                   <linearGradient
//                     id="centerGradient"
//                     x1="0%"
//                     y1="0%"
//                     x2="100%"
//                     y2="100%"
//                   >
//                     <stop offset="0%" style={{ stopColor: "#9945ff" }} />
//                     <stop offset="100%" style={{ stopColor: "#00ff88" }} />
//                   </linearGradient>
//                 </defs>
//                 <path
//                   d="M5.5 21.5h19.8c.7 0 1.1-.8.7-1.4L22.7 14c-.2-.3-.5-.5-.8-.5H2.1c-.7 0-1.1.8-.7 1.4L4.7 21c.2.3.5.5.8.5z"
//                   fill="url(#centerGradient)"
//                 />
//                 <path
//                   d="M5.5 10.5h19.8c.7 0 1.1-.8.7-1.4L22.7 3c-.2-.3-.5-.5-.8-.5H2.1c-.7 0-1.1.8-.7 1.4L4.7 21c.2.3.5.5.8.5z"
//                   fill="url(#centerGradient)"
//                 />
//                 <path
//                   d="M26.5 10.5H6.7c-.7 0-1.1.8-.7 1.4L9.3 18c.2.3.5.5.8.5h19.8c.7 0 1.1-.8.7-1.4L27.3 11c-.2-.3-.5-.5-.8-.5z"
//                   fill="url(#centerGradient)"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button
//         className={`spin-button cyber-button ${
//           isSpinning ? "spinning-btn" : ""
//         }`}
//         onClick={spinWheel}
//         disabled={isSpinning}
//       >
//         {isSpinning ? "SPINNING..." : "SPIN TO WIN"}
//       </button>

//       <style>{`
//         .spin-wheel-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 30px;
//           margin: 40px 0;
//         }

//         .wheel-wrapper {
//           position: relative;
//           width: 300px;
//           height: 300px;
//         }

//         .wheel-pointer {
//           position: absolute;
//           top: -10px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 0;
//           height: 0;
//           border-left: 15px solid transparent;
//           border-right: 15px solid transparent;
//           border-top: 30px solid #00ff88;
//           z-index: 10;
//           filter: drop-shadow(0 0 10px #00ff88);
//         }

//         .wheel {
//           width: 100%;
//           height: 100%;
//           border-radius: 50%;
//           position: relative;
//           border: 4px solid #00ff88;
//           box-shadow: 0 0 30px rgba(0, 255, 136, 0.5),
//             inset 0 0 30px rgba(0, 0, 0, 0.3);
//           transition: transform 3s cubic-bezier(0.2, 0.8, 0.2, 1);
//           overflow: hidden;
//         }

//         .wheel.spinning {
//           transition: transform 3s cubic-bezier(0.2, 0.8, 0.2, 1);
//         }

//         .wheel-segment {
//           position: absolute;
//           width: 50%;
//           height: 50%;
//           top: 50%;
//           left: 50%;
//           transform-origin: 0 0;
//           clip-path: polygon(0 0, 100% 0, 70.7% 70.7%);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .prize-text {
//           position: absolute;
//           top: 20%;
//           left: 30%;
//           transform: rotate(-22.5deg);
//           text-align: center;
//           font-family: "Orbitron", monospace;
//           font-weight: 700;
//           color: white;
//           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
//         }

//         .prize-amount {
//           display: block;
//           font-size: 1.2rem;
//           line-height: 1;
//         }

//         .prize-currency {
//           display: block;
//           font-size: 0.7rem;
//           opacity: 0.9;
//         }

//         .wheel-center {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 60px;
//           height: 60px;
//           z-index: 5;
//         }

//         .center-circle {
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(45deg, #9945ff, #00ff88);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border: 3px solid white;
//           box-shadow: 0 0 20px rgba(153, 69, 255, 0.6),
//             inset 0 0 10px rgba(0, 0, 0, 0.3);
//         }

//         .spin-button {
//           font-size: 1.1rem;
//           padding: 15px 30px;
//           min-width: 180px;
//           position: relative;
//           overflow: hidden;
//         }

//         .spin-button:before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(255, 255, 255, 0.2),
//             transparent
//           );
//           transition: left 0.5s;
//         }

//         .spin-button:hover:before {
//           left: 100%;
//         }

//         .spinning-btn {
//           animation: buttonPulse 1s infinite;
//         }

//         @keyframes buttonPulse {
//           0%,
//           100% {
//             box-shadow: 0 0 20px rgba(153, 69, 255, 0.3);
//           }
//           50% {
//             box-shadow: 0 0 30px rgba(153, 69, 255, 0.6);
//           }
//         }

//         @media (max-width: 768px) {
//           .wheel-wrapper {
//             width: 250px;
//             height: 250px;
//           }

//           .prize-amount {
//             font-size: 1rem;
//           }

//           .prize-currency {
//             font-size: 0.6rem;
//           }

//           .wheel-center {
//             width: 50px;
//             height: 50px;
//           }

//           .center-circle svg {
//             width: 20px;
//             height: 20px;
//           }
//         }

//         @media (max-width: 480px) {
//           .wheel-wrapper {
//             width: 200px;
//             height: 200px;
//           }

//           .prize-amount {
//             font-size: 0.9rem;
//           }

//           .prize-currency {
//             font-size: 0.5rem;
//           }

//           .spin-button {
//             font-size: 1rem;
//             padding: 12px 24px;
//             min-width: 150px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

import { useState, useRef } from "react";

interface SpinWheelProps {
  onWin: (amount: number) => void;
  winningSegment?: number; // Optional predetermined winner
  isOnlyOnce?: boolean;
}

const PRIZES = [
  { amount: 0.5, color: "#14F195", label: "0.5 SOL", angle: 0 },
  { amount: 1.0, color: "#9945FF", label: "1.0 SOL", angle: 45 },
  { amount: 2.0, color: "#00D4FF", label: "2.0 SOL", angle: 90 },
  { amount: 3.0, color: "#14F195", label: "3.0 SOL", angle: 135 },
  { amount: 5.0, color: "#FF6B35", label: "5.0 SOL", angle: 180 },
  { amount: 7.5, color: "#9945FF", label: "7.5 SOL", angle: 225 },
  { amount: 10.0, color: "#FFD700", label: "10 SOL", angle: 270 },
  { amount: 1.5, color: "#00D4FF", label: "1.5 SOL", angle: 315 },
];

export default function SpinWheel({
  onWin,
  winningSegment,
  isOnlyOnce = false,
}: SpinWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [currentSegment, setCurrentSegment] = useState("");
  const wheelRef = useRef<HTMLDivElement>(null);

  const spinWheel = () => {
    if (isSpinning || (isFinished && isOnlyOnce)) return;

    setIsSpinning(true);
    setIsFinished(false);

    let spins, randomAngle, totalRotation, wonPrize;

    if (winningSegment !== undefined) {
      // Predetermined winner logic from first file
      spins = Math.floor(Math.random() * 4) + 5;
      const targetAngle = PRIZES[winningSegment].angle;
      // Calculate to land on specific segment
      const currentNormalizedAngle = rotation % 360;
      const angleToTarget = (360 - targetAngle + currentNormalizedAngle) % 360;
      totalRotation = rotation + spins * 360 + angleToTarget;
      wonPrize = PRIZES[winningSegment];
    } else {
      // Random spin logic
      spins = Math.floor(Math.random() * 4) + 5;
      randomAngle = Math.floor(Math.random() * 360);
      totalRotation = rotation + spins * 360 + randomAngle;

      // Calculate winning prize
      const normalizedAngle = (360 - (totalRotation % 360)) % 360;
      const prizeIndex = Math.floor(normalizedAngle / 45);
      wonPrize = PRIZES[prizeIndex];
    }

    setRotation(totalRotation);

    // Animation duration matches the CSS transition
    setTimeout(() => {
      setIsSpinning(false);
      setIsFinished(true);
      setCurrentSegment(wonPrize.label);
      onWin(wonPrize.amount);
    }, 3500);
  };

  return (
    <div className="spin-wheel-container">
      {/* Matrix-style background effect */}
      {/* <div className="matrix-bg"></div> */}

      <div className="wheel-wrapper">
        <div className="wheel-pointer"></div>
        <div
          ref={wheelRef}
          className={`wheel ${isSpinning ? "spinning" : ""}`}
          style={{
            transform: `rotate(${rotation}deg)`,
            pointerEvents: isFinished && isOnlyOnce ? "none" : "auto",
          }}
        >
          {PRIZES.map((prize, index) => (
            <div
              key={index}
              className="wheel-segment"
              style={{
                transform: `rotate(${prize.angle}deg)`,
                background: `linear-gradient(135deg, ${prize.color}, ${prize.color}dd)`,
              }}
            >
              <div className="prize-text">
                <span className="prize-amount">{prize.amount}</span>
                <span className="prize-currency">SOL</span>
              </div>
              {/* Cyber grid overlay */}
              <div className="segment-overlay"></div>
            </div>
          ))}

          <div className="wheel-center">
            <div className="center-circle">
              {/* Solana logo-inspired icon */}
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient
                    id="solanaGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#14F195" }} />
                    <stop offset="50%" style={{ stopColor: "#9945FF" }} />
                    <stop offset="100%" style={{ stopColor: "#00D4FF" }} />
                  </linearGradient>
                </defs>
                <path
                  d="M5.5 21.5h19.8c.7 0 1.1-.8.7-1.4L22.7 14c-.2-.3-.5-.5-.8-.5H2.1c-.7 0-1.1.8-.7 1.4L4.7 21c.2.3.5.5.8.5z"
                  fill="url(#solanaGradient)"
                />
                <path
                  d="M5.5 10.5h19.8c.7 0 1.1-.8.7-1.4L22.7 3c-.2-.3-.5-.5-.8-.5H2.1c-.7 0-1.1.8-.7 1.4L4.7 9c.2.3.5.5.8.5z"
                  fill="url(#solanaGradient)"
                />
                <path
                  d="M26.5 10.5H6.7c-.7 0-1.1.8-.7 1.4L9.3 18c.2.3.5.5.8.5h19.8c.7 0 1.1-.8.7-1.4L27.3 11c-.2-.3-.5-.5-.8-.5z"
                  fill="url(#solanaGradient)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <button
        className={`spin-button cyber-button ${
          isSpinning ? "spinning-btn" : ""
        } ${isFinished && isOnlyOnce ? "disabled" : ""}`}
        onClick={spinWheel}
        disabled={isSpinning || (isFinished && isOnlyOnce)}
      >
        <span className="button-text">
          {isSpinning
            ? ">> SPINNING..."
            : isFinished && isOnlyOnce
            ? "COMPLETE"
            : ">> HACK THE WHEEL <<"}
        </span>
        <div className="button-glitch"></div>
      </button>

      {/* Current segment display like in first file */}
      {isSpinning && currentSegment && (
        <div className="current-segment">
          <span className="segment-label">TARGETING: {currentSegment}</span>
        </div>
      )}

      {/* Winner announcement */}
      {isFinished && currentSegment && (
        <div className="winner-announcement">
          <div className="winner-text">
            <span className="winner-label">SUCCESSFULLY HACKED!</span>
            <span className="winner-amount">{currentSegment}</span>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

        .spin-wheel-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          margin: 40px 0;
          position: relative;
          font-family: 'Orbitron', monospace;
          padding: 20px;
        }

        .wheel-wrapper {
          position: relative;
          width: 380px;
          height: 380px;
          filter: drop-shadow(0 0 30px #14F195);
        }

        .wheel-pointer {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 18px solid transparent;
          border-right: 18px solid transparent;
          border-top: 35px solid #14F195;
          z-index: 10;
          filter: drop-shadow(0 0 15px #14F195);
          animation: pointerGlow 2s ease-in-out infinite alternate;
        }

        @keyframes pointerGlow {
          0% { filter: drop-shadow(0 0 15px #14F195); }
          100% { filter: drop-shadow(0 0 25px #14F195); }
        }

        .wheel {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: relative;
          border: 6px solid transparent;
          background: 
            linear-gradient(45deg, #14F195, #9945FF, #00D4FF, #14F195) border-box,
            conic-gradient(from 0deg, #14F195, #9945FF, #00D4FF, #14F195) border-box;
          background-clip: padding-box, border-box;
          box-shadow: 
            0 0 40px rgba(20, 241, 149, 0.4),
            inset 0 0 40px rgba(0, 0, 0, 0.6);
          transition: transform 3.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          overflow: hidden;
        }

        .wheel.spinning {
          transition: transform 3.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          animation: wheelSpin 3.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        @keyframes wheelSpin {
          0% { filter: drop-shadow(0 0 30px #14F195); }
          50% { filter: drop-shadow(0 0 60px #9945FF); }
          100% { filter: drop-shadow(0 0 30px #14F195); }
        }

        .wheel-segment {
          position: absolute;
          width: 50%;
          height: 50%;
          top: 50%;
          left: 50%;
          transform-origin: 0 0;
          clip-path: polygon(0 0, 100% 0, 70.7% 70.7%);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .segment-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
            radial-gradient(circle at 30% 30%, rgba(20, 241, 149, 0.2) 0%, transparent 50%);
          animation: segmentShimmer 3s ease-in-out infinite;
        }

        @keyframes segmentShimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        .prize-text {
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%) rotate(-22.5deg);
          text-align: center;
          font-family: 'Orbitron', monospace;
          font-weight: 900;
          color: #fff;
          text-shadow: 
            0 0 10px currentColor,
            2px 2px 4px rgba(0, 0, 0, 0.8);
          z-index: 2;
          width: auto;
          white-space: nowrap;
        }

        .prize-amount {
          display: block;
          font-size: 2rem !important;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #fff !important;
          font-weight: 900;
        }

        .prize-currency {
          display: block;
          font-size: 1rem !important;
          opacity: 0.9;
          font-family: 'Share Tech Mono', monospace;
          letter-spacing: 1px;
          margin-top: 2px;
          color: #fff !important;
        }

        .wheel-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          z-index: 5;
        }

        .center-circle {
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at center, #14F195, #9945FF, #00D4FF);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid #000;
          box-shadow: 
            0 0 30px rgba(20, 241, 149, 0.6),
            inset 0 0 20px rgba(0, 0, 0, 0.4);
          animation: centerPulse 2s ease-in-out infinite alternate;
        }

        @keyframes centerPulse {
          0% { 
            box-shadow: 
              0 0 30px rgba(20, 241, 149, 0.6),
              inset 0 0 20px rgba(0, 0, 0, 0.4);
          }
          100% { 
            box-shadow: 
              0 0 50px rgba(153, 69, 255, 0.8),
              inset 0 0 20px rgba(0, 0, 0, 0.4);
          }
        }

        .spin-button {
          font-family: 'Orbitron', monospace;
          font-size: 1.2rem;
          font-weight: 700;
          padding: 18px 40px;
          min-width: 250px;
          position: relative;
          background: linear-gradient(45deg, #14F195, #9945FF);
          border: 2px solid #14F195;
          border-radius: 10px;
          color: #000;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 
            0 0 20px rgba(20, 241, 149, 0.3),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .spin-button:hover:not(.disabled) {
          transform: translateY(-2px);
          box-shadow: 
            0 5px 30px rgba(20, 241, 149, 0.5),
            inset 0 0 20px rgba(255, 255, 255, 0.2);
        }

        .spin-button.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: linear-gradient(45deg, #666, #333);
        }

        .button-text {
          position: relative;
          z-index: 2;
        }

        .button-glitch {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.6s;
        }

        .spin-button:hover .button-glitch {
          left: 100%;
        }

        .spinning-btn {
          animation: buttonHack 0.5s infinite;
        }

        @keyframes buttonHack {
          0%, 100% {
            box-shadow: 0 0 20px rgba(153, 69, 255, 0.3);
            transform: translateX(0);
          }
          25% {
            transform: translateX(-2px);
          }
          75% {
            transform: translateX(2px);
          }
        }

        .current-segment {
          font-family: 'Share Tech Mono', monospace;
          color: #14F195;
          font-size: 1.1rem;
          text-align: center;
          animation: textGlow 1s ease-in-out infinite alternate;
        }

        .winner-announcement {
          background: linear-gradient(45deg, rgba(20, 241, 149, 0.1), rgba(153, 69, 255, 0.1));
          border: 2px solid #14F195;
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          animation: winnerGlow 2s ease-in-out infinite alternate;
        }

        .winner-text {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .winner-label {
          font-family: 'Orbitron', monospace;
          color: #14F195;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .winner-amount {
          font-family: 'Share Tech Mono', monospace;
          color: #9945FF;
          font-size: 1.5rem;
          font-weight: 900;
          text-shadow: 0 0 10px currentColor;
        }

        @keyframes textGlow {
          0% { text-shadow: 0 0 10px #14F195; }
          100% { text-shadow: 0 0 20px #14F195, 0 0 30px #14F195; }
        }

        @keyframes winnerGlow {
          0% { 
            box-shadow: 0 0 20px rgba(20, 241, 149, 0.3);
          }
          100% { 
            box-shadow: 0 0 40px rgba(20, 241, 149, 0.6);
          }
        }

          @media (max-width: 768px) {
          .wheel-wrapper {
            width: 350px;
            height: 350px;
          }

          .prize-amount {
            font-size: 0.9rem;
          }

          .prize-currency {
            font-size: 0.6rem;
          }

          .wheel-center {
            width: 60px;
            height: 60px;
          }

          .center-circle svg {
            width: 24px;
            height: 24px;
          }

          .spin-button {
            font-size: 1rem;
            padding: 15px 30px;
            min-width: 200px;
          }
        }

          @media (max-width: 480px) {
          .wheel-wrapper {
            width: 350px;
            height: 350px;
          }

          .prize-amount {
            font-size: 0.1rem;
          }

          .prize-currency {
            font-size: 0.1rem;
          }

          .spin-button {
            font-size: 0.9rem;
            padding: 12px 24px;
            min-width: 180px;
          }

          .spin-wheel-container {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
}
