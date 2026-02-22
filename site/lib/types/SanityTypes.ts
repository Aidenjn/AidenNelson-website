export interface Recipe {
  _id: string;
  _type: 'recipe';
  title: string;
  slug: SanitySlug;
  description?: PortableTextBlock[];
  images: SanityImage[];
  cookingTime?: CookingTime;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  source?: string;
  tags: Tag[];
  dateCreated: string;
}

export interface CookingTime {
  prep?: number;
  cook?: number;
  total?: number;
}

export interface Ingredient {
  _key: string;
  _type: 'ingredient';
  ingredient: string;
  quantity: number;
  unit: Unit;
}

export type Unit = 'cup' | 'oz' | 'tbsp' | 'tsp';

export interface RecipeStep {
  _key: string;
  _type: 'step';
  instruction: PortableTextBlock[];
  note?: string;
  image?: SanityImage;
}

export interface SanityImage {
  _type: 'image';
  _key?: string;
  asset: {
    _type: 'reference';
    _ref: string;
  };
  crop?: {
    _type: 'sanity.imageCrop';
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  hotspot?: {
    _type: 'sanity.imageHotspot';
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Tag {
  _id: string;
  slug: SanitySlug;
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

// Portable Text types for rich text fields
export interface PortableTextBlock {
  _type: 'block';
  _key: string;
  style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
  listItem?: 'bullet' | 'number';
  markDefs?: MarkDef[];
  children: PortableTextSpan[];
  level?: number;
}

export interface PortableTextSpan {
  _type: 'span';
  _key?: string;
  text: string;
  marks?: string[];
}

export interface MarkDef {
  _type: 'link';
  _key: string;
  href: string;
}
