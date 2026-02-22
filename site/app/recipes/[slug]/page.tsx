import { client } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import Carousel from '@/components/views/singleRecipeView/carousel/Carousel';
import PageHeading from '@/components/shared/PageHeading';
import { Recipe } from '@/lib/types/SanityTypes';
import { getCategoriesFromTags } from '@/lib/utils/categories/getCategoriesFromTags';
import { PortableText } from '@portabletext/react';

// GROQ query for one recipe
const query = `
  *[_type == "recipe" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    slug,
    description,
    images[]{
      ...,
      asset->
    },
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
  // console.log(recipe);

  return (
    <main>
      <PageHeading titleText={recipe.title} categories={getCategoriesFromTags(recipe.tags)} />
      <div className="mt-4 mb-2 text-foreground max-w-2xl mx-auto">
        {/** Description */}
        {recipe.description && <PortableText value={recipe.description} />}

        {/** Showcase images */}
        <div className="mx-auto pt-6 max-w-200">
          <Carousel images={recipe.images} />
        </div>

        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.ingredient}>
              {`${ingredient.quantity} ${ingredient.unit} ${ingredient.ingredient}`}
            </li>
          ))}
        </ul>

        <h2>Preparation</h2>
        <ol>
          {recipe.steps.map((step) => (
            <li key={step._key}>
              <PortableText value={step.instruction} />
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
