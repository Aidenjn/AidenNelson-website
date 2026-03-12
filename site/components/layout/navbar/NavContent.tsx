'use client';

import { usePathname } from 'next/navigation';
import NavItem from './NavItem';
import NavBannerBadge from './NavBannerBadge';

type NavItemInfo = {
  text: string;
  link: string;
};

type NavInfo = {
  centerLink: NavItemInfo;
  leftLink: NavItemInfo;
  rightLink: NavItemInfo;
};

function getNavInfo(pathname: string): NavInfo {
  if (pathname.startsWith('/recipes')) return {
    centerLink: {
      text: `Aiden's Recipes`,
      link: '/recipes',
    },
    leftLink: {
      text: 'Index',
      link: '/recipes/list',
    },
    rightLink: {
      text: 'Categories',
      link: '/recipes/categories',
    },
  };
  if (pathname.startsWith('/blog')) return {
    centerLink: {
      text: `Aiden's Blog`,
      link: '/blog',
    },
    leftLink: {
      text: 'All Posts',
      link: '/recipes/list',
    },
    rightLink: {
      text: 'Categories',
      link: '/recipes/categories',
    },
  };
  // Add more path mappings here

  // Default:
  return {
    centerLink: {
      text: 'Aiden Nelson',
      link: '/',
    },
    leftLink: {
      text: 'Résumé',
      link: '/resume',
    },
    rightLink: {
      text: 'Projects',
      link: '/projects',
    },
  };
}

export default function NavContent() {
  const pathname = usePathname();
  const navInfo: NavInfo = getNavInfo(pathname);

  return (
    <div className="flex justify-center items-center h-20 mx-10 sm:mx-0">
      {/* Left spacer - grows on large screens only */}
      <div className="hidden xl:block xl:flex-[2]" />

      {/* Left nav item */}
      <div className="flex-1 flex justify-center">
        <NavItem name={navInfo.leftLink.text} href={navInfo.leftLink.link} />
      </div>

      {/* Center badge - auto width based on content */}
      <div className="flex-none">
        <NavBannerBadge title={navInfo.centerLink.text} titleLink={navInfo.centerLink.link} />
      </div>

      {/* Right nav item */}
      <div className="flex-1 flex justify-center">
        <NavItem name={navInfo.rightLink.text} href={navInfo.rightLink.link} />
      </div>

      {/* Right spacer - grows on large screens only */}
      <div className="hidden xl:block xl:flex-[2]" />
    </div>
  );
}
