import { Experience } from '@/lib/types/Resume';
import { FaBuilding, FaCalendar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import SubSectionDivider from './SubSectionDivider';

interface Props {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: Props) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
        Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((job) => (
          <article key={job.id}>
            <SubSectionDivider />
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 mt-6">
              <h3 className="text-2xl text-foreground font-roboto font-bold">{job.title}</h3>
              <span className="text-md text-muted-foreground flex items-center gap-2 font-roboto font-bold mt-2 md:mt-0">
                <FaCalendar className="w-3 h-3" />
                {job.startDate} — {job.current ? 'Present' : job.endDate}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-md font-roboto font-bold">
              <span className="text-muted-foreground flex items-center gap-1">
                <FaBuilding className="w-3 h-3" />
                {job.company}
              </span>
              <span className="hidden sm:inline text-muted-foreground mx-2"> </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <FaLocationDot className="w-3 h-3" />
                {job.location}
              </span>
            </div>

            <ul className="space-y-1">
              {job.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="font-roboto text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
