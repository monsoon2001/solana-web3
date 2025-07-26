import { useState, useEffect } from "react";
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

export default function SendSolanaTransaction() {
  const { address } = useAppKitAccount();
  const { connection } = useAppKitConnection();
  const { walletProvider } = useAppKitProvider<Provider>("solana");
  const [isSending, setIsSending] = useState(false);
  const [txSignature, setTxSignature] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [isLoadingBalance, setIsLoadingBalance] = useState(false);

  // Fixed values
  const RECEIVING_ADDRESS = "CHuw4XJSxpZnhQAFd3Vke5VDpkJoZCd4s3fc7BGDvsN7";
  const SOL_AMOUNT = 0.0001; // 0.05 SOL

  // Fetch balance when wallet connects or changes
  useEffect(() => {
    const fetchBalance = async () => {
      if (!walletProvider?.publicKey || !connection) {
        setBalance(null);
        return;
      }

      setIsLoadingBalance(true);
      try {
        const balance = await connection.getBalance(walletProvider.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL); // Convert lamports to SOL
      } catch (err) {
        console.error("Failed to fetch balance:", err);
        setError("Failed to load balance");
      } finally {
        setIsLoadingBalance(false);
      }
    };

    fetchBalance();
  }, [walletProvider?.publicKey, connection]);

  async function sendSol() {
    if (
      !walletProvider ||
      !connection ||
      !address ||
      !walletProvider.publicKey
    ) {
      throw new Error("Wallet not properly connected");
    }

    if (balance === null || balance < SOL_AMOUNT) {
      throw new Error(`Insufficient balance. Need at least ${SOL_AMOUNT} SOL`);
    }

    setIsSending(true);
    setError(null);

    try {
      const transferIx = SystemProgram.transfer({
        fromPubkey: walletProvider.publicKey,
        toPubkey: new PublicKey(RECEIVING_ADDRESS),
        lamports: SOL_AMOUNT * LAMPORTS_PER_SOL,
      });

      const tx = new Transaction().add(transferIx);
      tx.feePayer = walletProvider.publicKey;
      tx.recentBlockhash = (
        await connection.getLatestBlockhash("confirmed")
      ).blockhash;

      const signature = await walletProvider.signAndSendTransaction(tx);
      setTxSignature(signature);

      // Refresh balance after successful transaction
      const newBalance = await connection.getBalance(walletProvider.publicKey);
      setBalance(newBalance / LAMPORTS_PER_SOL);

      return signature;
    } catch (err) {
      console.error("Transaction failed:", err);
      setError(err instanceof Error ? err.message : "Transaction failed");
      throw err;
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="send-sol-container p-4 border rounded-lg max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Send SOL Transaction</h2>

      <div className="mb-4 space-y-2">
        <p>
          <span className="font-semibold">Wallet Address:</span>{" "}
          {address
            ? `${address.slice(0, 4)}...${address.slice(-4)}`
            : "Not connected"}
        </p>

        <p>
          <span className="font-semibold">Balance:</span>{" "}
          {isLoadingBalance ? (
            <span className="text-gray-500">Loading...</span>
          ) : balance !== null ? (
            `${balance.toFixed(4)} SOL`
          ) : (
            "-"
          )}
        </p>

        <p>
          <span className="font-semibold">Send To:</span> {RECEIVING_ADDRESS}
        </p>
        <p>
          <span className="font-semibold">Amount:</span> {SOL_AMOUNT} SOL
        </p>
      </div>

      <button
        onClick={sendSol}
        disabled={
          !address ||
          isSending ||
          !walletProvider?.publicKey ||
          (balance !== null && balance < SOL_AMOUNT)
        }
        className={`w-full py-2 px-4 rounded font-medium ${
          !address ||
          isSending ||
          !walletProvider?.publicKey ||
          (balance !== null && balance < SOL_AMOUNT)
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700 text-white"
        }`}
      >
        {isSending ? "Sending..." : "Send 0.0001 SOL"}
      </button>

      {balance !== null && balance < SOL_AMOUNT && (
        <div className="mt-2 text-sm text-red-600">
          Insufficient balance to send {SOL_AMOUNT} SOL
        </div>
      )}

      {error && (
        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      {txSignature && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          Transaction successful!{" "}
          <a
            href={`https://solscan.io/tx/${txSignature}?cluster=devnet`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-600 hover:underline"
          >
            View on Solscan
          </a>
        </div>
      )}
    </div>
  );
}
