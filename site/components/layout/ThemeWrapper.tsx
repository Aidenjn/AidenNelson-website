'use client';

import { usePathname } from 'next/navigation';

export default function ThemeWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const themeClass = (() => {
    if (pathname === '/') return 'theme-professional';
    if (pathname.startsWith('/recipes')) return 'theme-cookbook';
    // Add more path mappings here
    return 'theme-professional';
  })();

  return (
    <div
      className={`
      w-full
      h-full
      ${themeClass}
      bg-background
      text-foreground
    `}
    >
      {children}
    </div>
  );
}
