import PageHeading from '@/components/shared/PageHeading';
import { ResumeData } from '@/lib/types/Resume';
import { RESUME_DATA } from '@/lib/constants/resumeData';
import ExperienceSection from '@/components/views/resumeView/ExperienceSection';
import EducationSection from '@/components/views/resumeView/EducationSection';
// import SkillsSection from '@/components/views/resumeView/SkillsSection';
import SectionDivider from '@/components/views/resumeView/SectionDivider';
import SocialLinks from '@/components/views/mainView/SocialLinks';

export default function ResumePage() {
  const resumeData: ResumeData = RESUME_DATA;

  return (
    <main>
      <PageHeading titleText="Resume" />
      <div className="mb-2 text-foreground max-w-2xl mx-auto">
        <div className="py-8">
          <SocialLinks />
        </div>
        <SectionDivider />
        <ExperienceSection experiences={resumeData.experiences} />
        <SectionDivider />
        <EducationSection educations={resumeData.educations} />
        {/* <SectionDivider/>
        <SkillsSection skills={resumeData.skills} /> */}
      </div>
    </main>
  );
}
