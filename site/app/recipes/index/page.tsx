import PageHeading from '@/components/shared/PageHeading';
import { client } from '@/lib/sanity';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaUtensils } from 'react-icons/fa';

// GROQ query for recipes
const recipes_query = `
  *[_type == "recipe"] {
    _id,
    title,
    slug,
  } | order(title desc)
`;

type recipeIndexItem = {
  _id: string;
  title: string;
  slug: { current: string };
};

type alphabeticRecipeSection = {
  character: string;
  recipes: recipeIndexItem[];
};

// We assume recipes are already sorted alphabetically.
// This function organizes them into sections by first character.
function organizeRecipes(recipes: recipeIndexItem[]): alphabeticRecipeSection[] {
  const rSections: alphabeticRecipeSection[] = [];
  let currentLetter: string = 'A';

  recipes.forEach((recipe) => {
    const recipeLetter: string = recipe.title === undefined ? recipe.title[0] : currentLetter;
    if (recipeLetter === currentLetter) {
      // If we don't have any sections, or the current section doesn't match to the recipe,
      // Create a new section with that recipe's first letter.
      if (rSections.length === 0 || rSections[rSections.length]?.character !== recipe.title[0]) {
        const newSection: alphabeticRecipeSection = {
          character: recipeLetter,
          recipes: [recipe],
        };
        rSections.push(newSection);
        currentLetter = recipeLetter;
      } else {
        rSections[rSections.length - 1]?.recipes.push(recipe);
      }
    }
  });

  return rSections;
}

export default async function RecipeIndexPage() {
  // const recipes = await client.fetch(`*[_type == "recipe"] | order(title desc)`);
  const recipes: recipeIndexItem[] | undefined = await client.fetch(recipes_query);

  if (!recipes) notFound();

  const recipeSections: alphabeticRecipeSection[] = organizeRecipes(recipes);

  return (
    <div>
      <PageHeading titleText="Recipe Index" />
      <ol>
        {recipeSections.map((recipeSection) => (
          <li key={recipeSection.character}>
            <h2 className="mb-2 border-b-2 border-background w-full">{recipeSection.character}</h2>
            <ol className="mb-4">
              {recipeSection.recipes.map((recipe) => (
                <li key={recipe._id}>
                  <Link href={`/recipes/${recipe.slug.current}`}>
                    <FaUtensils className="inline" />
                    <span>{recipe.title}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
