// import WinnerTicker from "./WinnerTicker";

// export default function Header() {
//   return (
//     <header className="header">
//       <div className="header-content">
//         <div className="logo-section">
//           <div className="logo-container">
//             <svg
//               width="40"
//               height="40"
//               viewBox="0 0 32 32"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <defs>
//                 <linearGradient
//                   id="solanaGradient"
//                   x1="0%"
//                   y1="0%"
//                   x2="100%"
//                   y2="100%"
//                 >
//                   <stop offset="0%" style={{ stopColor: "#9945ff" }} />
//                   <stop offset="50%" style={{ stopColor: "#14f195" }} />
//                   <stop offset="100%" style={{ stopColor: "#00ff88" }} />
//                 </linearGradient>
//               </defs>
//               <path
//                 d="M5.5 21.5h19.8c.7 0 1.1-.8.7-1.4L22.7 14c-.2-.3-.5-.5-.8-.5H2.1c-.7 0-1.1.8-.7 1.4L4.7 21c.2.3.5.5.8.5z"
//                 fill="url(#solanaGradient)"
//               />
//               <path
//                 d="M5.5 10.5h19.8c.7 0 1.1-.8.7-1.4L22.7 3c-.2-.3-.5-.5-.8-.5H2.1c-.7 0-1.1.8-.7 1.4L4.7 10c.2.3.5.5.8.5z"
//                 fill="url(#solanaGradient)"
//               />
//               <path
//                 d="M26.5 10.5H6.7c-.7 0-1.1.8-.7 1.4L9.3 18c.2.3.5.5.8.5h19.8c.7 0 1.1-.8.7-1.4L27.3 11c-.2-.3-.5-.5-.8-.5z"
//                 fill="url(#solanaGradient)"
//               />
//             </svg>
//             <h1 className="logo-text hack-text neon-text">SOLANA</h1>
//           </div>
//           <div className="subtitle">
//             <span className="neon-purple">REWARDS PROTOCOL</span>
//           </div>
//         </div>

//         <div className="winners-section">
//           <div className="live-indicator">
//             <div className="pulse-dot"></div>
//             <span>LIVE WINNERS</span>
//           </div>
//           <WinnerTicker />
//         </div>
//       </div>

//       <div className="header-glow"></div>

//       <style>{`
//         .header {
//           position: relative;
//           padding: 20px 0;
//           border-bottom: 1px solid rgba(0, 255, 136, 0.3);
//           backdrop-filter: blur(20px);
//           background: rgba(0, 0, 0, 0.2);
//         }

//         .header-content {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .logo-section {
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }

//         .logo-container {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//         }

//         .logo-text {
//           font-family: "Orbitron", monospace;
//           font-size: 2rem;
//           font-weight: 900;
//           letter-spacing: 3px;
//           margin: 0;
//         }

//         .subtitle {
//           font-family: "Rajdhani", sans-serif;
//           font-size: 0.9rem;
//           font-weight: 600;
//           letter-spacing: 2px;
//           margin-left: 52px;
//         }

//         .winners-section {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-end;
//           gap: 12px;
//         }

//         .live-indicator {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-family: "Orbitron", monospace;
//           font-size: 0.8rem;
//           font-weight: 700;
//           color: #00ff88;
//           text-shadow: 0 0 10px #00ff88;
//         }

//         .pulse-dot {
//           width: 8px;
//           height: 8px;
//           background: #00ff88;
//           border-radius: 50%;
//           animation: pulse 2s infinite;
//           box-shadow: 0 0 10px #00ff88;
//         }

//         .header-glow {
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 50%;
//           height: 2px;
//           background: linear-gradient(90deg, transparent, #00ff88, transparent);
//           animation: glow 3s ease-in-out infinite alternate;
//         }

//         @keyframes pulse {
//           0%,
//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.5;
//             transform: scale(1.2);
//           }
//         }

//         @keyframes glow {
//           0% {
//             opacity: 0.5;
//             width: 30%;
//           }
//           100% {
//             opacity: 1;
//             width: 70%;
//           }
//         }

//         @media (max-width: 768px) {
//           .header-content {
//             flex-direction: column;
//             gap: 20px;
//             text-align: center;
//           }

//           .logo-text {
//             font-size: 1.5rem;
//             letter-spacing: 2px;
//           }

//           .subtitle {
//             margin-left: 0;
//             font-size: 0.8rem;
//           }

//           .winners-section {
//             align-items: center;
//           }
//         }

//         @media (max-width: 480px) {
//           .header-content {
//             padding: 0 15px;
//           }

//           .logo-text {
//             font-size: 1.3rem;
//             letter-spacing: 1px;
//           }

//           .logo-container svg {
//             width: 30px;
//             height: 30px;
//           }

