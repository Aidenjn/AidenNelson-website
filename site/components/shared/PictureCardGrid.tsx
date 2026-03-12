import PictureCard from './PictureCard';
import { IPictureCard } from './PictureCard';

export interface IPictureCardGrid {
  cardInfos: { key: string; cardArgs: IPictureCard }[];
}

export default function PictureCardGrid({ args }: { args: IPictureCardGrid }) {
  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-8">
      {args.cardInfos.map((cardInfo) => (
        <PictureCard args={cardInfo.cardArgs} key={cardInfo.key} />
      ))}
    </div>
  );
}
