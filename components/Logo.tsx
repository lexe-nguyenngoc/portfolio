import React from "react";

import { cn } from "@/utils/cn";

interface Logo {
  className?: string;
}

const Logo = ({ className }: Logo) => {
  return (
    <div className={cn("font-bold text-2xl text-accent", className)}>
      <span className="text-primary">&lt;</span>
      Lexe
      <span className="text-primary">/&gt;</span>
    </div>
  );
};

export default Logo;
