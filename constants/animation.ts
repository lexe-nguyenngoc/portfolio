import { Variants } from "motion";

const ANIMATION: Record<"slideUp" | "fadeInLeft" | "fadeInRight" | "fade" | "group" | "scale", Variants> = {
  fadeInLeft: {
    offscreen: { opacity: 0, x: -200 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  },
  fadeInRight: {
    offscreen: { opacity: 0, x: 200 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  },
  slideUp: {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  },
  fade: {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1
    }
  },
  group: {
    onscreen: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    offscreen: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  },
  scale: {
    offscreen: {
      scale: 0
    },
    onscreen: {
      scale: 1,
      transition: {
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        duration: 0.4
      }
    }
  }
};

export default ANIMATION;
