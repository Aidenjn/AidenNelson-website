import { Education } from '@/lib/types/Resume';
import { FaCertificate, FaGraduationCap, FaSchool } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import SubSectionDivider from './SubSectionDivider';
import SlideInAnimationDiv from '@/components/shared/SlideInAnimationDiv';

interface Props {
  educations: Education[];
}

// Hack to get a link in the section
function renderThesisHighlight() {
  return (
    <span>
      Thesis:{' '}
      <a href="https://ir.library.oregonstate.edu/concern/graduate_thesis_or_dissertations/g158br57k?locale=en">
        The ChildsPlay Approach: Evaluating an Experimental Approach for Teaching Introductory CS at
        University
      </a>
    </span>
  );
}

// Hack to get a link in the section
function renderGCCUTHighlight() {
  return (
    <span>
      Completed{' '}
      <a href="https://graduate.oregonstate.edu/graduate-certificate-college-and-university-teaching/learning-outcomes-and-curriculum">
        coursework
      </a>{' '}
      on how to eﬀectively teach adult learners
    </span>
  );
}

// Hack to get a link in the section
function renderEducationHighlight(highlight: string) {
  if (highlight === 'Thesis') return renderThesisHighlight();
  else if (highlight === 'GCCUT') return renderGCCUTHighlight();
  return highlight;
}

export default function EducationSection({ educations }: Props) {
  return (
    <section className="py-8">
      <SlideInAnimationDiv>
        <h2 className="text-2xl font-roboto text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
          Education
        </h2>
      </SlideInAnimationDiv>

      <div className="space-y-6">
        {educations.map((education) => (
          <article key={education.id}>
            <SlideInAnimationDiv>
              <SubSectionDivider />
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 mt-6">
                <h3 className="text-2xl text-foreground font-roboto font-bold">
                  {education.degree}
                </h3>
                <span className="text-base text-muted-foreground flex items-center gap-2 font-roboto font-bold mt-2 md:mt-0">
                  <FaGraduationCap className="w-3 h-3 text-3xl" />
                  {`${education.graduatedDate}`}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-base font-roboto font-bold">
                <span className="text-muted-foreground flex items-center gap-1">
                  <FaSchool className="w-3 h-3" />
                  {education.institution}
                </span>
                <span className="hidden sm:inline text-muted-foreground mx-2"> </span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <FaLocationDot className="w-3 h-3" />
                  {education.location}
                </span>
                <span className="hidden sm:inline text-muted-foreground mx-2"> </span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <FaCertificate className="w-3 h-3" />
                  {`GPA: ${education.gpa}`}
                </span>
              </div>

              <ul className="space-y-1">
                {education.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="font-roboto text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                  >
                    {renderEducationHighlight(highlight)}
                  </li>
                ))}
              </ul>
            </SlideInAnimationDiv>
          </article>
        ))}
      </div>
    </section>
  );
}
