import { IconType } from 'react-icons';
import {
  FaCookie,
  FaDrumstickBite,
  FaEgg,
  FaSplotch,
  FaSquare,
  FaStroopwafel,
  FaWater,
} from 'react-icons/fa';
import {
  FaBowlFood,
  FaBowlRice,
  FaFishFins,
  FaJar,
  FaPlateWheat,
  FaWheatAwn,
} from 'react-icons/fa6';

const tagToIconMap: Record<string, IconType> = {
  grains: FaWheatAwn,
  sauces: FaJar,
  desserts: FaStroopwafel,
  cookies: FaCookie,
  fish: FaFishFins,
  pasta: FaWater,
  breakfasts: FaEgg,
  curries: FaSplotch,
  casseroles: FaSquare,
  proteins: FaDrumstickBite,
  food: FaBowlFood,
  rice: FaBowlRice,
  'grain-bowls': FaPlateWheat,
};

export function getFAIconFromTag(tag: string): IconType | undefined {
  console.log('tag: ', tag);
  if (!tag) return undefined;
  else return tagToIconMap[tag];
}