//           .subtitle {
//             font-size: 0.7rem;
//           }
//         }
//       `}</style>
//     </header>
//   );
// }

import WinnerTicker from "./WinnerTicker";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo-container">
            <svg
              width="45"
              height="45"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="solanaGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#9945ff" }} />
                  <stop offset="50%" style={{ stopColor: "#14f195" }} />
                  <stop offset="100%" style={{ stopColor: "#00ff88" }} />
                </linearGradient>
              </defs>
              <path
                d="M5.5 21.5h19.8c.7 0 1.1-.8.7-1.4L22.7 14c-.2-.3-.5-.5-.8-.5H2.1c-.7 0-1.1.8-.7 1.4L4.7 21c.2.3.5.5.8.5z"
                fill="url(#solanaGradient)"
              />
              <path
                d="M5.5 10.5h19.8c.7 0 1.1-.8.7-1.4L22.7 3c-.2-.3-.5-.5-.8-.5H2.1c-.7 0-1.1.8-.7 1.4L4.7 10c.2.3.5.5.8.5z"
                fill="url(#solanaGradient)"
              />
              <path
                d="M26.5 10.5H6.7c-.7 0-1.1.8-.7 1.4L9.3 18c.2.3.5.5.8.5h19.8c.7 0 1.1-.8.7-1.4L27.3 11c-.2-.3-.5-.5-.8-.5z"
                fill="url(#solanaGradient)"
              />
            </svg>
            <h1 className="logo-text hack-text neon-text">SOLANA</h1>
          </div>
          <div className="subtitle">
            <span className="neon-purple">REWARDS PROTOCOL</span>
          </div>
        </div>

        <div className="winners-section">
          <div className="live-indicator">
            <div className="pulse-dot"></div>
            <span>LIVE WINNERS</span>
          </div>
          <WinnerTicker />
        </div>
      </div>

      <div className="header-glow"></div>

      <style>{`
        .header {
          position: relative;
          padding: 20px 0;
          border-bottom: 1px solid rgba(0, 255, 136, 0.3);
          backdrop-filter: blur(20px);
          background: rgba(0, 0, 0, 0.2);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-shrink: 0;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-text {
          font-family: "Orbitron", monospace;
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: 3px;
          margin: 0;
        }

        .subtitle {
          font-family: "Rajdhani", sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 2px;
          margin-left: 52px;
        }

        .winners-section {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          flex-shrink: 0;
          min-width: 0;
        }

        .live-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: "Orbitron", monospace;
          font-size: 0.8rem;
          font-weight: 700;
          color: #00ff88;
          text-shadow: 0 0 10px #00ff88;
          white-space: nowrap;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #00ff88;
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 10px #00ff88;
        }

        .header-glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ff88, transparent);
          animation: glow 3s ease-in-out infinite alternate;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        @keyframes glow {
          0% {
            opacity: 0.5;
            width: 30%;
          }
          100% {
            opacity: 1;
            width: 70%;
          }
        }

        /* Mobile responsive - keep left and right layout */
        @media (max-width: 768px) {
          .header-content {
            padding: 0 15px;
            gap: 10px;
          }

          .logo-section {
            gap: 4px;
          }

          .logo-container {
            gap: 8px;
          }

          .logo-text {
            font-size: 1.4rem;
            letter-spacing: 1px;
          }

          .subtitle {
            margin-left: 30px;
            font-size: 0.7rem;
            letter-spacing: 1px;
          }

          .winners-section {
            gap: 8px;
            align-items: flex-end;
          }

          .live-indicator {
            font-size: 0.7rem;
            gap: 6px;
          }

          .pulse-dot {
            width: 6px;
            height: 6px;
          }
        }

        @media (max-width: 480px) {
          .header-content {
            padding: 0 10px;
            gap: 8px;
          }

          .logo-container {
            gap: 6px;
          }

          .logo-container svg {
            width: 28px;
            height: 28px;
          }

          .logo-text {
            font-size: 1.2rem;
            letter-spacing: 0.5px;
          }

          .subtitle {
            margin-left: 24px;
            font-size: 0.6rem;
            letter-spacing: 0.5px;
          }

          .live-indicator {
            font-size: 0.6rem;
            gap: 4px;
          }

          .pulse-dot {
            width: 5px;
            height: 5px;
          }
        }

        /* Extra small screens */
        @media (max-width: 360px) {
          .logo-text {
            font-size: 1rem;
          }

          .subtitle {
            margin-left: 20px;
            font-size: 0.55rem;
          }

          .live-indicator span {
            display: none;
          }

          .live-indicator {
            justify-content: center;
            width: 20px;
          }
        }
      `}</style>
    </header>
  );
}
