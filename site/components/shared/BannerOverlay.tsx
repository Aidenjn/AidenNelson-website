'use client';

const BannerOverlay = ({ title }: { title: string }) => (
  <div
    className="
    py-2
    w-full
    text-center
    bg-background
    text-sm
    sm:text-base
    lg:text-lg
    "
  >
    {title}
  </div>
);

export default BannerOverlay;
