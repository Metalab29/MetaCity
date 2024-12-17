import React, { createContext, useContext, useState } from 'react';

interface WalletContextType {
  address: string | null;
  connect: () => void;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType>({
  address: null,
  connect: () => {},
  disconnect: () => {},
});

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [address, setAddress] = useState<string | null>(null);

  const connect = () => {
    // Simulated wallet connection
    setAddress('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
  };

  const disconnect = () => {
    setAddress(null);
  };

  return (
    <WalletContext.Provider value={{ address, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);