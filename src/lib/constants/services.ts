import bim from "@/assets/images/services/general/bim.png";
import structuralCalculation from "@/assets/images/services/general/structural-calculation.png";
import constructionManagement from "@/assets/images/services/general/construction-management.png";
import dronePhotography from "@/assets/images/services/general/drone-photography.png";

import bimLogo from "@/assets/images/services/logos/bim-logo.svg";
import structuralCalculationLogo from "@/assets/images/services/logos/structural-calculation-logo.svg";
import constructionManagementLogo from "@/assets/images/services/logos/management-logo.svg";
import dronePhotographyLogo from "@/assets/images/services/logos/drone-logo.svg";
import { StaticImageData } from "next/image";

export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  image: StaticImageData;
  href: string;
  logo: StaticImageData;
  legend: string;
  carouselImages: StaticImageData[];
  heroVideo: string;
}

const heroVideoSrc = "/services-hero.mp4";

export const SERVICES: Service[] = [
  {
    id: "consultoria-bim",
    title: "Consultoría B.I.M",
    description:
      "Modelado, gestión y coordinación B.I.M. para mejorar el diseño, planificación y ejecución de proyectos.",
    items: [
      "Modelado 3D de arquitectura, estructuras e instalaciones.",
      "Coordinación y detección de interferencias.",
      "Gestión de información y documentación técnica.",
      "Optimización de procesos constructivos.",
      "Generación de planos y mediciones automatizadas.",
      "Implementación y capacitación en metodología BIM.",
    ],
    image: bim,
    href: "/servicios/consultoria-bim",
    logo: bimLogo,
    legend: "Optimiza tus proyectos con nuestra Consultoría BIM",
    carouselImages: [bim, bim, bim, bim, bim],
    heroVideo: heroVideoSrc,
  },
  {
    id: "calculo-estructural",
    title: "Cálculo estructural",
    description:
      "Análisis y diseño estructural para todo tipo de obras civiles, cumpliendo con la normativa vigente.",
    items: [
      "Diseño y verificación de estructuras de hormigón, acero y madera",
      "Análisis sísmico y de cargas según normativas vigentes",
      "Optimización de materiales y costos de construcción",
      "Modelado y simulaciones estructurales avanzadas",
      "Generación de planos y memorias de cálculo",
    ],
    image: structuralCalculation,
    href: "/servicios/calculo-estructural",
    logo: structuralCalculationLogo,
    legend: "Seguridad y eficiencia en cada estructura",
    carouselImages: [
      structuralCalculation,
      structuralCalculation,
      structuralCalculation,
      structuralCalculation,
      structuralCalculation,
      structuralCalculation,
      structuralCalculation,
    ],
    heroVideo: heroVideoSrc,
  },
  {
    id: "direccion-y-asesoramiento",
    title: "Direccion y asesoramiento",
    description:
      "Dirección de obra, asesoramiento técnico, control de calidad y seguimiento de obras.",
    items: [
      "Supervisión y gestión integral de obras",
      "Control de calidad en materiales y procesos constructivos",
      "Cumplimiento de normativas y seguridad en obra",
      "Asesoramiento técnico para optimización de costos y tiempos",
      "Coordinación de contratistas y logística de obra",
    ],
    image: constructionManagement,
    href: "/servicios/direccion-y-asesoramiento",
    logo: constructionManagementLogo,
    legend: "Gestión experta para el éxito de tu proyecto",
    carouselImages: [
      constructionManagement,
      constructionManagement,
      constructionManagement,
      constructionManagement,
      constructionManagement,
      constructionManagement,
    ],
    heroVideo: heroVideoSrc,
  },
  {
    id: "fotografia-con-drones",
    title: "Fotogrametría con drones",
    description:
      "Digitalización de obras y terrenos para el análisis y toma de decisiones",
    items: [
      "Levantamientos topográficos de alta precisión",
      "Modelado 3D y generación de ortomosaicos",
      "Monitoreo y seguimiento de avance de obras",
      "Cálculo de volúmenes y mediciones geoespaciales",
      "Inspección técnica con imágenes aéreas de alta resolución",
    ],
    image: dronePhotography,
    href: "/servicios/fotografia-con-drones",
    logo: dronePhotographyLogo,
    legend: "Percisión y eficiencia en el levantamiento de datos",
    carouselImages: [
      dronePhotography,
      dronePhotography,
      dronePhotography,
      dronePhotography,
      dronePhotography,
    ],
    heroVideo: heroVideoSrc,
  },
];
