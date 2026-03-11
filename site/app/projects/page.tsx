import { client, urlFor } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import PageHeading from '@/components/shared/PageHeading';
import { SanityImage } from '@/lib/types/SanityTypes';
import PictureCardGrid, { IPictureCardGrid } from '@/components/shared/PictureCardGrid';

type ProjectCardInfo = {
  _id: string;
  title: string;
  slug: { current: string };
  featuredImage: SanityImage;
};

// GROQ query for all projects
const projects_query = `
  *[_type == "project"] | order(datePublished desc) {
    _id,
    title,
    slug,
    featuredImage,
  }
`;

export default async function ProjectsPage() {
  const projects: ProjectCardInfo[] | undefined = await client.fetch(projects_query);

  if (!projects || projects.length === 0) notFound();

  const args: IPictureCardGrid = {
    cardInfos: projects.map((project) => {
      const imageUrl: string | undefined = project.featuredImage
        ? urlFor(project.featuredImage).width(350).height(350).url()
        : undefined;
      return {
        key: project._id,
        cardArgs: {
          text: project.title,
          link: `/projects/${project.slug.current}`,
          image: imageUrl,
        },
      };
    }),
  };

  return (
    <div>
      <PageHeading titleText="Projects" />
      <PictureCardGrid args={args} />
    </div>
  );
}