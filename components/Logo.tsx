"use client";
import React from "react";
import { motion } from "motion/react";

import { cn } from "@/utils/cn";

interface Logo {
  className?: string;
}

const Logo = ({ className }: Logo) => {
  return (
    <motion.div
      className={cn("font-bold text-2xl text-accent", className)}
      initial={{ opacity: 0, scale: 0, rotate: -50 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }
      }}
    >
      <span className="text-primary">&lt;</span>
      Lexe
      <span className="text-primary">/&gt;</span>
    </motion.div>
  );
};

export default Logo;
