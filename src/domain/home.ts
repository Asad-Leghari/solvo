import images from "@/assets/images";

export const heroCTAButtons = [
  { id: 1, title: "Aerodynamic Analysis" },
  { id: 2, title: "VOF - MultiPhase Analysis" },
  { id: 3, title: "Airflow Optimisation" },
  { id: 4, title: "Thermal Management" },
];

export const clientLogos = [
  { id: 1, src: images.L1, alt: "Client Logo 1", width: 150, height: 150 },
  { id: 2, src: images.L2, alt: "Client Logo 2", width: 150, height: 150 },
  { id: 3, src: images.L3, alt: "Client Logo 3", width: 150, height: 150 },
  { id: 4, src: images.L4, alt: "Client Logo 4", width: 150, height: 150 },
  { id: 5, src: images.L5, alt: "Client Logo 5", width: 150, height: 150 },
];

export const models = [
  {
    id: 1,
    title: "Computational Fluid Dynamics (CFD)",
    description: "Agentic AI assistant guide you through model setup",
    image: images.CFD,
  },
  {
    id: 2,
    title: "2D/3D Modeling & Rendering (CAD)",
    description: "Run physics simulation & AI prediction in the cloud",
    image: images.CAD,
  },
  {
    id: 3,
    title: "Finite Element Analysis (FEA)",
    description: "Combine Engineering and Physics AI for instant design.",
    image: images.FEA,
  },
];

export const CFD = [
  { id: 1, title: "Structural Analysis", img: images.SA },
  { id: 2, title: "Composite Analysis", img: images.CA },
  { id: 3, title: "Dynamic Analysis", img: images.DA },
  { id: 4, title: "Nonlinear Analysis", img: images.NA },
  { id: 5, title: "Fatigue & Fracture", img: images.FF },
  { id: 6, title: "Thermal Analysis", img: images.TA },
];

export const CAD = [
  { id: 1, title: "3D Structural Design", img: images.SA },
  { id: 2, title: "Composite Material Design", img: images.CA },
  { id: 3, title: "Dynamic Load Simulation", img: images.DA },
  { id: 4, title: "Nonlinear Material Behavior", img: images.NA },
  { id: 5, title: "Fatigue Life Prediction", img: images.FF },
  { id: 6, title: "Thermal Management Solutions", img: images.TA },
];

export const FEA = [
  { id: 1, title: "Finite Element Stress Analysis", img: images.SA },
  { id: 2, title: "Failure Mode Analysis", img: images.CA },
  { id: 3, title: "Modal Analysis for Vibration", img: images.DA },
  { id: 4, title: "Nonlinear Structural Analysis", img: images.NA },
  { id: 5, title: "Fracture Mechanics Study", img: images.FF },
  { id: 6, title: "Thermal Stress Analysis", img: images.TA },
];

