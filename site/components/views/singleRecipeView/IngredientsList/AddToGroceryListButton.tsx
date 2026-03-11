import FancyButton from '@/components/shared/FancyButton';

/**
 * Generates an Apple Shortcuts URL scheme href for adding an ingredient to a grocery list.
 *
 * @param ingredient - The ingredient with quantity (e.g., "4 Large eggs")
 * @param shortcutName - The exact name of the iOS Shortcut to run (default: "Add To Grocery List")
 * @returns The complete shortcuts:// URL
 */
function generateShortcutsHref(
  ingredient: string,
  shortcutName: string = 'Add To Grocery List',
): string {
  const encodedName = encodeURIComponent(shortcutName);
  const encodedText = encodeURIComponent(ingredient);

  return `shortcuts://run-shortcut?name=${encodedName}&input=text&text=${encodedText}`;
}

export default function AddToGroceryListButton({ ingredientString }: { ingredientString: string }) {
  return (
    <span className="font-light">
      <a href={generateShortcutsHref(ingredientString)}>
        <FancyButton className="bg-foreground border border-foreground rounded-full px-2 py-0 hover:cursor-pointer hover:text-background hover:bg-secondary-accent transition">
          <span className="text-sm text-background">+</span>
        </FancyButton>
      </a>
    </span>
  );
}
