'use client';

const BannerOverlay = ({ title }: { title: string }) => (
  <div className="p-5 w-full flex align-middle justify-around">
    <div
      className="
      w-full
      absolute
      border-6
      border-main-accent
      bg-main-accent
      z-30
      text-center
      text-lg
      text-foreground
      rounded-sm
      origin
      -translate-y-[90%]
    "
    >
      <div className="border-6 border-background rounded-sm bg-background">
        <div className="border-7 border-foreground rounded-sm p-4 bg-background text-md">
          {title}
        </div>
      </div>
    </div>
  </div>
);

export default BannerOverlay;
