import { Recipe } from '@/lib/types/SanityTypes';
import PageHeading from './PageHeading';
import RecipeCard from './RecipeCard';

export default function RecipeGrid({ projects }: { projects: Recipe[] }) {
  return (
    <div>
      <PageHeading titleText="Recipe Categories" />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8">
        {projects.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
