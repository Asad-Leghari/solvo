import images from "@/assets/images";

export const heroCTAButtons = [
  { id: 1, title: "Aerodynamic Analysis" },
  { id: 2, title: "VOF - MultiPhase Analysis" },
  { id: 3, title: "Airflow Optimisation" },
  { id: 4, title: "Thermal Management" },
];

export const clientLogos = [
  { id: 1, src: images.L1, alt: "Client Logo 1" },
  { id: 2, src: images.L2, alt: "Client Logo 2" },
  { id: 3, src: images.L3, alt: "Client Logo 3" },
  { id: 4, src: images.L4, alt: "Client Logo 4" },
  { id: 5, src: images.L5, alt: "Client Logo 5" },
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
