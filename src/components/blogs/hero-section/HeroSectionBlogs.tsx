import images from "@/assets/images";
import Image from "next/image";
import React from "react";

const HeroSectionBlogs = () => {
  return (
    <section
      className="flex flex-col h-full w-full items-center justify-center !py-20 md:!py-40 gap-6 md:gap-10 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(136, 216, 232, 0.2) 47.74%, rgba(136, 216, 232, 0.533333) 88.56%)",
      }}
    >
      <Image
        src={images.bgdots.src}
        alt="Background Image"
        height={500}
        width={500}
        className="h-[247px] w-[106px] absolute left-5 top-0 z-0 hidden md:block"
      />

      <h1 className="text-[24px] leading-[32px]">
        Our <span className="text-primary">Blogs</span>
      </h1>
      <p className="text-[16px] leading-[24px] max-w-[90%] md:max-w-[50%] text-center">
        Explore information and engaging blogs articles in a wide range of
        topics, written by experts and curated for your reading pleasure.
      </p>

      <Image
        src={images.bgdotsTilted.src}
        alt="Background Image"
        height={500}
        width={500}
        className="h-[348px] w-[360px] absolute right-0 -bottom-40 z-0 hidden md:block"
      />
    </section>
  );
};

export default HeroSectionBlogs;
