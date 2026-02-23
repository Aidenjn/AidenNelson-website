'use client';

import FancyButton from '@/components/shared/FancyButton';
import { FaSearch } from 'react-icons/fa';

export default function RecipeSearchBar() {
  return (
    // <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-lg">
    <form className="flex gap-4 w-full max-w-lg">
      <input
        // value={'Search Recipes...'}
        // onChange={(e) => ()}
        placeholder="Search Recipes..."
        className="text-background_text_color border-2 border-foreground rounded-lg p-2 w-full"
      />
      <FancyButton type="submit">
        <FaSearch className="nav-link-in-content hover:cursor-pointer" />
      </FancyButton>
    </form>
  );
}
