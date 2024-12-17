import React, { useState } from 'react';
import { useWallet } from '../hooks/UseWallet';
import DashboardChart from '../components/dapp/DashboardChart';
import TransactionTable from '../components/dapp/TransactionTable';
import QuickActions from '../components/dapp/QuickActions';
import AssetCard from '../components/dapp/AssetCard';
import TransferWizard from '../components/dapp/TransferWizard';
import ProfileSection from '../components/dapp/ProfileSection';
import SettingsPanel from '../components/dapp/SettingsPanel';
import { WalletButton } from '../components/wallet/WalletButton';



const mockAssets = [
  {
    id: '1',
    name: 'Virtual Land',
    platform: 'Decentraland',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1',
    popularity: 95,
    description: 'Prime virtual real estate in Decentraland',
  },

  {
    id: '2',
    name: 'Digital Collectibles',
    platform: 'The Sandbox',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1',
    popularity: 96,
    description: 'Digital Collectibles In Sandbox',
  },
  // Add more mock assets...
];

const DApp = () => {
  const { address, isConnecting, connectWallet, disconnectWallet } = useWallet();
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <QuickActions />
            <DashboardChart />
            <TransactionTable />
          </div>
        );
      case 'marketplace':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockAssets.map((asset) => (
              <AssetCard
                key={asset.id}
                asset={asset}
                onClick={() => {}}
              />
            ))}
          </div>
        );
      case 'transfer':
        return <TransferWizard />;
      case 'profile':
        return <ProfileSection />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            MetaCity DApp
          </h1>
          <div className="flex items-center gap-4">
          <WalletButton
                address={address}
                isConnecting={isConnecting}
                onConnect={connectWallet}
                onDisconnect={disconnectWallet}
              />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-24">
        <nav className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {['dashboard', 'marketplace', 'transfer', 'profile', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg capitalize whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-purple-600'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {renderContent()}
      </div>
    </div>
  );
};

export default DApp;