import { RecipeStep } from '@/lib/types/SanityTypes';
import FancyCheckBox from '@/components/shared/FancyCheckBox';
import { PortableText } from '@portabletext/react';
import FancyNumber from './FancyNumber';
import { urlFor } from '@/lib/sanity';

export default function PreparationListItem({
  step,
  num,
  cookMode,
}: {
  step: RecipeStep,
  num: number,
  cookMode: boolean,
}) {
  const imageUrl: string | undefined = step.image ? urlFor(step.image).width(800).height(600).url() : undefined;

  return (
    <li>
      <div className="flex w-full">
        <div className='w-5 text-center mr-2'>
          { cookMode && <FancyCheckBox/> }
          { !cookMode && <FancyNumber num={num + 1}/> }
        </div>
        <div>
          <PortableText value={step.instruction}/>
          { step.image &&
            <image
              href={imageUrl}
              width="100%"
              height="100%"
            />
          }
          {step.note && <PortableText value={step.note}/>}
        </div>
      </div>
    </li>
  )
}