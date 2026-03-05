'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavItemProps {
  name: string;
  href: string;
}

export default function NavItem({ name, href }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className="text-center">
      <Link
        href={href}
        className={`px-2 py-1 font-medium transition-colors
          ${isActive ? 'nav-link nav-focus' : 'nav-link'}
        `}
      >
        {name}
      </Link>
    </div>
  );
}
