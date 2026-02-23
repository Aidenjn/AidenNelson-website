import { RecipeStep } from '@/lib/types/SanityTypes';
import PreparationListItem from './PreparationListItem';

export default function PreparationList({
  steps,
  cookMode,
}: {
  steps: RecipeStep[],
  cookMode: boolean,
}) {
  return (
    <div className='mb-5'>
      <h2>Preparation</h2>
      <ol className='ml-2'>
        {steps.map((step, index) => (
          <PreparationListItem step={step} num={index} cookMode={cookMode} key={step._key}/>
        ))}
      </ol>
    </div>
  )
}