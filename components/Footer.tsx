import React from "react";

import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="mt-14 bg-primary/20 border-t-1 border-gray-600 py-10">
      <div className="container mx-auto md:flex md:items-center md:justify-between">
        <div>
          <Logo className="mx-auto w-fit md:mx-0" />
          <p className="text-center mb-5 md:mb-0 mt-2 text-gray-300">Building the web, one line at a time.</p>
        </div>
        <div>
          <SocialLinks className="justify-center md:justify-end" />
          <p className="text-center text-gray-500 mt-2">© 2023 Lexe Nguyen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
