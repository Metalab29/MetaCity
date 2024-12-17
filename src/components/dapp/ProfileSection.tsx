import React from 'react';
import { Camera, Trophy } from 'lucide-react';

const ProfileSection = () => {
  const mockBadges = [
    { id: '1', name: 'Early Adopter', icon: '🌟' },
    { id: '2', name: 'Power Trader', icon: '💪' },
    { id: '3', name: 'Community Leader', icon: '👑' },
  ];

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl" />
        <div className="absolute -bottom-16 left-8 bg-black p-1 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
            alt="Profile"
            className="w-32 h-32 rounded-full"
          />
          <button className="absolute bottom-2 right-2 bg-purple-600 p-2 rounded-full">
            <Camera size={16} />
          </button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-xl p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
            <Trophy size={20} className="text-purple-400" />
            Achievements
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {mockBadges.map((badge) => (
              <div key={badge.id} className="bg-white/5 rounded-lg p-4 text-center">
                <span className="text-2xl">{badge.icon}</span>
                <p className="mt-2 text-sm">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Activity Feed</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 text-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <p className="text-gray-400">
                  Purchased Virtual Land in Decentraland
                  <span className="block text-xs">2 hours ago</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;