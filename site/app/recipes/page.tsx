import { client } from '@/lib/sanity';
import RecipeGrid from '@/components/shared/RecipeGrid';
import PageHeading from '@/components/shared/PageHeading';

export default async function GalleryPage() {
  const recipes = await client.fetch(`*[_type == "recipe"] | order(title desc)`);

  return (
    <div>
      <PageHeading
        titleText='Cook Book'
        descriptionText='Welcome to my cook book! Here I store the recipes of meals I have eaten and want to eat again. You can browse these recipes by typing something in the search bar below. You can also browse by scrolling lists of recipes for specific categories of food. To view these lists, click on the button displayed below the search bar. Happy cookin’!'
      ></PageHeading>
      <RecipeGrid projects={recipes} />
    </div>
  );
}
