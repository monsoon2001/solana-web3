// export default function ConnectButton() {
//   return (
//     <div className="connect-button-container">
//       <appkit-button
//         size="md" // valid options: "sm", "md", "lg"
//         label="Connect Wallet"
//         loadingLabel="Connecting..." // optional
//         disabled={false} // optional
//         // balance="show" // optional if you want to show balance
//         // namespace="custom" // optional namespace for styling
//       />
//     </div>
//   );
// }

// // export default function ConnectButton() {
// //   return (
// //     <div className="connect-button-container">
// //       <appkit-button
// //         size="md"
// //         label="Connect Wallet"
// //         loadingLabel="Connecting..."
// //         disabled={false}
// //       />
// //     </div>
// //   );
// // }

// export default function ConnectButton() {
//   return (
//     <div className="connect-button-container">
//       <appkit-button
//         size="md"
//         label="Connect Wallet"
//         loadingLabel="Connecting..."
//         disabled={false}
//       />

//       <style jsx>{`
//         .connect-button-container {
//           display: flex;
//           justify-content: center;
//           margin: 20px 0;
//         }

//         /* Global styles for appkit-button */
//         :global(appkit-button) {
//           --wui-font-family: "Orbitron", monospace !important;
//           --wui-border-radius-s: 8px !important;
//           --wui-border-radius-m: 10px !important;
//           --wui-color-accent-100: #9945ff !important;
//           --wui-color-accent-090: #7a37cc !important;
//           --wui-color-accent-080: #5b2999 !important;
//           --wui-accent-glass-090: rgba(153, 69, 255, 0.9) !important;
//           --wui-accent-glass-080: rgba(153, 69, 255, 0.8) !important;
//           --wui-accent-glass-020: rgba(153, 69, 255, 0.2) !important;
//           --wui-accent-glass-015: rgba(153, 69, 255, 0.15) !important;
//           --wui-accent-glass-010: rgba(153, 69, 255, 0.1) !important;
//           --wui-accent-glass-005: rgba(153, 69, 255, 0.05) !important;
//           --wui-accent-glass-002: rgba(153, 69, 255, 0.02) !important;
//         }

//         :global(appkit-button button) {
//           background: linear-gradient(45deg, #9945ff, #00ff88) !important;
//           border: 2px solid transparent !important;
//           background-clip: padding-box !important;
//           font-family: "Orbitron", monospace !important;
//           font-weight: 700 !important;
//           text-transform: uppercase !important;
//           letter-spacing: 1px !important;
//           transition: all 0.3s ease !important;
//           box-shadow: 0 0 20px rgba(153, 69, 255, 0.3),
//             0 4px 15px rgba(0, 0, 0, 0.2) !important;
//           position: relative !important;
//           overflow: hidden !important;
//         }

//         :global(appkit-button button:hover) {
//           transform: translateY(-2px) !important;
//           box-shadow: 0 0 30px rgba(153, 69, 255, 0.5),
//             0 6px 20px rgba(0, 0, 0, 0.3) !important;
//         }

//         :global(appkit-button button:before) {
//           content: "" !important;
//           position: absolute !important;
//           top: 0 !important;
//           left: -100% !important;
//           width: 100% !important;
//           height: 100% !important;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(255, 255, 255, 0.2),
//             transparent
//           ) !important;
//           transition: left 0.5s !important;
//         }

//         :global(appkit-button button:hover:before) {
//           left: 100% !important;
//         }

//         @media (max-width: 768px) {
//           :global(appkit-button button) {
//             font-size: 0.9rem !important;
//             padding: 10px 20px !important;
//           }
//         }

//         @media (max-width: 480px) {
//           :global(appkit-button button) {
//             font-size: 0.8rem !important;
//             padding: 8px 16px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

