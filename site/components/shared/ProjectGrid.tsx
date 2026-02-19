import { Recipe } from '@/lib/types/SanityTypes';
import PageHeading from './PageHeading';

export default function ProjectGrid({ projects }: { projects: Recipe[] }) {
  return (
    <PageHeading titleText="This page is under construction.  🏗️" />
    // <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8">
    //   {projects.map((artwork) => (
    //     <ArtworkCard key={artwork._id} artwork={artwork} />
    //   ))}
    // </div>
  );
}
