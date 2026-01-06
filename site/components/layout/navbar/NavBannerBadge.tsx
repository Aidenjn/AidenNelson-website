'use client';
import FrilledCircle from '@/components/shared/FrilledCircle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBannerBadge() {
  const homepageLink = '/';
  const pathname = usePathname();
  const isActive = pathname === homepageLink;

  return (
    <div className="spin-group">
      <div
        className="
          absolute
          border-6
          border-main-accent
          bg-background
          z-30
          text-center
          text-3xl
          sm:text-2xl
          md:text-3xl
          lg:text-4xl
          text-foreground
          -skew-y-9
          -skew-x-1
          text-nowrap
          rounded-sm
          origin
          -translate-x-1/2
          -translate-y-[34%]
        "
      >
        <div className="border-6 border-background">
          <div className="border-7 border-foreground rounded-6 p-4">
            <Link
              href={homepageLink}
              className={`${isActive ? 'underline decoration-focus_text_color decoration-6 underline-offset-5' : ''}`}
            >
              Aiden Nelson
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-98 sm:pb-3">
        <div className="spinner">
          <FrilledCircle backgroundColor="var(--color-main-accent)" size={171}>
            <FrilledCircle backgroundColor="var(--color-background)" size={160}>
              <FrilledCircle backgroundColor="var(--color-secondary-accent)">{''}</FrilledCircle>
            </FrilledCircle>
          </FrilledCircle>
        </div>
      </div>
    </div>
  );
}
