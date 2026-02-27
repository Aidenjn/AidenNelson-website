'use client';

import { useState, useMemo } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Fuse, { FuseResult } from 'fuse.js';
import Link from 'next/link';

type RecipeSearchItem = {
  _id: string;
  title: string;
  slug: { current: string };
};

type RecipeSearchBarProps = {
  recipes: RecipeSearchItem[];
};

export default function RecipeSearchBar({ recipes }: RecipeSearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FuseResult<RecipeSearchItem>[]>([]);
  const [showResults, setShowResults] = useState(false);

  const fuse = useMemo(() => {
    return new Fuse(recipes, {
      includeScore: true,
      threshold: 0.4,
      keys: [
        {
          name: 'title',
          weight: 1,
        },
      ],
    });
  }, [recipes]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);

    if (searchQuery.trim() === '') {
      setResults([]);
      setShowResults(false);
      return;
    }

    const searchResults = fuse.search(searchQuery);
    setResults(searchResults);
    setShowResults(true);
  };

  const handleCancel = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  const handleResultClick = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-lg">
      <div className="flex gap-4 w-full items-center">
        <FaSearch className="text-3xl flex-shrink-0" />
        <div className="flex gap-2 flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Recipes..."
            className="text-background_text_color border-2 border-foreground rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
          />
          <button
            type="button"
            onClick={handleCancel}
            className={`flex items-center justify-center h-12 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-200 overflow-hidden ${
              showResults ? 'w-12 opacity-100' : 'w-0 opacity-0'
            }`}
            aria-label="Cancel search"
          >
            <FaTimes className="text-xl flex-shrink-0" />
          </button>
        </div>
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-foreground rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
          {results.map((result) => (
            <Link
              key={result.item._id}
              href={`/recipes/${result.item.slug.current}`}
              onClick={handleResultClick}
              className="block p-3 hover:bg-gray-100 border-b border-gray-200 last:border-b-0 transition-colors"
            >
              <span className="text-background_text_color font-medium">{result.item.title}</span>
              {result.score && (
                <span className="text-gray-400 text-sm ml-2">
                  ({Math.round((1 - result.score) * 100)}% match)
                </span>
              )}
            </Link>
          ))}
        </div>
      )}

      {showResults && query.trim() !== '' && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-0.5rem bg-white border-2 border-foreground rounded-lg shadow-lg p-4 z-50">
          <p className="text-gray-500 text-center">{`No recipes found matching "${query}"`}</p>
        </div>
      )}
    </div>
  );
}
