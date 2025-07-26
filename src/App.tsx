// 8efe1968a773d36d3d540f65860dc3db
// App.tsx
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import ConnectButton from "./ConnectButton";
import SendSolanaTransaction from "./SendSolanaTransaction";

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter();

// 1. Get projectId from https://dashboard.reown.com
const projectId = "8efe1968a773d36d3d540f65860dc3db"; // Replace with your actual project ID

// 2. Create a metadata object - optional
const metadata = {
  name: "AppKit Solana Example",
  description: "Example application using AppKit with Solana",
  url: "window.location.origin", // ⚠️ Replace with your current ngrok URL
  icons: ["https://avatars.githubusercontent.com/u/179229932"], // Must be HTTPS
};
// 3. Create modal
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
  return (
    <div className="app">
      <h1>My Solana App</h1>
      <ConnectButton />
      <SendSolanaTransaction />
    </div>
  );
}
