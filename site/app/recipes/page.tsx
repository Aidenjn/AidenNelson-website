import PageHeading from '@/components/shared/PageHeading';
import RecipeSearchBar from '@/components/views/recipePageView/RecipeSearchBar';
import RecipeBookLink from '@/components/views/recipePageView/RecipeBookLink';
import { FaScroll, FaPizzaSlice } from 'react-icons/fa';

export default async function RecipesPage() {
  return (
    <div>
      <PageHeading
        titleText="Cook Book"
        descriptionText="Welcome to my cook book! Here I store recipes of meals I have eaten and want to eat again."
      ></PageHeading>
      <div className="mt-4 mb-4 text-foreground max-w-2xl mx-auto">
        <div className="flex w-full gap-4 mb-6">
          <RecipeBookLink path="/recipes/categories">
            <span>
              <FaPizzaSlice className="inline mr-4 text-2xl" />
              {'Browse by Category'}
            </span>
          </RecipeBookLink>
          <RecipeBookLink path="recipes/index">
            <span>
              <FaScroll className="inline mr-4 text-2xl" />
              {'See Complete Index'}
            </span>
          </RecipeBookLink>
        </div>
        <div className="flex w-full justify-center">
          <RecipeSearchBar />
        </div>
      </div>
    </div>
  );
}
