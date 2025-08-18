import { Divider } from "@mui/material";
import React from "react";

const metrics = [
  {
    value: "10",
    label: "Years of Experience",
  },
  {
    value: "35",
    label: "Countries Served",
  },
  {
    value: "210",
    label: "Expert Freelancers",
  },
  {
    value: "900+",
    label: "Projects Completed",
  },
];

const ExperienceCounter = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-3 md:gap-12 !my-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="w-fit md:w-[20%] flex flex-col items-center text-center"
          >
            <h2 className="text-[24px] md:text-[36px] text-primary">
              {metric.value}
            </h2>
            <p className="text-[14px] md:text-[16px]">{metric.label}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Divider sx={{ width: "60%", bgcolor: "#E0E0E0", mt: "20px" }} />
      </div>
    </>
  );
};

export default ExperienceCounter;
