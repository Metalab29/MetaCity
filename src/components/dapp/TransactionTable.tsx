import React, { useState } from 'react';
import { Transaction } from '../../types';

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'buy',
    asset: 'Virtual Land',
    amount: 1,
    price: 1500,
    platform: 'Decentraland',
    timestamp: new Date('2024-03-15'),
    status: 'completed',
  },
  // Add more mock transactions...
];

const TransactionTable = () => {
  const [filter, setFilter] = useState('all');

  const filteredTransactions = mockTransactions.filter(
    tx => filter === 'all' || tx.type === filter
  );

  return (
    <div className="bg-white/5 rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Transaction History</h3>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white/10 rounded-lg px-3 py-1 text-sm"
        >
          <option value="all">All</option>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
          <option value="transfer">Transfer</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="p-2">Type</th>
              <th className="p-2">Asset</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Price</th>
              <th className="p-2">Platform</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((tx) => (
              <tr key={tx.id} className="border-t border-white/10">
                <td className="p-2">{tx.type}</td>
                <td className="p-2">{tx.asset}</td>
                <td className="p-2">{tx.amount}</td>
                <td className="p-2">${tx.price}</td>
                <td className="p-2">{tx.platform}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    tx.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    tx.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;