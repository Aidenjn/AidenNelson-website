import FancyButton from '@/components/shared/FancyButton';
import { Ingredient } from '@/lib/types/SanityTypes';

export default function AddToGroceryListButton({
  ingredient
}:{
  ingredient: Ingredient
}) {
  return (
    <span className='mr-2 font-light'>
      <FancyButton className='bg-foreground border border-foreground rounded-full px-2 py-0'>
        <span className='text-sm'>+</span>
      </FancyButton>
    </span>
  )
}