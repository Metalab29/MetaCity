import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="text-gray-400 hover:text-white transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;