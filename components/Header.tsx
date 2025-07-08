import React from "react";
import Link from "next/link";

import Logo from "./Logo";

const LINKS: { href: string; label: string }[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

const Header = () => {
  return (
    <header className="sticky top-0 bg-background/80 z-10">
      <div className="container mx-auto p-4">
        <nav className="flex items-center">
          <Logo />

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
  );
};

export default Header;
