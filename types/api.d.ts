interface HeroData {
  name: string;
  greeting: { value: string; highlight?: boolean }[];
}

interface AboutMeData {
  summaries: string[];
  timelines: WorkingTimeLine[];
}

interface TechStackData {
  skills: string[];
}

interface WorkingExperienceData {
  data: WorkingExperience[];
}

interface ProjectsData {
  projects: Project[];
}
