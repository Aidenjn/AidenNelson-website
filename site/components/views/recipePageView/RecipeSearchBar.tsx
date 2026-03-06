'use client';

import { FuseResult } from 'fuse.js';
import Link from 'next/link';
import { GenericSearchBar } from '@/components/shared/GenericSearchBar';

type Ingredient = {
  ingredient: string;
  quantity?: number;
  unit?: string;
};

type Tag = {
  _id: string;
  slug: { current: string };
};

type Recipe = {
  _id: string;
  title: string;
  slug: { current: string };
  ingredients?: Ingredient[];
  tags?: Tag[];
};

type RecipeSearchBarProps = {
  recipes: Recipe[];
};

const getMatchContext = (result: FuseResult<Recipe>): string | null => {
  const matches = result.matches || [];
  const nonTitleMatch = matches.find((m) => m.key !== 'title');

  if (!nonTitleMatch?.value) return null;

  const { key, value } = nonTitleMatch;

  if (key === 'ingredients.ingredient') {
    return `Ingredient: ${value}`;
  }
  if (key === 'tags.slug.current') {
    return `Tag: ${value}`;
  }

  return null;
};

export default function RecipeSearchBar({ recipes }: RecipeSearchBarProps) {
  return (
    <GenericSearchBar
      items={recipes}
      fuseOptions={{
        keys: [
          { name: 'title', weight: 1 },
          { name: 'ingredients.ingredient', weight: 0.1 },
          { name: 'tags.slug.current', weight: 0.5 },
        ],
      }}
      placeholder="Search recipes..."
      noResultsMessage={(q) => `No recipes found matching "${q}"`}
      getItemId={(recipe) => recipe._id}
      renderResult={(result, onClick) => {
        const context = getMatchContext(result);

        return (
          <Link
            href={`/recipes/${result.item.slug.current}`}
            onClick={onClick}
            className="block p-3 hover:bg-gray-100 border-b border-gray-200 last:border-b-0 transition-colors"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-medium">{result.item.title}</span>
              {result.score && (
                <span className="text-gray-400 text-xs">
                  {Math.round((1 - result.score) * 100)}%
                </span>
              )}
            </div>
            {context && <p className="text-gray-500 text-sm mt-1">{context}</p>}
          </Link>
        );
      }}
    />
  );
}
