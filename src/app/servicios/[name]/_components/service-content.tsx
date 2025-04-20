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
      <h2 className="text-2xl font-bold">{service.legend}</h2>
      <div className="pt-12 w-3/4">
        <Carousel
          setApi={setApi}
          className="float-left mr-12 w-1/2"
          style={{
            shapeOutside: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <CarouselContent>
            {service.carouselImages.map((image, index) => (
              <CarouselItem
                className="h-[400px] w-[600px] flex items-center justify-center"
                key={index}
              >
                <Image src={image} alt={service.title} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="w-full flex justify-center py-1">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-[50px] w-full transition-colors ${
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
          <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 opacity-50 hover:opacity-100" />
          <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50 hover:opacity-100" />
        </Carousel>
        <p className="text-lg">{service.description}</p>
        <ul className="list-disc list-inside py-4">
          {service.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ex
          dolorem. Illum iusto necessitatibus voluptatem nobis, reiciendis quasi
          tenetur libero dolorem quia quas nostrum, delectus velit et ipsum
          excepturi debitis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsa aliquam sint nam nisi ducimus officiis eligendi autem,
          facere saepe. Vitae itaque ratione illo possimus quibusdam ipsum quo
          iste accusamus doloribus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quidem cupiditate, pariatur dolorum fuga
          perspiciatis sequi at iure quisquam praesentium asperiores, ad totam
          quam libero et a magni! Unde, laudantium eum! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ad temporibus, mollitia, aut sequi
          animi explicabo dolor provident nulla aperiam rerum tenetur incidunt
          dignissimos. Ea ab voluptate quae obcaecati sed corporis. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Optio dolor sit minima
          fugiat blanditiis soluta fugit, iusto officia delectus sed rerum harum
          eos voluptatem? Ipsam corporis quisquam soluta ipsa quam. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Optio nihil, sunt vel
          odio enim officia neque labore deleniti assumenda iste dolorum fugiat?
          Veritatis molestiae amet dicta architecto aperiam exercitationem
          dolore.
        </p>
      </div>
    </div>
  );
}
