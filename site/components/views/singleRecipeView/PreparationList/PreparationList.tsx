import { RecipeStep } from '@/lib/types/SanityTypes';
import PreparationListItem from './PreparationListItem';
import { FaKitchenSet } from 'react-icons/fa6';

export default function PreparationList({
  steps,
  cookMode,
}: {
  steps: RecipeStep[];
  cookMode: boolean;
}) {
  return (
    <div className="mb-5">
      <div className="mb-4">
        <FaKitchenSet className="inline ml-1 mr-3 text-4xl mb-2" />
        <h2 className="inline text-2xl">Preparation</h2>
      </div>

      {/* <div className='w-full border-1 border-dotted mb-4'/> */}

      <ol className="ml-2">
        {steps.map((step, index) => (
          <PreparationListItem step={step} num={index} cookMode={cookMode} key={step._key} />
        ))}
      </ol>
    </div>
  );
}
