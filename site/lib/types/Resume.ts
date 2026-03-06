export interface Experience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  highlights: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  graduatedDate: string;
  gpa: string;
  highlights: string[];
}

export interface Skills {
  technical: string[];
  tools: string[];
  languages: { name: string; proficiency: string }[];
}

export interface ResumeData {
  experiences: Experience[];
  educations: Education[];
  skills: Skills;
}
