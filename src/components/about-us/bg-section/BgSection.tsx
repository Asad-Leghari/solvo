import images from "@/assets/images";
import Image from "next/image";
import React from "react";

interface BgSectionProps {
  heading: string;
  text: string;
}

const BgSection = ({ heading, text }: BgSectionProps) => {
  return (
    <section className="bg-primary text-white !py-16 flex flex-col items-center justify-center relative overflow-hidden">
      <Image
        src={images.bgsectionleft.src}
        alt="Background Image"
        height={500}
        width={500}
        className="object-cover absolute left-0 top-0 z-0 hidden md:block"
      />
      <h1 className="text-[24px] md:text-[32px]">{heading}</h1>
      <p className="w-[90%] md:w-[50%] text-center text-[14px] md:text-[24px] mt-2">
        {text}
      </p>
      <Image
        src={images.bgsectionright.src}
        alt="Background Image"
        height={500}
        width={500}
        className="object-cover absolute right-0 top-0 z-0 hidden md:block"
      />
    </section>
  );
};

export default BgSection;
