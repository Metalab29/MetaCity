import React from 'react';
import { Wallet } from 'lucide-react';

const shortenAddress = (address: string): string => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

interface WalletButtonProps {
  address: string | null;
  isConnecting: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function WalletButton({ 
  address, 
  isConnecting, 
  onConnect, 
  onDisconnect 
}: WalletButtonProps) {
  if (isConnecting) {
    return (
      <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg opacity-75 cursor-wait">
        <span>Connecting...</span>
      </button>
    );
  }

  if (address) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-green-100">{shortenAddress(address)}</span>
        <button 
          onClick={onDisconnect}
          className="text-green-400 hover:text-green-300 transition-colors"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={onConnect}
      className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
    >
      <Wallet className="h-5 w-5" />
      <span>Connect Wallet</span>
    </button>
  );
}