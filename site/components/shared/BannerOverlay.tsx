'use client';

const BannerOverlay = ({ title }: { title: string }) => (
  <div
    className="
    py-6
    sm:py-2
    w-full
    text-center
    bg-background
    no-underline
    "
  >
    {title}
  </div>
);

export default BannerOverlay;
