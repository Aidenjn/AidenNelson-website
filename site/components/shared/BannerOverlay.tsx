'use client';

const BannerOverlay = ({ title }: { title: string }) => (
  <div className="px-4.5 py-5 w-full flex align-middle justify-around">
    <div
      className="
      w-full
      h-full
      border-6
      border-secondary-accent
      bg-secondary-accent
      z-30
      text-center
      text-lg
      text-foreground
      rounded-sm
      -mt-34
    "
    >
      <div className="border-6 border-background rounded-sm bg-background">
        <div className="border-7 border-foreground rounded-sm p-4 bg-background text-md nav-link-in-content">
          {title}
        </div>
      </div>
    </div>
  </div>
);

export default BannerOverlay;
