import fetchHandler from "./fetch";

const BASE_URL = `/public/data/`;

const api = {
  getHero: () => fetchHandler<HeroData>(`${BASE_URL}/hero.json`),
  getAboutMe: () => fetchHandler<AboutMeData>(`${BASE_URL}/about-me.json`),
  getSkills: () => fetchHandler<TechStackData>(`${BASE_URL}/skills.json`),
  getWorkingExperiences: () => fetchHandler<WorkingExperienceData>(`${BASE_URL}/working-experiences.json`),
  getProjects: () => fetchHandler<ProjectsData>(`${BASE_URL}/projects.json`)
};

export default api;
