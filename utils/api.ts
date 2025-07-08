import fetchHandler from "./fetch";

const BASE_URL = "http://localhost:3000/data";

const api = {
  getHero: () => fetchHandler<HeroData>(`${BASE_URL}/hero.json`)
};

export default api;
