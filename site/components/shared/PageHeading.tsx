'use client';

import { CustomIcon } from '@/lib/types/CustomIcon';
import CustomIconSVG from './CustomIconSVG';
import { Category } from '@/lib/types/Category';
import CategoryIconLinks from '../views/singleRecipeView/CategoryIconLinks';
import SlideInAnimationDiv from './SlideInAnimationDiv';

export default function PageHeading({
  titleText,
  descriptionText,
  icon,
  categories,
}: {
  titleText: string;
  descriptionText?: string;
  icon?: CustomIcon;
  categories?: Category[];
}) {
  return (
    <div className="max-w-5xl mx-auto px-1 text-center">
      <SlideInAnimationDiv>
        <div className="flex items-center justify-center gap-4 mb-0">
          {icon && (
            <CustomIconSVG icon={icon} className="w-10 h-10 sm:w-15 sm:h-15 stroke-foreground" />
          )}
          <h1 className="text-3xl text-foreground max-w-100 sm:max-w-full font-light">
            {titleText}
          </h1>
        </div>
      </SlideInAnimationDiv>

      {/* Show category icons underneath the title */}
      {categories && (
        <SlideInAnimationDiv>
          <div className="mt-4 mb-2 text-foreground max-w-2xl mx-auto">
            <CategoryIconLinks categories={categories} />
          </div>
        </SlideInAnimationDiv>
      )}

      {/* Show the description if there is one */}
      {descriptionText && (
        <SlideInAnimationDiv>
          <p className="mt-4 mb-2 text-foreground max-w-2xl mx-auto">{descriptionText}</p>
        </SlideInAnimationDiv>
      )}
    </div>
  );
}
