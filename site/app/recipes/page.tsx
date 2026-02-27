import PageHeading from '@/components/shared/PageHeading';
import RecipeSearchBar from '@/components/views/recipePageView/RecipeSearchBar';
import RecipeBookLink from '@/components/views/recipePageView/RecipeBookLink';
import { FaScroll } from 'react-icons/fa';
import { client } from '@/lib/sanity';

const recipesQuery = `
  *[_type == "recipe"] {
    _id,
    title,
    slug,
    ingredients[]{
      ingredient,
      quantity,
      unit
    },
    tags[]->{
      _id,
      slug
    }
  } | order(title asc)
`;

type Ingredient = {
  ingredient: string;
  quantity?: number;
  unit?: string;
};

type Tag = {
  _id: string;
  slug: { current: string };
};

type RecipeSearchItem = {
  _id: string;
  title: string;
  slug: { current: string };
  ingredients?: Ingredient[];
  tags?: Tag[];
};

export default async function RecipesPage() {
  const recipes: RecipeSearchItem[] = (await client.fetch(recipesQuery)) || [];

  return (
    <div>
      <PageHeading
        titleText="Cook Book"
        descriptionText="Welcome to my cook book! Here I store recipes of meals I have eaten and want to eat again."
      ></PageHeading>
      <div className="mt-4 mb-4 text-foreground max-w-2xl mx-auto">
        <div className="flex w-full gap-4 mb-6">
          <RecipeBookLink path="recipes/list">
            <span>
              <FaScroll className="inline mr-4 text-2xl" />
              {'See All Recipes'}
            </span>
          </RecipeBookLink>
        </div>
        <div className="flex w-full justify-center">
          <RecipeSearchBar recipes={recipes} />
        </div>
      </div>
    </div>
  );
}
