import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="h-[800px] relative">
      <div className="absolute inset-0 -z-1">
        <Image className="object-cover" src="/hero.png" fill alt="Hero image" />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>
      <div className="container h-full mx-auto flex items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-jetbrains-mono tracking-wide font-bold text-primary">Hello, I'm</h2>
          <h1 className="text-6xl font-black mt-4 mb-6">Lexe Nguyen</h1>
          <p className="text-2xl font-bold mb-10">
            A <span className="text-accent">Front-End Developers</span> who crafts clean and scalable solutions.
          </p>

          <Link href={"#about"} className="primary-btn px-4 py-3 cursor-pointer mr-4">
            View My Work
          </Link>
          <Link href={"#contact"} className="border-accent rounded cursor-pointer border px-4 py-3">
            Get In Touch
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            className="animate-bounce"
            width={320}
            height={320}
            src="/hero-2.png"
            alt="minimalist abstract 3D illustration of code symbols and developer elements floating in space, geometric shapes, purple and teal color scheme"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
