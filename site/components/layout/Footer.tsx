'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

function displayFooter(pathname: string): boolean {
  if (
    pathname.startsWith('/recipes') ||
    pathname.startsWith('/blog')
  ) return true;
  return false;
}

export default function Footer() {
  const pathname = usePathname();
  
  return (
    <footer className="w-full pt-20 z-50">
      {displayFooter(pathname) &&
        <div className="w-full mb-10 text-center">
          <span className="text-main-accent text-sm/8">Built by <Link href='/'>Aiden Nelson</Link></span>
        </div>
      }
    </footer>
  );
}
