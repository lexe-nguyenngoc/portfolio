const NAV_LINKS: { href: string; label: string }[] = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "experiences", label: "Experiences" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" }
];

export enum NAV_REFERENCE_IDS {
  ABOUT = "about",
  SKILLS = "skills",
  EXPERIENCES = "experiences",
  PROJECTS = "projects",
  CONTACT = "contact"
}

export default NAV_LINKS;
