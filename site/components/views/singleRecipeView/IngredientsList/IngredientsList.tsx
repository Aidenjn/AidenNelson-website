import { Ingredient } from '@/lib/types/SanityTypes';
import IngredientsListItem from './IngredientsListItem';
import { FaBasketShopping } from 'react-icons/fa6';
import FancyButton from '@/components/shared/FancyButton';
import { getIngredientString } from './IngredientsListItem';

function getIngredientStrings(ingredients: Ingredient[]): string[] {
  return ingredients.map((ingredient) => getIngredientString(ingredient));
}

/**
 * Generates an Apple Shortcuts URL scheme href for adding multiple ingredients to a grocery list.
 * Ingredients are joined with newlines so the shortcut can split them.
 *
 * @param ingredients - Array of ingredient strings (e.g., ["4 Large eggs", "2 cups flour"])
 * @param shortcutName - The exact name of the iOS Shortcut to run (default: "Add Multiple To Grocery List")
 * @returns The complete shortcuts:// URL
 */
function generateMultiShortcutsHref(
  ingredients: string[],
  shortcutName: string = 'Add Multiple To Grocery List',
): string {
  // Join ingredients with newline character
  const combinedText = ingredients.join('\n');
  const encodedName = encodeURIComponent(shortcutName);
  const encodedText = encodeURIComponent(combinedText);

  return `shortcuts://run-shortcut?name=${encodedName}&input=text&text=${encodedText}`;
}

export default function IngredientsList({
  ingredients,
  cookMode,
}: {
  ingredients: Ingredient[];
  cookMode: boolean;
}) {
  const addAllIngredientsLink: string = generateMultiShortcutsHref(
    getIngredientStrings(ingredients),
  );
  return (
    <div className="mb-10">
      <div className="flex justify-start w-full mb-4">
        <a href={addAllIngredientsLink}>
          <FancyButton className="bg-foreground hover:text-background hover:bg-secondary-accent hover:cursor-pointer transition border border-foreground rounded-full px-2 py-2 align-middle mr-3 float-left">
            <FaBasketShopping className="text-2xl text-background" />
          </FancyButton>
        </a>
        <h2 className="text-2xl mt-1">Ingredients</h2>
      </div>
      <ul className="ml-2">
        {ingredients.map((ingredient) => (
          <IngredientsListItem ingredient={ingredient} cookMode={cookMode} key={ingredient._key} />
        ))}
      </ul>
    </div>
  );
}
