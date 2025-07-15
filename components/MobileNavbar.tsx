"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "motion/react";

import NavLinks from "./NavLinks";

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const sidebarVariants: Variants = {
  open: (position: string) => {
    console.log("open", position);
    return {
      clipPath: `circle(1000px at ${position})`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    };
  },
  closed: (position: string) => {
    console.log("close", position);
    return {
      clipPath: `circle(0px at ${position})`,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    };
  }
};

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("0px 0px");
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleHideMenu = () => {
    setOpen(false);
  };

  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const overflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  useEffect(() => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    setPosition(`${x}px ${y}px`);
  }, [btnRef]);

  return (
    <motion.div initial={false} animate={open ? "open" : "closed"} className="md:hidden">
      <motion.button
        onClick={handleToggleMenu}
        ref={btnRef}
        className={"z-10 relative"}
        initial={{ opacity: 0, scale: 0, rotate: -50 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }
        }}
      >
        <svg width="24" height="24" viewBox="0 0 30 30">
          <motion.line
            x1="5"
            y1="7"
            x2="25"
            y2="7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            initial={false}
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 8 }
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.line
            x1="10"
            y1="15"
            x2="20"
            y2="15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            initial={false}
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.line
            x1="5"
            y1="23"
            x2="25"
            y2="23"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            initial={false}
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -8 }
            }}
            transition={{ duration: 0.3 }}
          />
        </svg>
      </motion.button>

      <motion.div
        custom={position}
        variants={sidebarVariants}
        className="fixed top-0 left-0 bottom-0 right-0 bg-black/90 flex items-center justify-center"
      >
        <NavLinks mobile className="flex-col w-fit text-center" onNavClick={handleHideMenu} />
      </motion.div>
    </motion.div>
  );
};

export default MobileNavbar;
