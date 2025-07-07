import { ReactNode } from "react";

interface SectionRenderer {
  id: string;
  name: string;
  children?: ReactNode;
}

const SectionRenderer = ({ id, name, children }: SectionRenderer) => {
  return (
    <section id={id} className="mt-24">
      <div className="relative mb-14">
        <h3 className="text-center text-3xl font-bold py-2">{name}</h3>
        <div className="absolute top-full left-1/2 -translate-x-1/2 bg-accent h-1 w-18"></div>
      </div>
      {children}
    </section>
  );
};

export default SectionRenderer;
