import { Ingredient } from '@/lib/types/SanityTypes';
import AddToGroceryListButton from './AddToGroceryListButton';
import FancyCheckBox from '@/components/shared/FancyCheckBox';
import SlideInAnimationDiv from '@/components/shared/SlideInAnimationDiv';

function numberToPrettyString(num: number): string {
  const wholeNum: number = Math.floor(num);
  const decimalNum: number = num - wholeNum;

  const wholeNumStr: string = wholeNum === 0 ? '' : wholeNum.toString();
  let decimalNumStr: string = decimalNum.toString().slice(1, 4);

  // TODO: Copy more fractions to here.

  if (decimalNumStr === '.1') {
    decimalNumStr = '⅒';
  } else if (decimalNumStr === '.11') {
    decimalNumStr = '⅑';
  } else if (decimalNumStr === '.12') {
    decimalNumStr = '⅛';
  } else if (decimalNumStr === '.14') {
    decimalNumStr = '⅐';
  } else if (decimalNumStr === '.16') {
    decimalNumStr = '⅙';
  } else if (decimalNumStr === '.2') {
    decimalNumStr = '⅕';
  } else if (decimalNumStr === '.25') {
    decimalNumStr = '¼';
  } else if (decimalNumStr === '.33') {
    decimalNumStr = '⅓';
  } else if (decimalNumStr === '.37') {
    decimalNumStr = '⅜';
  } else if (decimalNumStr === '.4') {
    decimalNumStr = '⅖';
  } else if (decimalNumStr === '.5') {
    decimalNumStr = '½';
  } else if (decimalNumStr === '.6') {
    decimalNumStr = '⅗';
  } else if (decimalNumStr === '.62') {
    decimalNumStr = '⅝';
  } else if (decimalNumStr === '.66') {
    decimalNumStr = '⅔';
  } else if (decimalNumStr === '.75') {
    decimalNumStr = '¾';
  } else if (decimalNumStr === '.8') {
    decimalNumStr = '⅘';
  } else if (decimalNumStr === '.83') {
    decimalNumStr = '⅚';
  } else if (decimalNumStr === '.87') {
    decimalNumStr = '⅞';
  }

  if (wholeNumStr !== '') {
    decimalNumStr = ` ${decimalNumStr} `;
  } else {
    decimalNumStr = ` ${decimalNumStr} `;
  }

  return `${wholeNumStr}${decimalNumStr}`;
}

export function getIngredientString(ingredient: Ingredient): string {
  let ingredientString: string = `${numberToPrettyString(ingredient.quantity)}`;
  if (ingredient.unit) ingredientString += `${ingredient.unit} `;
  ingredientString += ingredient.ingredient;
  return ingredientString;
}

export default function IngredientsListItem({
  ingredient,
  cookMode,
}: {
  ingredient: Ingredient;
  cookMode: boolean;
}) {
  return (
    <li className="mb-2">
      <SlideInAnimationDiv>
        <div className="flex w-full">
          <div className="w-5 text-center mr-6">
            {cookMode && <FancyCheckBox />}
            {!cookMode && (
              <AddToGroceryListButton ingredientString={getIngredientString(ingredient)} />
            )}
          </div>
          <div>
            <span className="font-roboto">
              <span className="font-bold">{`${numberToPrettyString(ingredient.quantity)}`}</span>
              {ingredient.unit && <span>{`${ingredient.unit} `}</span>}
              <span>{`${ingredient.ingredient}`}</span>
            </span>
          </div>
        </div>
      </SlideInAnimationDiv>
    </li>
  );
}
