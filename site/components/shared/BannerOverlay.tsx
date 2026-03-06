'use client';

const BannerOverlay = ({ title }: { title: string }) => (
  <div
    className="
    py-6
    sm:py-2
    w-full
    text-center
    "
  >
    {title}
  </div>
);

export default BannerOverlay;
