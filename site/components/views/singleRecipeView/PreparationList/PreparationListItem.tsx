import { RecipeStep } from '@/lib/types/SanityTypes';
import FancyCheckBox from '@/components/shared/FancyCheckBox';
import { PortableText } from '@portabletext/react';
import FancyNumber from './FancyNumber';
import { urlFor } from '@/lib/sanity';
import SlideInAnimationDiv from '@/components/shared/SlideInAnimationDiv';

export default function PreparationListItem({
  step,
  num,
  cookMode,
}: {
  step: RecipeStep;
  num: number;
  cookMode: boolean;
}) {
  const imageUrl: string | undefined = step.image
    ? urlFor(step.image).width(800).height(600).url()
    : undefined;

  return (
    <li className="mb-4">
      <SlideInAnimationDiv>
        <div className="flex w-full mb-6">
          <div className="mr-2 text-right">
            {cookMode && <FancyCheckBox />}
            {!cookMode && <FancyNumber num={num + 1} />}
          </div>
          <div className="">
            <PortableText value={step.instruction} />
            {step.image && <image href={imageUrl} width="100%" height="100%" />}
            {step.note && (
              <div className="italic text-sm mt-1">
                <PortableText value={step.note} />
              </div>
            )}
          </div>
        </div>
      </SlideInAnimationDiv>

      {/* <div className='w-full border-1 border-dotted'/> */}
    </li>
  );
}
