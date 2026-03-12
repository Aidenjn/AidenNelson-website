'use client';

import Link from 'next/link';
import WavyBorderImage from '@/components/shared/wavyBorderImage/WavyBorderImage';
import BannerOverlay from '@/components/shared/BannerOverlay';
import { LoadingIconOption } from './wavyBorderImage/WavyBorderImageMask';
import { IconType } from 'react-icons';
import { getFAIconFromTag } from '@/lib/utils/getFAIconFromTag';
import SlideInAnimationDiv from './SlideInAnimationDiv';

export interface IPictureCard {
  text: string;
  link: string;
  image?: string;
  icontag?: string;
}

export default function PictureCard({ args }: { args: IPictureCard }) {
  const associatedFAIcon: undefined | IconType = args.icontag
    ? getFAIconFromTag(args.icontag)
    : undefined;
  const iconArg: LoadingIconOption | undefined = associatedFAIcon
    ? { icontype: 'fontawesome', icon: associatedFAIcon }
    : undefined;

  return (
    <div className="relative w-full bg-background rounded-xl cursor-pointer">
      <SlideInAnimationDiv>
        <Link href={`${args.link}`}>
          <div
            className="
            relative
            w-full
            aspect-square
            text-foreground
            text-2xl
            sm:text-lg
            2xl:text-2xl
            hover:text-hover_text_color
            hover:stroke-hover_text_color
            duration-300 ease-in-out
            no-underline;
          "
          >
            <WavyBorderImage imageUrl={args.image} loadingIcon={iconArg} />
            <BannerOverlay title={args.text} />
          </div>
        </Link>
      </SlideInAnimationDiv>
    </div>
  );
}
