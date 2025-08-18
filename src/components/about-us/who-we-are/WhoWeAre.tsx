import images from "@/assets/images";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="w-full flex justify-center !my-12">
      <div className="w-[90%] md:w-[60%] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-[60%]">
          <h1 className="text-[24px] md:text-[44px]">
            Who We <span className="text-primary">Are</span>
          </h1>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and orem Ipsum is simply dummy text of the printing and typesetting industry.`}
            <br />
            <br />

            {`printer took a galley of type and  orem Ipsum is simply dummy text of the printing and typesetting industry. printer took a galley of type and  orem Ipsum is simply dummy text of the printing and typesetting`}
          </p>
        </div>
        <div className="w-full md:w-[40%]">
          <Image
            src={images.whoweare.src}
            alt="Who We Are"
            height={400}
            width={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
