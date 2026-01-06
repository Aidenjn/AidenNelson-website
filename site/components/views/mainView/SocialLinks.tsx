'use client';

import SocialLinkButton from './SocialLinkButton';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialLinks() {
  const links = [
    { href: 'https://www.linkedin.com/in/aiden-nelson/', icon: <FaLinkedin /> },
    { href: 'https://www.github.com/Aidenjn', icon: <FaGithub /> },
    { href: 'mailto:Aidenjn@gmail.com', icon: <FaEnvelope /> },
  ];

  return (
    <div className="relative grid place-items-center h-23 w-full pointer-events-auto">
      <div className="flex flex-col items-center">
        <div className="flex gap-15 mb-1 text-4xl">
          {links.map((link) => (
            <SocialLinkButton href={link.href} icon={link.icon} key={link.href} />
          ))}
        </div>
      </div>
    </div>
  );
}
