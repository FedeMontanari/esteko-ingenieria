import bimLogo from "@/assets/images/services/logos/bim-logo.svg";
import structuralCalculationLogo from "@/assets/images/services/logos/structural-calculation-logo.svg";
import constructionManagementLogo from "@/assets/images/services/logos/management-logo.svg";
import dronePhotographyLogo from "@/assets/images/services/logos/drone-logo.svg";

// Import carousel images
import {
  bimCarouselImages,
  bimPortada,
  bimWpc1,
} from "@/assets/images/services/general/bim";
import {
  droneCarouselImages,
  droneMain,
  dronePortada,
} from "@/assets/images/services/general/drone";
import {
  structuralCarrouselImages,
  structuralRender,
} from "@/assets/images/services/general/structural";
import {
  managementCarrouselImages,
  management100705,
} from "@/assets/images/services/general/management";

import { StaticImageData } from "next/image";
import {
  constructionManagement,
  structuralCalculation,
} from "@/assets/images/services/general";

export interface Service extends ServiceLanding {
  items: {
    title: string;
    content: string;
  }[];
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
      {
        title: "Modelado y coordinación BIM",
        content:
          "Modelado y coordinación BIM multidisciplinaria, desde fases tempranas de diseño hasta construcción y operación, asegurando modelos coherentes y actualizados.",
      },
      {
        title: "Detección temprana de interferencias",
        content:
          "Clash Detection entre disciplinas, previniendo errores en obra y reduciendo costos asociados a retrabajos.",
      },
      {
        title: "Documentación técnica automatizada",
        content:
          "Documentación lista para obra y adaptada a cada etapa del proyecto, con control de versiones y consistencia gráfica.",
      },
      {
        title: "Planificación 4D y análisis 5D",
        content:
          "Evaluación de cronogramas, secuencias constructivas y presupuestos desde el entorno digital.",
      },
      {
        title: "Modelos As-Built",
        content:
          "Generación de modelos As-Built precisos, integrando relevamientos con drones y escaneo 3D, ideales para documentación de obra, certificaciones o mantenimiento futuro.",
      },
      {
        title: "Estandarización de procesos BIM",
        content:
          "Definición de protocolos, plantillas, niveles de desarrollo (LOD) y estructuración de flujos de trabajo internos.",
      },
    ],
    image: bimPortada,
    href: "/servicios/consultoria-bim",
    logo: bimLogo,
    legend: "Optimiza tus proyectos con nuestra consultoría B.I.M",
    carouselImages: bimCarouselImages,
    heroVideo: "/bim-hero.webm",
    prosTitle: "nuestra consultoría B.I.M",
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
      {
        title: "Cálculo estructural adaptado al diseño arquitectónico",
        content:
          "Análisis, dimensionamiento y verificación de estructuras conforme a normativas locales, asegurando la correcta adaptación a las propuestas arquitectónicas sin comprometer seguridad ni funcionalidad.",
      },
      {
        title: "Optimización de soluciones constructivas",
        content:
          "Desarrollo de propuestas orientadas a la eficiencia: reducción de desperdicios, racionalización de materiales y disminución de costos, garantizando estructuras seguras y viables en obra.",
      },
      {
        title: "Modelado estructural y simulaciones avanzadas",
        content:
          "Evaluación del comportamiento estructural ante cargas estáticas, dinámicas y sísmicas.",
      },
      {
        title: "Documentación técnica completa",
        content:
          "Planos estructurales, detalles constructivos, memorias de cálculo y cómputos de materiales listos para obra.",
      },
      {
        title: "Informes técnicos e inspecciones en obra",
        content:
          "Evaluación de cumplimiento, identificación de patologías y acompañamiento en procesos de certificación.",
      },
      {
        title: "Integración con metodología BIM",
        content:
          "Coordinación entre disciplinas, asegurando coherencia entre los modelos estructurales y arquitectónicos.",
      },
    ],
    image: structuralCalculation,
    href: "/servicios/calculo-estructural",
    logo: structuralCalculationLogo,
    legend: "Seguridad y eficiencia en cada estructura",
    carouselImages: structuralCarrouselImages,
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
    title: "Dirección y asesoramiento técnico",
    description: `Ofrecemos dirección técnica y asesoramiento especializado durante la ejecución de la obra, garantizando el cumplimiento de las especificaciones del proyecto, la normativa vigente y los estándares de calidad. Nuestra intervención permite anticipar conflictos, reducir errores constructivos y mantener un control efectivo sobre los procesos de ejecución.
Nos involucramos activamente en cada etapa, brindando soporte técnico en tiempo real, supervisando el avance y coordinando la interacción entre los distintos rubros involucrados.
`,
    items: [
      {
        title: "Dirección técnica de obra",
        content:
          "Seguimiento de avance, control de calidad y verificación del cumplimiento de especificaciones técnicas.",
      },
      {
        title: "Asesoramiento estructural y constructivo en obra",
        content:
          "Soporte especializado ante modificaciones, interferencias o situaciones imprevistas durante la ejecución.",
      },
      {
        title: "Gestión de contratistas y coordinación entre rubros",
        content:
          "Organización del trabajo en obra, asegurando la correcta secuencia de tareas y el cumplimiento del cronograma.",
      },
      {
        title: "Revisión y aprobación de documentación ejecutiva",
        content:
          "Control de planos, adaptaciones de proyecto y validación de entregables técnicos.",
      },
      {
        title: "Informes técnicos y certificaciones de obra",
        content:
          "Elaboración de actas de inspección, informes de avance y certificaciones según la ejecución.",
      },
      {
        title: "Auditorías técnicas para terceros",
        content:
          "Asesoramiento a estudios, desarrolladoras o inversores en etapas previas a la obra, evaluando viabilidad y riesgos técnicos.",
      },
    ],
    image: constructionManagement,
    href: "/servicios/direccion-y-asesoramiento",
    logo: constructionManagementLogo,
    legend: "Gestión experta para el éxito de tu proyecto",
    carouselImages: managementCarrouselImages,
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
      {
        title: "Relevamiento aéreo de terrenos y estructuras",
        content:
          "Captura de datos mediante drones de alta precisión para proyectos de ingeniería y construcción.",
      },
      {
        title: "Generación de modelos digitales y nubes de puntos",
        content:
          "Obtención de ortomosaicos, nubes de puntos, modelos digitales de elevación (DSM) y de terreno (DTM).",
      },
      {
        title: "Mediciones volumétricas y control de producción",
        content:
          "Cálculo de volúmenes, seguimiento de acopios y elaboración de informes en canteras, plantas de hormigón, minería y energía.",
      },
      {
        title: "Seguimiento de obra con vuelos periódicos",
        content:
          "Control de avance, comparación con cronogramas y documentación visual del progreso de obra.",
      },
      {
        title: "Documentación As-Built aérea",
        content:
          "Generación de modelos 3D y ortoimágenes que reflejan con precisión el estado real de la obra.",
      },
      {
        title: "Cálculo y verificación de movimientos de suelos",
        content:
          "Control de ejecución y planificación de tareas mediante análisis topográficos digitales.",
      },
      {
        title: "Inspección técnica en zonas críticas",
        content:
          "Relevamiento de líneas eléctricas, cubiertas, estructuras elevadas y áreas de difícil acceso.",
      },
    ],
    image: droneMain,
    href: "/servicios/fotografia-con-drones",
    logo: dronePhotographyLogo,
    legend: "Precisión y eficiencia en el levantamiento de datos",
    carouselImages: droneCarouselImages,
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
    image: bimWpc1,
  },
  {
    id: "calculo-estructural",
    title: "Cálculo estructural",
    description:
      "Cálculo y diseño estructural conforme a normativa vigente, orientado a maximizar la eficiencia constructiva y el uso racional de recursos en proyectos civiles, industriales y residenciales.",
    image: structuralRender,
  },
  {
    id: "direccion-y-asesoramiento",
    title: "Dirección de obra y asesoramiento técnico",
    description:
      "Acompañamiento técnico integral durante la obra, con control de calidad y dirección profesional para garantizar estructuras seguras, obras bien ejecutadas y en cumplimiento con la normativa vigente.",
    image: management100705,
  },
  {
    id: "fotografia-con-drones",
    title: "Fotogrametría con drones",
    description:
      "Relevamientos aéreos de alta precisión para digitalización de obras, control de avance, documentación As-Built y análisis técnico de terrenos y estructuras.",
    image: dronePortada,
  },
];
