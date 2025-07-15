import React from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="sticky top-0 bg-background/80 z-10">
      <div className="container mx-auto p-4">
        <nav className="flex items-center justify-between">
          <Logo />

          <NavLinks className="max-md:hidden" />
          <MobileNavbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
