import fetchHandler from "./fetch";

const BASE_URL = "http://localhost:3000/data";

const api = {
  getHero: () => fetchHandler<HeroData>(`${BASE_URL}/hero.json`),
  getAboutMe: () => fetchHandler<AboutMeData>(`${BASE_URL}/about-me.json`)
};

export default api;
