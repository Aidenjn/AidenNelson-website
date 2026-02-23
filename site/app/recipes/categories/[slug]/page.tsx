import { client, urlFor } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import PageHeading from '@/components/shared/PageHeading';
import { SanityImage } from '@/lib/types/SanityTypes';
import PictureCardGrid, { IPictureCardGrid } from '@/components/shared/PictureCardGrid';

type RecipeCardInfo = {
  _id: string;
  title: string;
  slug: { current: string };
  image: SanityImage;
};

type CategoryTitle = {
  _id: string;
  plural_title: string;
};

// GROQ query for recipes
const recipes_query = `
  *[_type == "recipe" && $slug in tags[]->slug.current] {
    _id,
    title,
    slug,
    image,
  }
`;
const category_title_query = `*[_type == "tag" && slug.current == $slug][0] {
  _id,
  plural_title,
}`;

export default async function RecipeCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Unwrap the Promise
  const { slug } = await params;

  // Now slug is available. Make queries using it.
  const categoryTitle: CategoryTitle = await client.fetch(category_title_query, { slug });
  const recipes: RecipeCardInfo[] | undefined = await client.fetch(recipes_query, { slug });

  if (!recipes || !categoryTitle) notFound();

  const args: IPictureCardGrid = {
    cardInfos: recipes.map((recipe) => {
      const imageUrl: string | undefined = recipe.image
        ? urlFor(recipe.image).width(350).height(350).url()
        : undefined;
      return {
        key: recipe._id,
        cardArgs: {
          text: recipe.title,
          link: `/recipes/${recipe.slug.current}`,
          image: imageUrl,
        },
      };
    }),
  };

  return (
    <div>
      <PageHeading titleText={categoryTitle.plural_title} />
      <PictureCardGrid args={args} />
    </div>
  );
}
