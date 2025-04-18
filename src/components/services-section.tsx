import { SERVICES } from "@/lib/constants/services";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <div
      className="flex flex-col flex-wrap w-full pt-12 items-center justify-center"
      id="services"
    >
      <h2 className="text-5xl font-extrabold">Nuestros Servicios</h2>
      <div className="w-full flex flex-col items-center justify-center gap-12 mt-24">
        {SERVICES.map((service, i) => (
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
