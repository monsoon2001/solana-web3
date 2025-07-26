export default function ConnectButton() {
  return (
    <div className="connect-button-container">
      <appkit-button
        size="md" // valid options: "sm", "md", "lg"
        label="Connect Wallet"
        // loadingLabel="Connecting..."  // optional
        // disabled={false}  // optional
        // balance="show"  // optional if you want to show balance
        // namespace="custom" // optional namespace for styling
      />
    </div>
  );
}
