'use client';

import { useState, useMemo } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Fuse, { FuseResult, IFuseOptions } from 'fuse.js';

type GenericSearchBarProps<T> = {
  items: T[];
  fuseOptions: IFuseOptions<T>;
  placeholder?: string;
  noResultsMessage?: (query: string) => string;
  renderResult: (result: FuseResult<T>, onClick: () => void) => React.ReactNode;
  getItemId: (item: T) => string;
};

export function GenericSearchBar<T>({
  items,
  fuseOptions,
  placeholder = 'Search...',
  noResultsMessage = (q) => `No results found matching "${q}"`,
  renderResult,
  getItemId,
}: GenericSearchBarProps<T>) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FuseResult<T>[]>([]);
  const [showResults, setShowResults] = useState(false);

  const fuse = useMemo(() => {
    return new Fuse(items, {
      includeScore: true,
      threshold: 0.4,
      ...fuseOptions,
    });
  }, [items, fuseOptions]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);

    if (searchQuery.trim() === '') {
      setResults([]);
      setShowResults(false);
      return;
    }

    setResults(fuse.search(searchQuery));
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
    <div className="relative w-full px-4 sm:px-0">
      <div className="flex gap-2 sm:gap-4 w-full items-center">
        <FaSearch className="text-2xl sm:text-3xl flex-shrink-0" />
        <div className="flex gap-2 flex-1 min-w-0">
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={placeholder}
            className="text-background_text_color border-4 border-foreground rounded-sm p-2 flex-1 min-w-0 focus:outline-none ring-secondary-accent focus:ring-1 focus:border-2 focus:border-secondary-accent transition-all duration-200"
          />
          <button
            type="button"
            onClick={handleCancel}
            className={`flex items-center ring-1 ring-foreground justify-center h-10 sm:h-12 border-4 border-foreground bg-foreground hover:bg-secondary-accent hover:ring-secondary-accent hover:border-secondary-accent text-background rounded-sm transition-all duration-200 overflow-hidden flex-shrink-0 ${
              showResults ? 'w-10 sm:w-12 opacity-100' : 'w-0 opacity-0'
            }`}
            aria-label="Cancel search"
          >
            <FaTimes className="text-lg sm:text-xl flex-shrink-0" />
          </button>
        </div>
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute top-full left-4 right-4 sm:left-0 sm:right-0 mt-2 bg-white border-2 border-foreground rounded-sm shadow-lg max-h-80 overflow-y-auto z-50">
          {results.map((result) => (
            <div key={getItemId(result.item)}>{renderResult(result, handleResultClick)}</div>
          ))}
        </div>
      )}

      {showResults && query.trim() !== '' && results.length === 0 && (
        <div className="absolute top-full left-4 right-4 sm:left-0 sm:right-0 mt-2 bg-white border-2 border-foreground rounded-sm shadow-lg p-4 z-50">
          <p className="text-gray-500 text-center">{noResultsMessage(query)}</p>
        </div>
      )}
    </div>
  );
}
