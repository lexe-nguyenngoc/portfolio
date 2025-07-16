import React from "react";
import * as motion from "motion/react-client";

import { cn } from "@/utils/cn";

interface Logo {
  className?: string;
}

const Logo = ({ className }: Logo) => {
  return (
    <motion.div
      className={cn("font-bold text-2xl text-accent", className)}
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 10 }}
      transition={{
        duration: 1,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        repeatType: "mirror",
        repeat: Infinity
      }}
    >
      <span className="text-primary">&lt;</span>
      Lexe
      <span className="text-primary">/&gt;</span>
    </motion.div>
  );
};

export default Logo;
