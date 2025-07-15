"use client";

import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

import NAV_LINKS from "@/constants/navLinks";
import { cn } from "@/utils/cn";

interface NavLinksProps {
  className?: string;
  mobile?: boolean;
  onNavClick?: () => void;
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const NavLinks = ({ className, onNavClick }: NavLinksProps) => {
  return (
    <motion.ul variants={navVariants} className={cn("flex gap-6", className)}>
      {NAV_LINKS.map((item) => (
        <motion.li key={item.href} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={item.href}
            onClick={onNavClick}
            className="text-md uppercase hover:text-accent transition-all ease-in-out duration-300"
          >
            {item.label}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavLinks;
