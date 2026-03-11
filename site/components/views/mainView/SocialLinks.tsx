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
    <div className="flex justify-center gap-10 py-4">
      {links.map((link) => (
        <SocialLinkButton href={link.href} icon={link.icon} key={link.href} />
      ))}
    </div>
  );
}
