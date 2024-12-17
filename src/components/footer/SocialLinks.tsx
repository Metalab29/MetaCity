import React from 'react';
import { Github, Twitter, MessageCircle, Youtube } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Github, href: '#', label: 'Github' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={label}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;