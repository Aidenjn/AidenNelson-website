// import { client } from '@/lib/sanity';
// import { notFound } from 'next/navigation';

// GROQ query for one project
// const query = `
//   *[_type == "artwork" && slug.current == $slug][0]{
//     _id,
//     title,
//     slug,
//     description,
//     images[],
//     saleStatus,
//     etsyUrl,
//     tags[]->{
//       _id,
//       slug,
//     }
//   }
// `;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div>
      <h1>Under construction 🏗️</h1>
    </div>
  );
}
