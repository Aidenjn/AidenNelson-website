import { Ingredient } from '@/lib/types/SanityTypes';
import AddToGroceryListButton from './AddToGroceryListButton';
import FancyCheckBox from '@/components/shared/FancyCheckBox';


function numberToPrettyString(num:number):string {
  const wholeNum:number = Math.floor(num);
  const decimalNum:number = num - wholeNum;

  const wholeNumStr:string = wholeNum === 0 ? '' : wholeNum.toString();
  let decimalNumStr:string = decimalNum.toString().slice(1, 4);

  // TODO: Copy more fractions to here.

  if (decimalNumStr === '.125') {
    decimalNumStr = '⅛';
  } else if (decimalNumStr === '.166') {
    decimalNumStr = '⅙';
  } else if (decimalNumStr === '.2') {
    decimalNumStr = '⅕';
    } else if (decimalNumStr === '.25') {
    decimalNumStr = '¼';
  } else if (decimalNumStr === '.333') {
    decimalNumStr = '⅓';
  } else if (decimalNumStr === '.375') {
    decimalNumStr = '⅜';
  } else if (decimalNumStr === '.4') {
    decimalNumStr = '⅖';
  } else if (decimalNumStr === '.5') {
    decimalNumStr = '½';
  } else if (decimalNumStr === '.666') {
    decimalNumStr = '⅔';
  } else if (decimalNumStr === '.75') {
    decimalNumStr = '¾';
  } else if (decimalNumStr === '.833') {
    decimalNumStr = '⅚';
  } else if (decimalNumStr === '.875') {
    decimalNumStr = '⅞';
  }

  if (wholeNumStr !== '') decimalNumStr = ` ${decimalNumStr}`;

  return `${wholeNumStr}${decimalNumStr}`
}

export default function IngredientsListItem({
  ingredient,
  cookMode,
}: {
  ingredient: Ingredient,
  cookMode: boolean,
}) {
  // Logic
  return (
    <li className='mb-2'>
      { cookMode && <FancyCheckBox/> }
      { !cookMode && <AddToGroceryListButton ingredient={ingredient}/> }
      <span className='font-roboto'>
        <span className='font-bold'>{`${numberToPrettyString(ingredient.quantity)} ${ingredient.unit} `}</span>
        <span>{`${ingredient.ingredient}`}</span>
      </span>
    </li>
  )
}

        