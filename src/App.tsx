import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import { useState } from "react";
import Header from "./components/Header/Header";
import ConnectButton from "./components/ConnectButton";
import SpinWheel from "./components/Spinner/SpinWheel";
import SendSolanaTransaction from "./components/SendSolanaTransaction";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";

// Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter();

// Get projectId from https://dashboard.reown.com
const projectId = "8efe1968a773d36d3d540f65860dc3db";

// Create metadata object
const metadata = {
  name: "Solana Rewards Protocol",
  description: "5th Anniversary Solana Giveaway - Spin & Win SOL",
  url: "http://localhost:5173/",
  icons: ["https://free-solana.vercel.app/logo.png"],
};

// Create modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true,
  },
});

export default function App() {
  const [wonAmount, setWonAmount] = useState<number | null>(null);

  const handleWin = (amount: number) => {
    setWonAmount(amount);
  };

  return (
    <div className="app">
      {/* Cyber Grid Background */}
      <div className="cyber-grid"></div>

      {/* Floating Particles - Fixed Container */}
      <div className="particles-container">
        <div className="particles">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hack-text neon-text">SOLANA USERS</span>
              <span className="hero-subtitle neon-purple">
                SPIN & CLAIM REWARDS
              </span>
            </h1>
            <p className="hero-description">
              🎉 Celebrating our{" "}
              <strong className="neon-text">5th Anniversary</strong> 🎉
              <br />
              We're giving away{" "}
              <strong className="neon-purple">FREE SOL</strong> to our amazing
              community!
              <br />
              <span className="hack-text">
                Connect your wallet, spin the wheel, and claim your prize
                instantly!
              </span>
            </p>
          </div>

          <div className="hero-glow"></div>
        </section>

        {/* Connect Wallet Section */}
        <section className="connect-section">
          <div className="section-header">
            <h2 className="section-title hack-text neon-text">
              STEP 1: CONNECT WALLET
            </h2>
            <p className="section-description">
              Connect your Solana wallet to participate in our anniversary
              giveaway
            </p>
          </div>
          <ConnectButton />
        </section>

        {/* Spin Wheel Section */}
        <section className="spin-section">
          <div className="section-header">
            <h2 className="section-title hack-text neon-purple">
              STEP 2: SPIN THE WHEEL
            </h2>
            <p className="section-description">
              Spin our anniversary wheel and win between 0.5 to 10 SOL!
            </p>
          </div>
          <SpinWheel onWin={handleWin} />
        </section>

        {/* Claim Section */}
        <section className="claim-section">
          <div className="section-header">
            <h2 className="section-title hack-text neon-text">
              STEP 3: CLAIM YOUR PRIZE
            </h2>
            <p className="section-description">
              {wonAmount
                ? `Congratulations! You won ${wonAmount} SOL. Click below to claim your prize!`
                : "Spin the wheel first to see your prize amount"}
            </p>
          </div>
          <SendSolanaTransaction wonAmount={wonAmount} />
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number neon-text">50,000+</div>
              <div className="stat-label">SOL Distributed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number neon-purple">25,000+</div>
              <div className="stat-label">Happy Winners</div>
            </div>
            <div className="stat-card">
              <div className="stat-number neon-text">5</div>
              <div className="stat-label">Years Strong</div>
            </div>
            <div className="stat-card">
              <div className="stat-number neon-purple">24/7</div>
              <div className="stat-label">Always Active</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      <style>{`
        .main-content {
          position: relative;
          z-index: 1;
          /* Prevent content from shifting */
          transform: translateZ(0);
        }

        .hero-section {
          position: relative;
          text-align: center;
          padding: 80px 20px;
          background: radial-gradient(
            ellipse at center,
            rgba(153, 69, 255, 0.1) 0%,
            transparent 70%
          );
          /* Stabilize hero section */
          transform: translateZ(0);
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero-title {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }

        .hero-title .hack-text {
          font-family: "Orbitron", monospace;
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: 3px;
          line-height: 1;
        }

        .hero-subtitle {
          font-family: "Rajdhani", sans-serif;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .hero-description {
          font-family: "Rajdhani", sans-serif;
          font-size: 1.2rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 40px;
        }

        .hero-description strong {
          font-weight: 700;
        }

        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(0, 255, 136, 0.08) 0%,
            transparent 70%
          );
          border-radius: 50%;
          /* Gentle, stable glow animation */
          animation: heroGlow 8s ease-in-out infinite alternate;
          pointer-events: none;
          /* Prevent animation from affecting layout */
          will-change: opacity;
          z-index: 1;
        }

        .connect-section,
        .spin-section,
        .claim-section {
          padding: 30px 20px;
          max-width: 1200px;
          margin: 0 auto;
          /* Stabilize sections */
          transform: translateZ(0);
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-title {
          font-family: "Orbitron", monospace;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .section-description {
          font-family: "Rajdhani", sans-serif;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .stats-section {
          padding: 80px 20px;
          background: rgba(0, 0, 0, 0.2);
          border-top: 1px solid rgba(0, 255, 136, 0.3);
          border-bottom: 1px solid rgba(0, 255, 136, 0.3);
          transform: translateZ(0);
          position: relative;
          z-index: 2;
        }

        .stats-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }

        .stat-card {
          text-align: center;
          padding: 30px 20px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(0, 255, 136, 0.2);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          /* Optimize for GPU */
          transform: translateZ(0);
          will-change: transform;
        }

        .stat-card:hover {
          transform: translateY(-5px) translateZ(0);
          border-color: rgba(0, 255, 136, 0.5);
          box-shadow: 0 10px 30px rgba(0, 255, 136, 0.2);
        }

        .stat-card:before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 136, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .stat-card:hover:before {
          left: 100%;
        }

        .stat-number {
          font-family: "Orbitron", monospace;
          font-size: 2.5rem;
          font-weight: 900;
          display: block;
          margin-bottom: 10px;
          line-height: 1;
        }

        .stat-label {
          font-family: "Rajdhani", sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 1px;
        }

        /* Very gentle hero glow animation */
        @keyframes heroGlow {
          0% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(0.98);
          }
          100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.02);
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 60px 20px;
          }

          .hero-title .hack-text {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }

          .hero-subtitle {
            font-size: 1.5rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .section-description {
            font-size: 1rem;
          }

          .connect-section,
          .spin-section,
          .claim-section {
            padding: 40px 15px;
          }

          .stats-section {
            padding: 60px 15px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title .hack-text {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.3rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .section-title {
            font-size: 1.3rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
