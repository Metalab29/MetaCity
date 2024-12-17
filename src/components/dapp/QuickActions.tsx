import React from 'react';
import { Wallet, ArrowLeftRight, ShoppingCart, BarChart3 } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: Wallet, label: 'Deposit', onClick: () => {} },
    { icon: ArrowLeftRight, label: 'Transfer', onClick: () => {} },
    { icon: ShoppingCart, label: 'Buy', onClick: () => {} },
    { icon: BarChart3, label: 'Analytics', onClick: () => {} },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map(({ icon: Icon, label, onClick }) => (
        <button
          key={label}
          onClick={onClick}
          className="bg-white/5 hover:bg-white/10 rounded-xl p-4 flex flex-col items-center gap-2 transition-all"
        >
          <Icon size={24} className="text-purple-400" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;