"use client";

import { Service } from "@/lib/constants/services";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ServiceContent({ service }: { service: Service }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-2xl font-bold">{service.legend}</h2>
      <div className="w-full px-4 xl:w-3/4 xl:px-0 xl:pt-12">
        <Carousel
          setApi={setApi}
          className="w-full xl:float-left xl:mr-12 xl:w-1/2"
          style={{
            shapeOutside: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <CarouselContent>
            {service.carouselImages.map((image, index) => (
              <CarouselItem
                className="flex h-[400px] w-[600px] items-center justify-center hover:cursor-grab active:cursor-grabbing"
                key={index}
              >
                <Image src={image} alt={service.title} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex w-full justify-center py-1">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-[25px] w-full transition-colors xl:h-[50px] ${
                  index === current - 1 ? "bg-primary" : "bg-gray-400"
                } hover:bg-primary hover:cursor-pointer`}
                style={{
                  clipPath: `polygon(${
                    index === 0 ? "0" : "25%"
                  } 0%, 100% 0%, ${
                    index === count - 1 ? "100%" : "75%"
                  } 100%, 0% 100%)`,
                }}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
          <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 opacity-50 hover:cursor-pointer hover:opacity-100" />
          <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50 hover:cursor-pointer hover:opacity-100" />
        </Carousel>
        <p className="pt-4 text-start font-semibold xl:text-lg">
          {service.description}
        </p>
      </div>
      <div className="w-full px-4 xl:w-3/4 xl:px-0 xl:pt-12">
        <h3 className="text-start text-2xl font-bold">
          Nuestros servicios incluyen:
        </h3>
        <ul className="list-inside py-4 pl-4 font-semibold">
          {service.items.map((item) => (
            <li className="before:content-['-']" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <h3 className="text-start text-2xl font-bold">
          Beneficios de {service.prosTitle}:
        </h3>
        <ul className="list-inside py-4 pl-4 font-semibold">
          {service.pros.map((item) => (
            <li className="before:content-['-']" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
