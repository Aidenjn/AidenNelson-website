import { Ingredient } from '@/lib/types/SanityTypes';
import IngredientsListItem from './IngredientsListItem';
import { FaBasketShopping } from 'react-icons/fa6';
import FancyButton from '@/components/shared/FancyButton';

export default function IngredientsList({
  ingredients,
  cookMode,
}: {
  ingredients: Ingredient[],
  cookMode: boolean,
}) {
  return (
    <div className='mb-5'>
      <div className="flex w-full mb-4">
        <FancyButton className='bg-foreground border border-foreground rounded-full px-1 py-1 align-middle'><FaBasketShopping className='text-2xl'/></FancyButton>
        <h2 className='text-lg align-middle'>Ingredients</h2>
      </div>
      <ul className='ml-2'>
        {ingredients.map((ingredient) => (
          <IngredientsListItem ingredient={ingredient} cookMode={cookMode} key={ingredient._key}/>
        ))}
      </ul>
    </div>
  )
}