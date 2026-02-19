import { client } from '@/lib/sanity';
import RecipeGrid from '@/components/shared/RecipeGrid';

export default async function GalleryPage() {
  const recipes = await client.fetch(`*[_type == "recipe"]`);
  console.log(recipes);

  return (
    <div>
      <RecipeGrid projects={recipes} />
    </div>
  );
}
