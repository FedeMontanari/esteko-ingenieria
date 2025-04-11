import Image from "next/image";
import bim from "@/assets/images/services/general/bim.png";
import structuralCalculation from "@/assets/images/services/general/structural-calculation.png";
import constructionManagement from "@/assets/images/services/general/construction-management.png";
import dronePhotography from "@/assets/images/services/general/drone-photography.png";

const services = [
  {
    title: "Consultoría BIM",
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

export default function ServicesSection() {
  return (
    <div className="flex flex-col flex-wrap w-full my-12 items-center justify-center">
      <h2 className="text-5xl font-extrabold">Nuestros Servicios</h2>
      <div className="w-full flex flex-col items-center justify-center gap-12 mt-24">
        {services.map((service, i) => (
          <div
            className={`flex items-center justify-center ${
              i % 2 !== 0 ? "flex-row" : "flex-row-reverse"
            }`}
            key={i}
          >
            <div className="w-1/2">
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
              <ul className="list-disc list-inside">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <Image
              src={service.image}
              alt={service.title}
              width={640}
              height={640}
              className="w-1/2 object-cover max-w-[640px] max-h-[640px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
