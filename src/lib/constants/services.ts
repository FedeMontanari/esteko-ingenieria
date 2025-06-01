import bim from "@/assets/images/services/general/bim.png";
import structuralCalculation from "@/assets/images/services/general/structural-calculation.png";
import constructionManagement from "@/assets/images/services/general/construction-management.png";
import dronePhotography from "@/assets/images/services/general/drone-photography.png";

import bimLogo from "@/assets/images/services/logos/bim-logo.svg";
import structuralCalculationLogo from "@/assets/images/services/logos/structural-calculation-logo.svg";
import constructionManagementLogo from "@/assets/images/services/logos/management-logo.svg";
import dronePhotographyLogo from "@/assets/images/services/logos/drone-logo.svg";
import { StaticImageData } from "next/image";

export interface Service extends ServiceLanding {
  items: string[];
  href: string;
  logo: StaticImageData;
  legend: string;
  carouselImages: StaticImageData[];
  heroVideo: string;
  prosTitle: string;
  pros: string[];
}

export interface ServiceLanding {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
}

export const SERVICES: Service[] = [
  {
    id: "consultoria-bim",
    title: "Consultoría B.I.M",
    description: `En Esteko brindamos un servicio integral de consultoría BIM, orientado a optimizar la planificación, el diseño, la ejecución y la operación de proyectos mediante la digitalización de la información constructiva. Nuestra propuesta combina ingeniería aplicada, experiencia en obra y dominio de herramientas digitales, facilitando la toma de decisiones y minimizando riesgos en cada etapa del ciclo de vida del proyecto.
Trabajamos junto a estudios de arquitectura, desarrolladoras, constructoras y organismos técnicos, acompañando la implementación de metodologías colaborativas, estándares internacionales y flujos de trabajo eficientes, estructurados en torno al uso de modelos digitales consistentes y actualizados.
`,
    items: [
      "Modelado y coordinación BIM multidisciplinaria, desde fases tempranas de diseño hasta construcción y operación, asegurando modelos coherentes y actualizados.",
      "Detección temprana de interferencias (Clash Detection) entre disciplinas, previniendo errores en obra y reduciendo costos asociados a retrabajos.",
      "Documentación técnica automatizada, listas para obra y adaptadas a cada etapa del proyecto, con control de versiones y consistencia gráfica.",
      "Planificación 4D y análisis de costos 5D, para evaluar cronogramas, secuencias constructivas y presupuestos desde el entorno digital.",
      "Generación de modelos As-Built precisos, integrando relevamientos con drones y escaneo 3D, ideales para documentación de obra, certificaciones o mantenimiento futuro.",
      "Estandarización de procesos BIM, definición de protocolos, plantillas, niveles de desarrollo (LOD) y estructuración de flujos de trabajo internos.",
    ],
    image: bim,
    href: "/servicios/consultoria-bim",
    logo: bimLogo,
    legend: "Optimiza tus proyectos con nuestra Consultoría BIM",
    carouselImages: [bim, bim, bim, bim, bim],
    heroVideo: "/bim-hero.webm",
    prosTitle: "nuetra consultoría BIM",
    pros: [
      "Mayor eficiencia técnica y reducción de tiempos en diseño y ejecución.",
      "Prevención de errores y conflictos en obra mediante coordinación anticipada.",
      "Toma de decisiones fundamentadas gracias a información precisa y centralizada.",
      "Ahorro en costos de materiales, mano de obra y logística.",
      "Mejora en la comunicación entre equipos de trabajo, contratistas y dirección de obra.",
      "Mayor control y trazabilidad en cada fase del proyecto.",
      "Base sólida para implementar mantenimiento predictivo y gestión operativa de la obra una vez finalizada.",
    ],
  },
  {
    id: "calculo-estructural",
    title: "Cálculo estructural",
    description: `Brindamos soluciones estructurales integrales para obras civiles, industriales y residenciales, garantizando seguridad, eficiencia y cumplimiento normativo. Nuestro enfoque combina conocimiento técnico especializado con herramientas digitales avanzadas para ofrecer estructuras optimizadas y confiables.
Diseñamos y verificamos estructuras para todo tipo de sistemas constructivos, incluyendo naves industriales, estructuras de acero, steel frame, wood frame, paneles SIP, estructuras de hormigón armado (in situ o premoldeado) y soluciones mixtas como acero-hormigón o madera-hormigón. Adaptamos nuestros métodos de cálculo y documentación a las particularidades de cada sistema, asegurando coherencia técnica y constructiva en cada proyecto.
`,
    items: [
      "Análisis, dimensionamiento y verificación estructural conforme a normativas locales.",
      "Optimización estructural orientada a la eficiencia constructiva: minimización de desperdicios, racionalización de materiales y reducción de costos sin comprometer la seguridad.",
      "Modelado estructural y simulaciones avanzadas para evaluar el comportamiento ante cargas estáticas, dinámicas y sísmicas.",
      "Generación de documentación técnica completa: planos estructurales, detalles constructivos, memorias de cálculo y cómputos de materiales listos para obra.",
      "Elaboración de informes técnicos e inspecciones estructurales en obra, para evaluar el cumplimiento, identificar patologías o acompañar procesos de certificación.",
      "Integración con metodología BIM, facilitando la coordinación entre disciplinas y asegurando coherencia entre los modelos estructurales y arquitectónicos.",
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
    prosTitle: "nuestro diseño estructural",
    pros: [
      "Diseño estructural eficiente, alineado con los requerimientos específicos de cada proyecto.",
      "Mayor previsibilidad de costos y tiempos en obra gracias al análisis detallado.",
      "Reducción de errores y conflictos en campo mediante documentación precisa.",
      "Acompañamiento profesional en todas las fases del proyecto, desde el anteproyecto hasta la obra finalizada.",
      "Respuesta rápida y técnica ante modificaciones o adaptaciones requeridas por el cliente o por condiciones de obra.",
    ],
  },
  {
    id: "direccion-y-asesoramiento",
    title: "Direccion y asesoramiento Técnico",
    description: `Ofrecemos dirección técnica y asesoramiento especializado durante la ejecución de la obra, garantizando el cumplimiento de las especificaciones del proyecto, la normativa vigente y los estándares de calidad. Nuestra intervención permite anticipar conflictos, reducir errores constructivos y mantener un control efectivo sobre los procesos de ejecución.
Nos involucramos activamente en cada etapa, brindando soporte técnico en tiempo real, supervisando el avance y coordinando la interacción entre los distintos rubros involucrados.
`,
    items: [
      "Dirección técnica de obra, con seguimiento de avance, control de calidad y verificación de cumplimiento de especificaciones técnicas.",
      "Asesoramiento estructural y constructivo en obra, ante modificaciones, interferencias o situaciones imprevistas.",
      "Gestión de contratistas y coordinación entre rubros, asegurando el correcto desarrollo del cronograma de obra.",
      "Revisión y aprobación de documentación ejecutiva, adaptaciones de proyecto y control de entregables técnicos.",
      "Elaboración de informes técnicos, actas de inspección y certificaciones conforme a los avances de obra.",
      "Auditorías técnicas y asesoramiento a estudios, desarrolladoras o inversores en etapas previas a la ejecución.",
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
    prosTitle: "nuestro acompañamiento técnico",
    pros: [
      "Mayor control sobre la calidad y seguridad en obra.",
      "Reducción de errores constructivos, retrabajos y costos asociados.",
      "Soporte técnico continuo para una toma de decisiones fundamentada.",
      "Coordinación fluida entre proyecto y ejecución, minimizando desvíos.",
      "Mejores resultados constructivos y cumplimiento de plazos pactados.",
    ],
  },
  {
    id: "fotografia-con-drones",
    title: "Fotogrametría con drones",
    description: `Aplicamos tecnología de drones para realizar relevamientos topográficos y estructurales de alta precisión, generando modelos digitales e información técnica esencial para el análisis, la planificación y el control de obras e infraestructuras.
Nuestro servicio combina experiencia en ingeniería civil con técnicas avanzadas de fotogrametría, ofreciendo productos ajustados a cada etapa del proyecto, desde estudios preliminares hasta certificación final.
`,
    items: [
      "Relevamiento aéreo de terrenos y estructuras mediante drones de alta precisión.",
      "Generación de nubes de puntos, ortomosaicos, modelos digitales de elevación (DSM) y terreno (DTM).",
      "Medición volumétrica de acopios, control de producción y elaboración de informes en canteras, plantas de hormigón, minería y energía.",
      "Seguimiento de obra a través de vuelos periódicos, con control de avance y comparación con cronogramas.",
      "Documentación As-Built mediante modelos 3D y ortoimágenes que reflejan el estado real de la obra.",
      "Cálculo y verificación de movimientos de suelos para control de ejecución y planificación de tareas.",
      "Inspección técnica de líneas eléctricas, cubiertas, estructuras elevadas y zonas inaccesibles.",
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
    prosTitle: "nuestra fotogrametría aérea",
    pros: [
      "Información actualizada y precisa para decisiones técnicas fundamentadas.",
      "Mayor control sobre el avance de obra y las desviaciones respecto al proyecto.",
      "Reducción de tiempos y costos en relevamientos tradicionales.",
      "Seguridad en inspecciones de difícil acceso sin necesidad de intervención manual.",
    ],
  },
];

export const SERVICES_LANDING: ServiceLanding[] = [
  {
    id: "consultoria-bim",
    title: "Consultoría B.I.M",
    description:
      "Modelado, gestión y coordinación de modelos bajo metodología BIM para optimizar el diseño, la planificación y la ejecución de proyectos, integrando procesos colaborativos y soluciones digitales para la construcción.",
    image: bim,
  },
  {
    id: "calculo-estructural",
    title: "Cálculo estructural",
    description:
      "Cálculo y diseño estructural conforme a normativa vigente, orientado a maximizar la eficiencia constructiva y el uso racional de recursos en proyectos civiles, industriales y residenciales.",
    image: structuralCalculation,
  },
  {
    id: "gestion-de-proyectos",
    title: "Gestión de proyectos",
    description:
      "Acompañamiento técnico integral durante la obra, con control de calidad y dirección profesional para asegurar estructuras seguras, obras bien ejecutadas y en cumplimiento con la normativa vigente.",
    image: constructionManagement,
  },
  {
    id: "fotografia-con-drones",
    title: "Fotogrametría con drones",
    description:
      "Relevamientos aéreos de alta precisión para digitalización de obras, control de avance, documentación As-Built y análisis técnico de terrenos y estructuras.",
    image: dronePhotography,
  },
];
