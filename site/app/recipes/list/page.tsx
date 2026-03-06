import PageHeading from '@/components/shared/PageHeading';
import { client } from '@/lib/sanity';
import { getFAIconFromTag } from '@/lib/utils/getFAIconFromTag';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { IconType } from 'react-icons';

// GROQ query for recipes
const recipes_query = `
  *[_type == "recipe"] {
    _id,
    title,
    slug,
    tags[0]->{
      _id,
      slug
    },
  } | order(title asc)
`;

type recipeIndexItem = {
  _id: string;
  title: string;
  slug: { current: string };
  tags: { slug: { current: string } };
};

type alphabeticRecipeSection = {
  character: string;
  recipes: recipeIndexItem[];
};

function organizeRecipes(recipes: recipeIndexItem[]): alphabeticRecipeSection[] {
  const rSections: alphabeticRecipeSection[] = [];
  let currentLetter: string = 'A';

  recipes.forEach((recipe) => {
    const recipeLetter: string = (recipe.title === undefined ? currentLetter : recipe.title[0])!;

    if (rSections.length === 0 || currentLetter !== recipeLetter) {
      const newSection: alphabeticRecipeSection = {
        character: recipeLetter,
        recipes: [recipe],
      };
      rSections.push(newSection);
      currentLetter = recipeLetter;
    } else {
      rSections[rSections.length - 1]?.recipes.push(recipe);
    }
  });

  return rSections;
}

function renderIcon(tag: undefined | string) {
  console.log('got ', tag);
  const FontAwesomeIcon: IconType = (tag ? getFAIconFromTag(tag) : getFAIconFromTag('food'))!;
  return <FontAwesomeIcon className="mt-1 flex-shrink-0" />;
}

export default async function RecipeIndexPage() {
  const recipes: recipeIndexItem[] | undefined = await client.fetch(recipes_query);

  console.log(recipes);

  if (!recipes) notFound();

  const recipeSections: alphabeticRecipeSection[] = organizeRecipes(recipes);

  return (
    <div>
      <PageHeading titleText="Recipe List" />

      <div className="mt-4 mb-4 text-foreground max-w-2xl mx-auto">
        <ol className="mt-4 w-full">
          {recipeSections.map((recipeSection) => (
            <li key={recipeSection.character} className="mb-5">
              <h2 className="mb-2 border-b-2 border-background w-full text-main-accent text-4xl">
                {recipeSection.character}
              </h2>

              <ol className="mb-4 ml-2">
                {recipeSection.recipes.map((recipe) => (
                  <li key={recipe._id}>
                    <Link
                      href={`/recipes/${recipe.slug.current}`}
                      className="nav-link-in-content text-foreground"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        {renderIcon(recipe.tags?.slug?.current)}
                        <span>{recipe.title}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
