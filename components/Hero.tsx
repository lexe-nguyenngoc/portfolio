import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

import api from "@/utils/api";
import ANIMATION from "@/constants/animation";

const Hero = async () => {
  const response = await api.getHero();

  if (!response.success) return <p>Something went wrong!</p>;

  const { name, greeting } = response.data!;

  return (
    <motion.section
      className="h-[calc(100vh-64px)] md:h-[900px] relative"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: "some", once: true }}
    >
      <div className="absolute inset-0 -z-1">
        <motion.div variants={ANIMATION.fade}>
          <Image className="object-cover" src="/hero.png" fill alt="Hero image" />
        </motion.div>
        <div className="absolute inset-0 bg-background/60"></div>
      </div>
      <div className="container h-full mx-auto flex flex-col justify-center items-center md:flex-row gap-12">
        <div className="h-fit overflow-hidden">
          <motion.h2
            variants={ANIMATION.fadeInLeft}
            className="text-2xl font-jetbrains-mono tracking-wide font-bold text-primary"
          >
            Hello, I'm
          </motion.h2>
          <motion.h1 variants={ANIMATION.slideUp} className="text-6xl font-black mt-4 mb-6">
            {name}
          </motion.h1>
          <motion.p variants={ANIMATION.fadeInLeft} className="text-2xl font-bold mb-10">
            {greeting.map((x) => {
              if (x.highlight)
                return (
                  <span key={x.value} className="text-accent">
                    {x.value}
                  </span>
                );

              return x.value;
            })}
          </motion.p>

          <motion.div variants={ANIMATION.fadeInRight} className="flex gap-4">
            <Link href={"#experiences"} className="primary-btn px-4 py-3 cursor-pointer">
              View My Work
            </Link>

            <Link href={"#contact"} className="border-accent rounded cursor-pointer border px-4 py-3">
              Get In Touch
            </Link>
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center max-md:hidden">
          <Image
            className="animate-bounce"
            width={320}
            height={320}
            src="/hero-2.png"
            alt="minimalist abstract 3D illustration of code symbols and developer elements floating in space, geometric shapes, purple and teal color scheme"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
