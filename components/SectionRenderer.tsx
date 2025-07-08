import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface SectionRenderer {
  id: string;
  name: string;
  caption?: string;
  className?: string;
  children?: ReactNode;
}

const SectionRenderer = ({ id, name, caption, className, children }: SectionRenderer) => {
  return (
    <section id={id} className={cn("py-12", className)}>
      <div className="mb-14">
        <h3 className="text-center text-3xl font-bold py-2">{name}</h3>
        <div className="mx-auto bg-accent h-1 w-18"></div>
        {caption && <p className="text-center mt-4">{caption}</p>}
      </div>
      {children}
    </section>
  );
};

export default SectionRenderer;
