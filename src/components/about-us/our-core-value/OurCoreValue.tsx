import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import images from "@/assets/images";
import Image from "next/image";

const coreValues = [
  {
    title: "Integrity",
    description:
      "Honesty & transparency are at the core of our operations, ensuring trust & reliability in every project we undertake.",
    icon: images.verified.src,
  },
  {
    title: "Innovation",
    description:
      "We continuously strive to incorporate the latest technologies & creative solutions to stay ahead in engineering excellence.",
    icon: images.idea.src,
  },
  {
    title: "Collaboration",
    description:
      "Our team works closely with clients & each other to foster a cooperative environment that promotes shared success.",
    icon: images.audience.src,
  },
  {
    title: "Quality",
    description:
      "We are committed to delivering top-notch engineering solutions that meet the highest standards of accuracy and performance.",
    icon: images.quality_assurance.src,
  },
  {
    title: "Client-Centricity",
    description:
      "Understanding and addressing the unique needs of our clients is our priority, ensuring personalized and effective solutions.",
    icon: images.handshake.src,
  },
  {
    title: "Continuous Improvement",
    description:
      "We embrace a culture of learning & development, always seeking ways to enhance our capabilities and services.",
    icon: images.verified.src,
  },
];

const OurCoreValue = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 !my-8">
      <h1 className="text-[24px] md:text-[36px] leading-8">
        Our <span className="text-primary">Core Value</span>
      </h1>
      <div className="w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0 !mt-3 md:!mt-12">
        {coreValues.map((value, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 275,
              boxShadow: "0px 4px 28px 0px #0000000F",
              p: 0,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                mt: 0,
                rowGap: 4,
                padding: "32px",
              }}
            >
              <Image
                src={value.icon}
                alt={value.title}
                height={64}
                width={64}
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-lg font-semibold">{value.title}</h2>
              <p className="text-sm text-gray-600">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurCoreValue;
