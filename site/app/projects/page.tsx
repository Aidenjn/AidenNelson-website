import { client } from '@/lib/sanity';
import ProjectGrid from '@/components/shared/ProjectGrid';

export default async function GalleryPage() {
  const artworks = await client.fetch(`*[_type == "artwork"] | order(dateCreated desc)`);

  return (
    <div>
      <ProjectGrid projects={artworks} />
    </div>
  );
}
