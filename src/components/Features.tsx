import React from 'react';
import { Repeat, Shield, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300">
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Repeat,
      title: "Cross-Metaverse Trading",
      description: "Exchange digital assets in real-time across multiple virtual worlds with seamless integration."
    },
    {
      icon: Shield,
      title: "NFT Security",
      description: "Hedera-powered verification ensures your digital assets remain secure and authentic."
    },
    {
      icon: Zap,
      title: "Lightning Transfers",
      description: "Experience near-instant cross-platform transfers with minimal fees and maximum efficiency."
    }
  ];

  return (
    <section id="features" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;