import React from "react";
import * as motion from "motion/react-client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="sticky top-0 bg-background/80 z-10">
      <div className="container mx-auto p-4">
        <nav className="flex items-center justify-between">
          <Logo />

          <motion.div initial="closed" animate="open" exit="closed">
            <NavLinks className="max-md:hidden" />
          </motion.div>
          <MobileNavbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
