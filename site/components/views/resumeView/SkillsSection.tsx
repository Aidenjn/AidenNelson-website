// components/views/resumeView/SkillsSection.tsx
import { Skills } from '@/lib/types/Resume';
import { FaCode, FaLanguage, FaTools } from 'react-icons/fa';

interface Props {
  skills: Skills;
}

export default function SkillsSection({ skills }: Props) {
  return (
    <section className="py-8">
      <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <FaCode className="w-5 h-5 text-primary" />
        Skills
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
            Technical
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-secondary text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide flex items-center gap-2">
            <FaTools className="w-4 h-4" />
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((tool) => (
              <span
                key={tool}
                className="px-2 py-1 rounded-md text-sm bg-muted text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide flex items-center gap-2">
            <FaLanguage className="w-4 h-4" />
            Languages
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.languages.map((lang) => (
              <span key={lang.name} className="text-sm text-foreground">
                <span className="font-medium">{lang.name}</span>
                <span className="text-muted-foreground"> — {lang.proficiency}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
