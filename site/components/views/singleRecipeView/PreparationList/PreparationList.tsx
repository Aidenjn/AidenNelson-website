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
      <div className="mb-6 ml-2">
        <FaKitchenSet className="inline mr-2 text-4xl" />
        <h2 className="inline text-lg">Preparation</h2>
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
