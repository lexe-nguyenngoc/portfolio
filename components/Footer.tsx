import React from "react";
import * as motion from "motion/react-client";

import ANIMATION from "@/constants/animation";

import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <motion.footer
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: "some", once: true }}
      variants={ANIMATION.group}
      className="mt-14 bg-primary/20 border-t-1 border-gray-600 py-10 overflow-hidden"
    >
      <div className="container mx-auto md:flex md:items-center md:justify-between">
        <div>
          <Logo className="mx-auto w-fit md:mx-0" />
          <motion.p variants={ANIMATION.slideUp} className="text-center mb-5 md:mb-0 mt-2 text-gray-300">
            Building the web, one line at a time.
          </motion.p>
        </div>
        <div>
          <SocialLinks className="justify-center md:justify-end" />
          <motion.p variants={ANIMATION.slideUp} className="text-center text-gray-500 mt-2">
            © 2023 Lexe Nguyen. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
