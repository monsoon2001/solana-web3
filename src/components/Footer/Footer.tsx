export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow-top"></div>

      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient
                  id="footerGradient"
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
                fill="url(#footerGradient)"
              />
              <path
                d="M5.5 10.5h19.8c.7 0 1.1-.8.7-1.4L22.7 3c-.2-.3-.5-.5-.8-.5H2.1c-.7 0-1.1.8-.7 1.4L4.7 10c.2.3.5.5.8.5z"
                fill="url(#footerGradient)"
              />
              <path
                d="M26.5 10.5H6.7c-.7 0-1.1.8-.7 1.4L9.3 18c.2.3.5.5.8.5h19.8c.7 0 1.1-.8.7-1.4L27.3 11c-.2-.3-.5-.5-.8-.5z"
                fill="url(#footerGradient)"
              />
            </svg>
            <span className="logo-text neon-text">SOLANA REWARDS</span>
          </div>
          <p className="footer-description">
            Celebrating 5 years of Solana blockchain innovation. Join millions
            of users in the fastest-growing crypto ecosystem.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="section-title neon-purple">ECOSYSTEM</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                DeFi Protocols
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                NFT Marketplace
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Gaming Platform
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Developer Tools
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title neon-purple">COMMUNITY</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Telegram
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Reddit
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title neon-purple">NETWORK STATUS</h3>
          <div className="network-stats">
            <div className="stat-item">
              <span className="stat-label">TPS</span>
              <span className="stat-value neon-text">2,847</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Validators</span>
              <span className="stat-value neon-text">1,893</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Block Time</span>
              <span className="stat-value neon-text">0.4s</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <span className="hack-text">© 2025 SOLANA REWARDS PROTOCOL</span>
            <span className="tagline">FAST • SECURE • DECENTRALIZED</span>
          </div>

          <div className="legal-links">
            <a href="#" className="legal-link">
              Privacy Policy
            </a>
            <a href="#" className="legal-link">
              Terms of Service
            </a>
            <a href="#" className="legal-link">
              Risk Disclosure
            </a>
          </div>
        </div>
      </div>

      <div className="footer-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="footer-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <style>{`
        .footer {
          position: relative;
          background: linear-gradient(
            135deg,
            #0a0a0a 0%,
            #1a0d2e 50%,
            #0f3460 100%
          );
          border-top: 2px solid rgba(0, 255, 136, 0.3);
          margin-top: 60px;
          overflow: hidden;
        }

        .footer-glow-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            #00ff88,
            #9945ff,
            #00ff88,
            transparent
          );
          animation: glowFlow 4s ease-in-out infinite;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 20px 30px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .logo-text {
          font-family: "Orbitron", monospace;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-family: "Rajdhani", sans-serif;
          font-size: 1rem;
          max-width: 300px;
        }

        .section-title {
          font-family: "Orbitron", monospace;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-family: "Rajdhani", sans-serif;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 15px;
        }

        .footer-link:before {
          content: "▶";
          position: absolute;
          left: 0;
          color: #00ff88;
          font-size: 0.7rem;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          color: #00ff88;
          text-shadow: 0 0 10px #00ff88;
          padding-left: 20px;
        }

        .footer-link:hover:before {
          opacity: 1;
        }

        .network-stats {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(0, 255, 136, 0.2);
          border-radius: 6px;
          backdrop-filter: blur(10px);
        }

        .stat-label {
          font-family: "Rajdhani", sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
        }

        .stat-value {
          font-family: "Orbitron", monospace;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(0, 255, 136, 0.2);
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .footer-bottom-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 25px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .copyright .hack-text {
          font-family: "Orbitron", monospace;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .tagline {
          font-family: "Rajdhani", sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 2px;
        }

        .legal-links {
          display: flex;
          gap: 20px;
        }

        .legal-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-family: "Rajdhani", sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .legal-link:hover {
          color: #9945ff;
          text-shadow: 0 0 10px #9945ff;
        }

        .footer-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .footer-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #00ff88;
          border-radius: 50%;
          animation: footerFloat 6s infinite linear;
          opacity: 0.6;
        }

        @keyframes glowFlow {
          0%,
          100% {
            background: linear-gradient(
              90deg,
              transparent,
              #00ff88,
              transparent
            );
          }
          50% {
            background: linear-gradient(
              90deg,
              transparent,
              #9945ff,
              transparent
            );
          }
        }

        @keyframes footerFloat {
          0% {
            transform: translateY(100%) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-20px) translateX(50px);
            opacity: 0;
          }
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 40px 20px 25px;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .legal-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
          }

          .network-stats {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 10px;
          }

          .stat-item {
            flex: 1;
            min-width: 120px;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            padding: 30px 15px 20px;
          }

          .footer-bottom-content {
            padding: 20px 15px;
          }

          .logo-text {
            font-size: 1rem;
          }

          .footer-description {
            font-size: 0.9rem;
          }

          .section-title {
            font-size: 0.9rem;
          }

          .legal-links {
            gap: 10px;
          }

          .legal-link {
            font-size: 0.8rem;
          }

          .copyright .hack-text {
            font-size: 0.8rem;
          }

          .tagline {
            font-size: 0.7rem;
          }

          .network-stats {
            flex-direction: column;
          }

          .stat-item {
            min-width: auto;
          }
        }
      `}</style>
    </footer>
  );
}
