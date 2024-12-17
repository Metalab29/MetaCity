import React from 'react';
import FooterColumn from './footer/FooterColumn';
import SocialLinks from './footer/SocialLinks';

const Footer = () => {
  const footerSections = {
    about: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'API', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <FooterColumn title="About" links={footerSections.about} />
          <FooterColumn title="Resources" links={footerSections.resources} />
          <FooterColumn title="Legal" links={footerSections.legal} />

          <div>
            <h3 className="text-xl font-bold mb-4">Community</h3>
            <div className="mb-6">
              <SocialLinks />
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-px rounded-lg">
              <div className="bg-black rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Powered by</p>
                <img
                  src="https://hedera.com/logo-capital-hbar-wordmark.svg"
                  alt="Hedera"
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} MetaCity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;