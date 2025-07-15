import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import * as motion from "motion/react-client";
import ANIMATION from "@/constants/animation";

interface SectionRenderer {
  id: string;
  name: string;
  caption?: string;
  className?: string;
  children?: ReactNode;
}

const SectionRenderer = ({ id, name, caption, className, children }: SectionRenderer) => {
  return (
    <section id={id} className={cn("py-8 md:py-12", className)}>
      <div className="mb-4 md:mb-14">
        <motion.h3
          variants={ANIMATION.slideUp}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: "some", once: true }}
          className="text-center text-3xl font-bold py-2"
        >
          {name}
        </motion.h3>
        <div className="mx-auto bg-accent h-1 w-18"></div>
        {caption && (
          <motion.p
            variants={ANIMATION.slideUp}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: "some", once: true }}
            className="text-center mt-4"
          >
            {caption}
          </motion.p>
        )}
      </div>
      {children}
    </section>
  );
};

export default SectionRenderer;
