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
  tags: { slug: { current: string } };
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
    tags[0]->{
      _id,
      slug
    },
  }
`;
const category_title_query = `*[_type == "recipeTag" && $slug == slug.current][0] {
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
  const categoryTitle: CategoryTitle | undefined = await client.fetch(category_title_query, {
    slug,
  });
  const recipes: RecipeCardInfo[] | undefined = await client.fetch(recipes_query, { slug });

  if (!recipes) notFound();

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
          icontag: recipe.tags.slug.current,
        },
      };
    }),
  };

  return (
    <div>
      {categoryTitle && <PageHeading titleText={categoryTitle.plural_title} />}
      <PictureCardGrid args={args} />
    </div>
  );
}
