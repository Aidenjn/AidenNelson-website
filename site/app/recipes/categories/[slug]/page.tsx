import { client } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import Carousel from '@/components/views/singleArtView/carousel/Carousel';
import PageHeading from '@/components/shared/PageHeading';
import { Recipe } from '@/lib/types/SanityTypes';
import { getCategoriesFromTags } from '@/lib/utils/categories/getCategoriesFromTags';


// GROQ query for one recipe
const query = `
  *[_type == "recipe" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    images[],
    saleStatus,
    etsyUrl,
    tags[]->{
      _id,
      slug,
    }
  }
`;

export default async function ArtPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the Promise
  const { slug } = await params;

  // Now slug is available
  const recipe: Recipe = await client.fetch(query, { slug });

  if (!recipe) notFound();

  return (
    <main>
      <PageHeading
        titleText={recipe.title}
        categories={getCategoriesFromTags(recipe.tags)}
        // Only include descriptionText as a prop if it's defined
        // {...(recipe.description && { descriptionText: recipe.description })}
      />

      <div className="mx-auto pt-6 max-w-200">
        <Carousel images={recipe.images} />

        {/*
        <SaleStatus status={recipe.saleStatus} etsyUrl={recipe.etsyUrl} /> */}
      </div>
    </main>
  );
}
