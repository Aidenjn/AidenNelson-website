// import { client } from '@/lib/sanity';

import PageHeading from '@/components/shared/PageHeading';
import { FaHammer } from 'react-icons/fa';

export default async function BlogPage() {
  return (
    <div>
      <PageHeading titleText="Page under construction..." />
      <div className="w-full text-center pt-15">
        <FaHammer className="inline text-8xl text-foreground" />
      </div>
    </div>
  );
}
