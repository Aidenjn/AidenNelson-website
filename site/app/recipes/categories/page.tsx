import { client, urlFor } from '@/lib/sanity';
import PageHeading from '@/components/shared/PageHeading';
import { Tag } from '@/lib/types/SanityTypes';
import PictureCardGrid, { IPictureCardGrid } from '@/components/shared/PictureCardGrid';
import React from 'react';
import { notFound } from 'next/navigation';

export default async function RecipeCategoriesPage() {
  const tags: Tag[] | undefined = await client.fetch(`*[_type == "recipeTag"] {
    _id,
    plural_title,
    slug,
    image
  }`);

  if (!tags) notFound();

  console.log('tags:', tags);

  const args:IPictureCardGrid = {
    cardInfos: tags.map((tag)=> {

      const imageUrl: string | undefined = tag.image ? urlFor(tag.image).width(350).height(350).url() : undefined;  

      return {
        key: tag._id,
        cardArgs: {
          text: tag.plural_title,
          link: `/recipes/categories/${tag.slug.current}`,
          image: imageUrl
        }
      }
    })
  };

  return (
    <div>
      <PageHeading titleText='Recipe Categories'/>
      <PictureCardGrid args={args} />
    </div>
  );
}