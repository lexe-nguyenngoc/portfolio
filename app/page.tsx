import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import SectionRenderer from "@/components/SectionRenderer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LINKS: { href: string; label: string }[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

const Home = () => {
  return (
    <main>
      <header className="sticky top-0 bg-background/80 z-10">
        <div className="container mx-auto p-4">
          <nav className="flex items-center">
            <div className="font-bold text-2xl">
              <span className="text-primary">&lt;</span>
              Lexe
              <span className="text-primary">/&gt;</span>
            </div>

            <ul className="ml-auto flex gap-6">
              {LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-md uppercase hover:text-accent transition-all ease-in-out duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <Hero />

      <AboutMe />
    </main>
  );
};

export default Home;
