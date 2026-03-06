import { IconType } from 'react-icons';
import {
  FaBlender,
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
  FaCakeCandles,
  FaFishFins,
  FaGlassWater,
  FaJar,
  FaMartiniGlass,
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
  cake: FaCakeCandles,
  paella: FaBowlRice,
  smoothie: FaBlender,
  beverage: FaGlassWater,
  cocktail: FaMartiniGlass,
};

export function getFAIconFromTag(tag: string): IconType | undefined {
  if (!tag) return undefined;
  return tagToIconMap[tag];
}