// Define the data in a structured format
export const contentData = {
  CFD: [
    {
      id: 1,
      title: "Structural Analysis",
      description:
        "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions.",
      buttonText: "Our More Services",
    },
    {
      id: 2,
      title: "Composite Analysis",
      description:
        "Delivering precision and innovation in composite material analysis, optimizing designs for complex engineering projects. Providing robust and efficient solutions for composite structures to meet the most demanding requirements in aerospace, automotive, and industrial applications.",
      buttonText: "Explore Composite Analysis",
    },
    {
      id: 3,
      title: "Dynamic Analysis",
      description:
        "Utilizing advanced dynamic analysis techniques to evaluate structural responses to dynamic loads, vibrations, and other time-dependent forces. Ensuring reliability and safety in systems subjected to unpredictable conditions.",
      buttonText: "Explore Dynamic Analysis",
    },
    {
      id: 4,
      title: "Nonlinear Analysis",
      description:
        "Conducting comprehensive nonlinear analysis to predict the behavior of materials and structures under complex loading conditions. Offering insights into material failure, plastic deformation, and other advanced phenomena.",
      buttonText: "Explore Nonlinear Analysis",
    },
    {
      id: 5,
      title: "Fatigue & Fracture",
      description:
        "Providing in-depth analysis of fatigue life and fracture mechanics to ensure the durability and longevity of critical components. Identifying potential failure points and optimizing designs to prevent catastrophic failures.",
      buttonText: "Explore Fatigue & Fracture",
    },
    {
      id: 6,
      title: "Thermal Analysis",
      description:
        "Optimizing heat transfer and thermal performance in systems using advanced thermal analysis. Ensuring that your designs are efficient and reliable, minimizing the risk of overheating and maximizing system performance.",
      buttonText: "Explore Thermal Analysis",
    },
  ],
  CAD: [
    {
      id: 1,
      title: "3D Structural Design",
      description:
        "Delivering precise and highly detailed 3D structural designs, using state-of-the-art CAD software to ensure structural integrity and optimization for construction and manufacturing applications.",
      buttonText: "Explore 3D Structural Design",
    },
    {
      id: 2,
      title: "Composite Material Design",
      description:
        "Designing composite materials with advanced CAD tools, ensuring that your designs meet the requirements for strength, weight, and cost-efficiency for complex engineering applications.",
      buttonText: "Explore Composite Material Design",
    },
    {
      id: 3,
      title: "Dynamic Load Simulation",
      description:
        "Simulating the behavior of structures under dynamic loads to ensure safety and performance. Helping engineers design systems that can withstand real-world dynamic environments.",
      buttonText: "Explore Dynamic Load Simulation",
    },
    {
      id: 4,
      title: "Nonlinear Material Behavior",
      description:
        "Modeling and simulating the behavior of materials under nonlinear stress conditions to accurately predict performance in high-stress and high-deformation scenarios.",
      buttonText: "Explore Nonlinear Material Behavior",
    },
    {
      id: 5,
      title: "Fatigue Life Prediction",
      description:
        "Providing detailed analysis of fatigue life in structural components to predict failure and extend the lifespan of critical parts in your designs.",
      buttonText: "Explore Fatigue Life Prediction",
    },
    {
      id: 6,
      title: "Thermal Management Solutions",
      description:
        "Designing effective thermal management systems to ensure optimal heat dissipation and performance, minimizing the risk of overheating and enhancing system reliability.",
      buttonText: "Explore Thermal Management Solutions",
    },
  ],
  FEA: [
    {
      id: 1,
      title: "Finite Element Stress Analysis",
      description:
        "Performing comprehensive stress analysis using finite element methods to ensure the structural integrity of your designs under various loading conditions.",
      buttonText: "Explore Stress Analysis",
    },
    {
      id: 2,
      title: "Failure Mode Analysis",
      description:
        "Identifying potential failure modes in structures and components, ensuring reliability and safety by optimizing designs and materials to prevent catastrophic failures.",
      buttonText: "Explore Failure Mode Analysis",
    },
    {
      id: 3,
      title: "Modal Analysis for Vibration",
      description:
        "Utilizing modal analysis to predict and prevent resonance in structures, ensuring stability and preventing vibrations that could compromise performance and safety.",
      buttonText: "Explore Vibration Analysis",
    },
    {
      id: 4,
      title: "Nonlinear Structural Analysis",
      description:
        "Performing nonlinear structural analysis to understand and predict complex behaviors under high loads, ensuring safety and durability under extreme conditions.",
      buttonText: "Explore Nonlinear Structural Analysis",
    },
    {
      id: 5,
      title: "Fracture Mechanics Study",
      description:
        "Conducting fracture mechanics analysis to predict crack propagation and prevent failure in critical structures, ensuring that designs are safe and long-lasting.",
      buttonText: "Explore Fracture Mechanics",
    },
    {
      id: 6,
      title: "Thermal Stress Analysis",
      description:
        "Analyzing the effects of thermal stress on materials and structures to prevent deformation and failure due to temperature fluctuations.",
      buttonText: "Explore Thermal Stress Analysis",
    },
  ],
};
