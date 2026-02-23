import { client, urlFor } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import Carousel from '@/components/views/singleRecipeView/carousel/Carousel';
import PageHeading from '@/components/shared/PageHeading';
import { Recipe } from '@/lib/types/SanityTypes';
import { getCategoriesFromTags } from '@/lib/utils/categories/getCategoriesFromTags';
import { PortableText } from '@portabletext/react';
import IngredientsList from '@/components/views/singleRecipeView/IngredientsList/IngredientsList';
import PreparationList from '@/components/views/singleRecipeView/PreparationList/PreparationList';

// GROQ query for one recipe
const query = `
  *[_type == "recipe" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    slug,
    description,
    image,
    cookingTime,
    ingredients[]{
      _key,
      _type,
      ingredient,
      quantity,
      unit
    },
    steps[]{
      _key,
      _type,
      instruction,
      note,
      image{
        ...,
        asset->
      }
    },
    source,
    tags[]->{
      _id,
      slug
    },
    dateCreated
  }
`;

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the Promise
  const { slug } = await params;

  // Now slug is available
  const recipe: Recipe = await client.fetch(query, { slug });

  if (!recipe) notFound();

  const cookMode: boolean = false;

  return (
    <main>
      <PageHeading titleText={recipe.title} categories={getCategoriesFromTags(recipe.tags)} />
      <div className="mt-4 mb-2 text-foreground max-w-2xl mx-auto">
        {/** Description */}
        {recipe.description && <PortableText value={recipe.description} />}

        {/** Showcase images */}
        {recipe.image && <div className="mx-auto pt-6 max-w-200">
          <Carousel images={[recipe.image]} />
        </div>}

        {/** Ingredients list */}
        <IngredientsList ingredients={recipe.ingredients} cookMode={cookMode}/>

        {/** Preparation steps list */}
        <PreparationList steps={recipe.steps} cookMode={cookMode}/>
      </div>
    </main>
  );
}
