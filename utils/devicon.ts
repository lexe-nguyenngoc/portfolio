import { TECH_MAP } from "@/constants/techMap";

export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  const iconClass = TECH_MAP[normalizedTechName];

  console.log(techName, normalizedTechName, iconClass);

  return iconClass ? `${iconClass} colored` : "devicon-devicon-plain";
};
