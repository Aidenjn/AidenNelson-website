import FrilledCircle from '@/components/shared/FrilledCircle';
import Image from 'next/image';

export default function FacePortrait() {
  const size: number = 205;
  const spacingIncrement: number = 10;
  const shift = size / 2;

  const innerSize = size - spacingIncrement * 3; // 170 — FrilledCircle size
  const imageSize = innerSize * 1.2; // 204 — 20% larger image

  // Calculate offset to center the larger image
  const offset = (imageSize - innerSize) / 2; // 17px

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Frilled circles */}
      <div className="absolute pointer-events-none" style={{ left: shift, top: shift }}>
        <FrilledCircle size={size - spacingIncrement * 2} colorClass="bg-background">
          <FrilledCircle size={innerSize} colorClass="bg-foreground" />
        </FrilledCircle>
      </div>

      {/* Larger image centered on top, overflowing the inner circle */}
      <div
        className="absolute z-30 rounded-full overflow-hidden"
        style={{
          left: (size - innerSize) / 2 - offset, // 15 - 17 = -2px
          top: (size - innerSize) / 2 - offset,
          width: imageSize,
          height: imageSize,
        }}
      >
        <Image
          src="/images/flower_shirt_me.jpeg"
          alt="Portrait of Aiden Nelson."
          fill
          className="object-cover"
          sizes="204px"
          priority
        />
      </div>
    </div>
  );
}
