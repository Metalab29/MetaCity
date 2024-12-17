import React from 'react';
import { Asset } from '../../types';

interface AssetCardProps {
  asset: Asset;
  onClick: () => void;
}

const AssetCard: React.FC<AssetCardProps> = ({ asset, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer"
    >
      <img
        src={asset.image}
        alt={asset.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="font-semibold mb-2">{asset.name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-purple-400">${asset.price}</span>
        <span className="text-sm text-gray-400">{asset.platform}</span>
      </div>
    </div>
  );
};

export default AssetCard;