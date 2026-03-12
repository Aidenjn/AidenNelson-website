import { client, urlFor } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import PageHeading from '@/components/shared/PageHeading';
import { PortableText } from '@portabletext/react';
import { Project } from '@/lib/types/SanityTypes';
import Image from 'next/image';
import Carousel from '@/components/views/singleRecipeView/carousel/Carousel';
import { FaUpRightFromSquare } from 'react-icons/fa6';
import SlideInAnimationDiv from '@/components/shared/SlideInAnimationDiv';

// GROQ query for one project
const query = `
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    slug,
    description,
    projectLink,
    featuredImage{
      ...,
      asset->
    },
    projectFeatures[]{
      _key,
      _type,
      text
    },
    content[]{
      _key,
      _type,
      text,
      image{
        ...,
        asset->
      },
      imageCaption
    },
    datePublished,
    dateLastUpdated
  }
`;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the Promise
  const { slug } = await params;

  // Now slug is available
  const project: Project = await client.fetch(query, { slug });

  if (!project) notFound();

  return (
    <main>
      <PageHeading titleText={project.title} />

      <div className="mt-4 mb-2 text-foreground max-w-2xl mx-auto">
        {/** Project link */}
        {project.projectLink && (
          <SlideInAnimationDiv>
            <div className="pb-4 text-center w-full">
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                {'View Live Project '}
                <FaUpRightFromSquare className="inline ml-2" />
              </a>
            </div>
          </SlideInAnimationDiv>
        )}

        {/** Description */}
        {project.description && (
          <SlideInAnimationDiv>
            <div className="pb-6">
              <PortableText value={project.description} />
            </div>
          </SlideInAnimationDiv>
        )}

        {/** Showcase image */}
        {project.featuredImage && (
          <SlideInAnimationDiv>
            <div className="mx-auto max-w-200">
              <Carousel images={[project.featuredImage]} />
            </div>
          </SlideInAnimationDiv>
        )}

        {/** Project features */}
        {project.projectFeatures && project.projectFeatures.length > 0 && (
          <div className="pb-8">
            <SlideInAnimationDiv>
              <h2 className="text-2xl font-light mb-4">Features</h2>
            </SlideInAnimationDiv>
            <ul className="list-disc pl-6 space-y-2">
              {project.projectFeatures.map((feature) => (
                <SlideInAnimationDiv key={feature._key}>
                  <li>
                    <PortableText value={feature.text} />
                  </li>
                </SlideInAnimationDiv>
              ))}
            </ul>
          </div>
        )}

        {/** Content sections */}
        {project.content && project.content.length > 0 && (
          <div className="space-y-8">
            {project.content.map((section) => (
              <div key={section._key} className="grid md:grid-cols-2 gap-6 items-start">
                {/** Text column */}
                <div>
                  <PortableText value={section.text} />
                </div>

                {/** Image column */}
                {section.image && (
                  <div>
                    <Image
                      src={urlFor(section.image).width(600).url()}
                      alt={section.imageCaption || project.title}
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                    {section.imageCaption && (
                      <p className="text-sm text-muted-foreground mt-2 text-center">
                        {section.imageCaption}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/** Dates **/}
        {/* <div className="mt-12 pt-6 border-t text-sm text-muted-foreground">
          <p>Published: {new Date(project.datePublished).toLocaleDateString()}</p>
          <p>Last updated: {new Date(project.dateLastUpdated).toLocaleDateString()}</p>
        </div> */}
      </div>
    </main>
  );
}
