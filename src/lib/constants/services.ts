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

export const SERVICES: Service[] = [
  {
    id: "consultoria-bim",
    title: "Consultoría B.I.M",
    description:
      "Modelado, gestión y coordinación B.I.M. para mejorar el diseño, planificación y ejecución de proyectos.",
    items: [
      "Modelado y coordinación BIM en todas las etapas del proyecto: diseño, construcción y operación.",
      "Implementación de flujos colaborativos y detección temprana de interferencias (Clash Detection).",
      "Integración de relevamientos con drones para la generación de modelos As-Built precisos y actualizados.",
      "Generación de documentación técnica, planificación 4D y análisis de costos 5D.",
      "Acompañamiento estratégico en procesos de adopción BIM para estudios, desarrolladoras y constructoras.",
    ],
    image: bim,
    href: "/servicios/consultoria-bim",
    logo: bimLogo,
    legend: "Optimiza tus proyectos con nuestra Consultoría BIM",
    carouselImages: [bim, bim, bim, bim, bim],
    heroVideo: "/bim-hero.webm",
  },
  {
    id: "calculo-estructural",
    title: "Cálculo estructural",
    description:
      "Análisis y diseño estructural para todo tipo de obras civiles, cumpliendo con la normativa vigente.",
    items: [
      "Análisis, diseño y verificación estructural para obras civiles, industriales y residenciales, abarcando sistemas de hormigón armado, steel frame, wood frame, paneles SIP y estructuras mixtas.",
      "Optimización estructural orientada a la eficiencia constructiva, minimización de desperdicios y reducción de costos.",
      "Desarrollo completo de documentación técnica: planos estructurales, detalles constructivos, memorias de cálculo y cómputos de materiales.",
      "Elaboración de informes técnicos e inspecciones estructurales en obra.",
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
    heroVideo: "/structural-calculation-hero.webm",
  },
  {
    id: "direccion-y-asesoramiento",
    title: "Direccion y asesoramiento",
    description:
      "Dirección de obra, asesoramiento técnico, control de calidad y seguimiento de obras.",
    items: [
      "Supervisión técnica durante la ejecución para garantizar calidad y cumplimiento del proyecto.",
      "Control de calidad en materiales y procesos constructivos.",
      "Revisión de documentación y verificación en campo de estructuras y procesos constructivos.",
      "Coordinación con contratistas y equipos técnicos para una ejecución eficiente y segura.",
      "Control de avances, cumplimiento normativo y asistencia en toma de decisiones técnicas en obra.",
      "Asesoramiento técnico para optimización de costos y tiempos.",
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
    heroVideo: "/construction-management-hero.webm",
  },
  {
    id: "fotografia-con-drones",
    title: "Fotogrametría con drones",
    description:
      "Digitalización de obras y terrenos para el análisis y toma de decisiones.",
    items: [
      "Relevamiento aéreo de terrenos y obras para digitalización y análisis técnico.",
      "Generación de nubes de puntos, ortomosaicos, modelos digitales de terreno (DTM) y de elevación (DSM).",
      "Medición de acopios, control de volúmenes y elaboración de informes de producción en canteras, plantas de hormigón, operaciones mineras y proyectos energéticos.",
      "Seguimiento de obra mediante vuelos periódicos para control de avance y comparación con planificación.",
      "Documentación AS-BUILT para registrar el estado actual de edificaciones y estructuras.",
      "Cálculo y verificación de movimientos de suelo para planificación y control de ejecución.",
      "Inspección técnica en líneas eléctricas y zonas de difícil acceso.",
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
    heroVideo: "/drone-photography-hero.webm",
  },
];
