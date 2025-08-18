import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
        width: "100%",
      }}
      className="flex flex-col items-center justify-center py-16"
    >
      <h1 className="text-[24px] md:text-[57px] leading-8 text-center !my-8">
        What is <span className="text-primary">Solvo Engineering</span>
      </h1>
      <p className="text-[14px] md:text-[24px] text-center w-[90%] md:w-[60%] mx-auto !mb-8">
        Solvo Engineering is CAE consultant firm specializing in FEA, CFD
        simulations and CAD modeling. We pride ourselves on delivering
        exceptional lifecycle solutions customization to meet the precise needs
        of our clients.
      </p>
    </div>
  );
};

export default HeroSection;
