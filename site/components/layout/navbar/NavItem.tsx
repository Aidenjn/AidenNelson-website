'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavItemProps {
  name: string;
  href: string;
  isMobile?: boolean;
}

export default function NavItem({ name, href }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className="relative">
      <Link
        href={href}
        className={`flex items-center gap-2 px-2 py-1 font-medium transition-colors ${
          isActive ? 'nav-link nav-focus' : 'nav-link'
        }`}
      >
        {name}
      </Link>
    </div>
  );
}
