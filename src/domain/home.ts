import images from "@/assets/images";

export const heroCTAButtons = [
  { id: 1, title: "Aerodynamic Analysis" },
  { id: 2, title: "VOF - MultiPhase Analysis" },
  { id: 3, title: "Airflow Optimisation" },
  { id: 4, title: "Thermal Management" },
];

export const clientLogos = [
  { id: 1, src: images.L1, alt: "Client Logo 1", width: 150, height: 60 },
  { id: 2, src: images.L2, alt: "Client Logo 2", width: 150, height: 60 },
  { id: 3, src: images.L3, alt: "Client Logo 3", width: 150, height: 60 },
  { id: 4, src: images.L4, alt: "Client Logo 4", width: 150, height: 60 },
  { id: 5, src: images.L5, alt: "Client Logo 5", width: 250, height: 60 },
];

export const models = [
  {
    id: 1,
    title: "Computational Fluid Dynamics (CFD)",
    description: "Agentic AI assistant guide you through model setup",
    image: images.CFDM,
  },
  {
    id: 2,
    title: "2D/3D Modeling & Rendering (CAD)",
    description: "Run physics simulation & AI prediction in the cloud",
    image: images.CADM,
  },
  {
    id: 3,
    title: "Finite Element Analysis (FEA)",
    description: "Combine Engineering and Physics AI for instant design.",
    image: images.FEAM,
  },
];

export const home_services = {
  services: ["CFD", "CAD", "FEA"],
  CFD: {
    list: [
      {
        id: 1,
        title: "Airflow Analysis",
        img: images.services.CFD.icons.AirFlowAnalysisIcon,
      },
      {
        id: 2,
        title: "Design Optimization",
        img: images.services.CFD.icons.DesignOptimizationIcon,
      },
      {
        id: 3,
        title: "Fluid Structure Interaction (FSI)",
        img: images.DA,
      },
      {
        id: 4,
        title: "Heat Transfer",
        img: images.services.CFD.icons.HeatTransferIcon,
      },
      {
        id: 5,
        title: "Multiphase Flow Analysis",
        img: images.services.CFD.icons.MultiphaseIcon,
      },
      {
        id: 6,
        title: "Turbo Machinery",
        img: images.services.CFD.icons.TurboMachineryIcon,
      },
    ],
    card: [
      {
        id: 1,
        title: "Airflow Analysis",
        img: images.services.CFD.AirFlowAnalysis,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 2,
        title: "Design Optimization",
        img: images.services.CFD.DesignOptimization,
        width: "300px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 3,
        title: "Fluid Structure Interaction (FSI)",
        img: images.services.CFD.FluidStructureInteraction,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 4,
        title: "Heat Transfer",
        img: images.services.CFD.HeatTransfer,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 5,
        title: "Multiphase Flow Analysis",
        img: images.services.CFD.Multiphase,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 6,
        title: "Turbo Machinery",
        img: images.services.CFD.TurboMachinery,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
    ],
  },
  CAD: {
    list: [
      {
        id: 1,
        title: "3D Modeling",
        img: images.services.CAD.icons.Modeling3DIcon,
      },
      { id: 2, title: "Assembly", img: images.services.CAD.icons.AssemblyIcon },
      { id: 3, title: "Mold", img: images.services.CAD.icons.Modeling3DIcon },
      {
        id: 4,
        title: "Product Design",
        img: images.services.CAD.icons.ProductDesignIcon,
      },
      {
        id: 5,
        title: "Reverse Engineering",
        img: images.services.CAD.icons.ReverseEngIcon,
      },
      {
        id: 6,
        title: "Sheet Metal",
        img: images.services.CAD.icons.SheetMetalIcon,
      },
    ],
    card: [
      {
        id: 1,
        title: "3D Modeling",
        img: images.services.CAD.Modeling3D,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 2,
        title: "Assembly",
        img: images.services.CAD.Assembly,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 3,
        title: "Mold",
        img: images.services.CAD.Mold,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 4,
        title: "Product Design",
        img: images.services.CAD.ProductDesign,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 5,
        title: "Reverse Engineering",
        img: images.services.CAD.ReverseEng,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 6,
        title: "Sheet Metal",
        img: images.services.CAD.SheetMetal,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
    ],
  },
  FEA: {
    list: [
      {
        id: 1,
        title: "Composite Analysis",
        img: images.services.FEA.icons.CompositeIcon,
      },
      {
        id: 2,
        title: "Dynamic Analysis",
        img: images.services.FEA.icons.DynamicIcon,
      },
      {
        id: 3,
        title: "Fatigue & Fracture",
        img: images.services.FEA.icons.FatigueAndFractureIcon,
      },
      {
        id: 4,
        title: "Non Linear Analysis",
        img: images.services.FEA.icons.NonLinearIcon,
      },
      {
        id: 5,
        title: "Structural Analysis",
        img: images.services.FEA.icons.StructuralAnalysisIcon,
      },
      {
        id: 6,
        title: "Thermal Analysis",
        img: images.services.FEA.icons.ThermalIcon,
      },
    ],
    card: [
      {
        id: 1,
        title: "Composite Analysis",
        img: images.services.FEA.Composite,
        width: "300px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 2,
        title: "Dynamic Analysis",
        img: images.services.FEA.Dynamic,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 3,
        title: "Fatigue & Fracture",
        img: images.services.FEA.FatigueAndFracture,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 4,
        title: "Non Linear Analysis",
        img: images.services.FEA.NonLinear,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 5,
        title: "Structural Analysis",
        img: images.services.FEA.StructuralAnalysis,
        width: "250px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
      {
        id: 6,
        title: "Thermal Analysis",
        img: images.services.FEA.Thermal,
        width: "300px",
        height: "250px",
        description:
          "Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering solutions, Delivering precision and innovation with our premium customer engineering.  Delivering precision and innovation  precision and innovation",
        buttonText: "Our More Services",
      },
    ],
  },
};

export const slidesData = [
  {
    headingButtonTitle: "Case Studies",
    heading: "Our Customer Simulation Process",
    highlight: "Simulation Process",
    leftSection: {
      title: "Information Gathering & Requirement",
      buttons: ["Team Assembly", "Responsibility"],
      image: images.home.CH1,
    },
    rightSection: {
      title: "Assigning Roles & Responsibilities",
      buttons: ["Consultation", "Requirement Specifications"],
      image: images.home.CH2,
    },
  },
  {
    headingButtonTitle: "Case Studies",
    heading: "Optimised Workflow Solutions",
    highlight: "Workflow Solutions",
    leftSection: {
      title: "Process Analysis & Implementation",
      buttons: ["Process Analysis", "Implementation"],
      image: images.home.CH3,
    },
    rightSection: {
      title: "Streamlined Operations",
      buttons: ["Efficiency Improvement", "Cost Reduction"],
      image: images.home.CH4,
    },
  },
  {
    headingButtonTitle: "Case Studies",
    heading: "Enhanced Collaboration",
    highlight: "Collaboration",
    leftSection: {
      title: "Team Coordination",
      buttons: ["Role Assignment", "Communication"],
      image: images.home.CH5,
    },
    rightSection: {
      title: "Project Management",
      buttons: ["Planning", "Execution"],
      image: images.home.CH6,
    },
  },
];