export default function ConnectButton() {
  return (
    <div className="connect-button-container">
      <appkit-button
        size="md"
        label="Connect Wallet"
        loadingLabel="Connecting..."
        disabled={false}
      />

      <style>{`
        .connect-button-container {
          display: flex;
          justify-content: center;
          margin: 20px 0;
          position: relative;
        }

        /* Global styles for appkit-button */
        :global(appkit-button) {
          --wui-font-family: "Orbitron", monospace !important;
          --wui-border-radius-s: 12px !important;
          --wui-border-radius-m: 12px !important;
          --wui-color-accent-100: #9945ff !important;
          --wui-color-accent-090: #7a37cc !important;
          --wui-color-accent-080: #5b2999 !important;
          --wui-accent-glass-090: rgba(153, 69, 255, 0.9) !important;
          --wui-accent-glass-080: rgba(153, 69, 255, 0.8) !important;
          --wui-accent-glass-020: rgba(153, 69, 255, 0.2) !important;
          --wui-accent-glass-015: rgba(153, 69, 255, 0.15) !important;
          --wui-accent-glass-010: rgba(153, 69, 255, 0.1) !important;
          --wui-accent-glass-005: rgba(153, 69, 255, 0.05) !important;
          --wui-accent-glass-002: rgba(153, 69, 255, 0.02) !important;
        }

        :global(appkit-button button) {
          background: linear-gradient(
            135deg,
            #9945ff 0%,
            #14f195 25%,
            #00ff88 50%,
            #9945ff 75%,
            #14f195 100%
          ) !important;
          background-size: 300% 300% !important;
          border: 2px solid transparent !important;
          background-clip: padding-box !important;
          font-family: "Orbitron", monospace !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 2px !important;
          padding: 16px 32px !important;
          border-radius: 12px !important;
          transition: all 0.4s ease !important;
          box-shadow: 0 0 30px rgba(153, 69, 255, 0.4),
            0 0 60px rgba(0, 255, 136, 0.2), 0 8px 32px rgba(0, 0, 0, 0.3) !important;
          position: relative !important;
          overflow: hidden !important;
          animation: gradientShift 6s ease-in-out infinite !important;
        }

        :global(appkit-button button:hover) {
          transform: translateY(-4px) scale(1.02) !important;
          box-shadow: 0 0 40px rgba(153, 69, 255, 0.6),
            0 0 80px rgba(0, 255, 136, 0.4), 0 12px 40px rgba(0, 0, 0, 0.4) !important;
          background-position: 100% 0% !important;
        }

        :global(appkit-button button:active) {
          transform: translateY(-2px) scale(1.01) !important;
        }

        :global(appkit-button button:before) {
          content: "" !important;
          position: absolute !important;
          top: 0 !important;
          left: -100% !important;
          width: 100% !important;
          height: 100% !important;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          ) !important;
          transition: left 0.6s ease !important;
        }

        :global(appkit-button button:hover:before) {
          left: 100% !important;
        }

        :global(appkit-button button:after) {
          content: "" !important;
          position: absolute !important;
          top: -2px !important;
          left: -2px !important;
          right: -2px !important;
          bottom: -2px !important;
          background: linear-gradient(
            135deg,
            #9945ff,
            #14f195,
            #00ff88,
            #9945ff
          ) !important;
          background-size: 300% 300% !important;
          border-radius: 12px !important;
          z-index: -1 !important;
          animation: gradientBorder 4s ease-in-out infinite !important;
          opacity: 0.6 !important;
        }

        :global(appkit-button button:hover:after) {
          opacity: 1 !important;
          animation-duration: 2s !important;
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradientBorder {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @media (max-width: 768px) {
          :global(appkit-button button) {
            font-size: 0.9rem !important;
            padding: 14px 28px !important;
            letter-spacing: 1.5px !important;
          }
        }

        @media (max-width: 480px) {
          :global(appkit-button button) {
            font-size: 0.8rem !important;
            padding: 12px 24px !important;
            letter-spacing: 1px !important;
          }
        }
      `}</style>
    </div>
  );
}
