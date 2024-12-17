import { useState, useCallback } from 'react';

interface WalletState {
  address: string | null;
  isConnecting: boolean;
  isConnected: boolean;
  error: string | null;
}

export function useWallet() {
  const [walletState, setWalletState] = useState<WalletState>({
    address: null,
    isConnecting: false,
    isConnected: false,
    error: null,
  });

  const connectWallet = useCallback(async () => {
    setWalletState(prev => ({ ...prev, isConnecting: true, error: null }));
    
    try {
      // Simulated wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockAddress = '0x' + Math.random().toString(16).slice(2, 10);
      
      setWalletState({
        address: mockAddress,
        isConnecting: false,
        isConnected: true,
        error: null,
      });
    } catch (error) {
      setWalletState({
        address: null,
        isConnecting: false,
        isConnected: false,
        error: 'Failed to connect wallet',
      });
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setWalletState({
      address: null,
      isConnecting: false,
      isConnected: false,
      error: null,
    });
  }, []);

  return {
    ...walletState,
    connectWallet,
    disconnectWallet,
  };
}