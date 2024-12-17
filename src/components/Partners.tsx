import React from 'react';

const Partners = () => {
  const partners = [
    'Decentraland', 'The Sandbox', 'Axie Infinity', 'Crypto Voxels',
    'Somnium Space', 'NFT Worlds', 'Metahero', 'Star Atlas'
  ];

  return (
    <section id="partners" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Trusted by Leading Platforms</h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll hover:pause">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 min-w-[200px] bg-white/5 backdrop-blur-sm rounded-lg mx-4 hover:bg-white/10 transition-all"
              >
                <p className="text-white text-center font-semibold">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;