import { Ingredient } from '@/lib/types/SanityTypes';
import AddToGroceryListButton from './AddToGroceryListButton';
import FancyCheckBox from '@/components/shared/FancyCheckBox';


function numberToPrettyString(num:number):string {
  const wholeNum:number = Math.floor(num);
  const decimalNum:number = num - wholeNum;

  const wholeNumStr:string = wholeNum === 0 ? '' : wholeNum.toString();
  let decimalNumStr:string = decimalNum.toString().slice(1, 4);

  // TODO: Copy more fractions to here.

  if (decimalNumStr === '.1') {
    decimalNumStr = '⅒';
  } else if (decimalNumStr === '.111') {
    decimalNumStr = '⅑';
  } else if (decimalNumStr === '.125') {
    decimalNumStr = '⅛';
  } else if (decimalNumStr === '.142') {
    decimalNumStr = '⅐';
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
  } else if (decimalNumStr === '.6') {
    decimalNumStr = '⅗';
  } else if (decimalNumStr === '.625') {
    decimalNumStr = '⅝';
  } else if (decimalNumStr === '.666') {
    decimalNumStr = '⅔';
  } else if (decimalNumStr === '.75') {
    decimalNumStr = '¾';
  } else if (decimalNumStr === '.8') {
    decimalNumStr = '⅘';
  } else if (decimalNumStr === '.833') {
    decimalNumStr = '⅚';
  } else if (decimalNumStr === '.875') {
    decimalNumStr = '⅞';
  }

  if (wholeNumStr !== '') {
    decimalNumStr = ` ${decimalNumStr} `;
  } else {
    decimalNumStr = ` ${decimalNumStr} `;
  }
  
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
      <div className="flex w-full">
        <div className='w-5 text-center mr-4'>
          { cookMode && <FancyCheckBox/> }
          { !cookMode && <AddToGroceryListButton ingredient={ingredient}/> }
        </div>
        <div>
          <span className='font-roboto'>
            <span className='font-bold'>{`${numberToPrettyString(ingredient.quantity)}`}</span>
            {ingredient.unit && <span>{`${ingredient.unit} `}</span>}
            <span>{`${ingredient.ingredient}`}</span>
          </span>
        </div>
      </div>
    </li>
  )
}