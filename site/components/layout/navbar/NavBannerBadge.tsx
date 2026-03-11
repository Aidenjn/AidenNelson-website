'use client';
import FrilledCircle from '@/components/shared/FrilledCircle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBannerBadge({
  title = 'Aiden Nelson',
  titleLink = '/',
}: {
  title: string;
  titleLink: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === titleLink;

  return (
    <div className="spin-group sm:mx-38 md:mx-45 lg:mx-55">
      <div
        className="
          absolute
          border-6
          border-main-accent
          bg-main-accent
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
        <div className="border-6 border-background rounded-sm bg-background">
          <div className="border-7 border-foreground rounded-sm p-4 bg-background">
            <Link
              href={titleLink}
              className={`${isActive ? 'decoration-focus_text_color decoration-6 underline-offset-5' : 'no-underline'}`}
            >
              {title}
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-98 sm:pb-3">
        <div className="spinner">
          <FrilledCircle colorClass="bg-main-accent" size={171}>
            <FrilledCircle colorClass="bg-background" size={160}>
              <FrilledCircle colorClass="bg-secondary-accent">{''}</FrilledCircle>
            </FrilledCircle>
          </FrilledCircle>
        </div>
      </div>
    </div>
  );
}
