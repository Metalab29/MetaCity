import React from 'react';
import { Bell, Shield, Link, Key } from 'lucide-react';

const SettingsPanel = () => {
  const [notifications, setNotifications] = React.useState({
    email: true,
    push: false,
    trading: true,
  });

  const connectedPlatforms = [
    { id: '1', name: 'Decentraland', connected: true },
    { id: '2', name: 'The Sandbox', connected: false },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white/5 rounded-xl p-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <Bell size={20} className="text-purple-400" />
          Notifications
        </h3>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="capitalize">{key} Notifications</span>
              <button
                onClick={() => setNotifications({ ...notifications, [key]: !value })}
                className={`w-12 h-6 rounded-full transition-colors ${
                  value ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                  value ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <Shield size={20} className="text-purple-400" />
          Security
        </h3>
        <div className="space-y-4">
          <button className="w-full text-left px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">
            Enable 2FA
          </button>
          <button className="w-full text-left px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">
            Change Password
          </button>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <Link size={20} className="text-purple-400" />
          Connected Platforms
        </h3>
        <div className="space-y-4">
          {connectedPlatforms.map((platform) => (
            <div key={platform.id} className="flex items-center justify-between">
              <span>{platform.name}</span>
              <button
                className={`px-4 py-1 rounded-full text-sm ${
                  platform.connected
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-gray-600 text-gray-300'
                }`}
              >
                {platform.connected ? 'Connected' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <Key size={20} className="text-purple-400" />
          API Keys
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-white/10 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Main API Key</span>
              <button className="text-sm text-purple-400">Regenerate</button>
            </div>
            <code className="text-sm text-gray-400">
              ••••••••••••••••
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;