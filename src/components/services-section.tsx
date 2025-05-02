"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Service, SERVICES } from "@/lib/constants/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServicesSection() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div
      className="flex flex-col flex-wrap w-full pt-12 items-center justify-center max-w-7xl mx-auto"
      id="services"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold font-cooper">
        Nuestros Servicios
      </h2>
      <div className="w-full flex flex-col items-center justify-center gap-12 relative mt-24">
        {/* <div className="absolute bg-[#1C1C1C] w-[6px] h-full" /> */}
        {SERVICES.map((service, i) => (
          <React.Fragment key={i}>
            {isDesktop ? (
              <ServiceItemCard service={service} i={i} />
            ) : (
              <ServiceItemCardMobile service={service} />
            )}
          </React.Fragment>
        ))}
        {/* <div className="absolute -bottom-12 bg-[#1C1C1C] w-[6px] h-full" /> */}
      </div>
    </div>
  );
}

function ServiceItemCard({ service, i }: { service: Service; i: number }) {
  const isOdd = i % 2 !== 0;
  return (
    <div
      className={`flex items-center justify-center ${
        isOdd ? "flex-row" : "flex-row-reverse"
      }`}
      key={i}
    >
      <div className="w-1/2">
        <div className="px-12">
          <h3 className="text-3xl font-bold mb-4 font-cooper">
            {service.title}
          </h3>
          <p className="text-sm mb-4">{service.description}</p>
          <ul className="list-disc list-inside">
            {service.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        className="relative w-1/2 h-[400px] hover:brightness-80 transition-all duration-200"
        href={`/servicios/${service.id}`}
      >
        <Image
          src={service.image}
          alt={service.title}
          width={640}
          height={640}
          className="object-cover brightness-50 h-full w-full"
        />
        <ItemCardFlare isOdd={isOdd} service={service} />
        <span
          className={`absolute bottom-0 w-[calc(100%-150px)] h-[60px] text-white text-2xl font-bold bg-primary flex items-center justify-center ${
            isOdd ? "right-0" : "left-0"
          }`}
        >
          Conocer más
        </span>
      </Link>
    </div>
  );
}

function ItemCardFlare({
  isOdd = false,
  service,
}: {
  isOdd?: boolean;
  service: Service;
}) {
  const clipPath = isOdd
    ? "polygon(100% 0, 75% 50%, 100% 100%, 0% 100%, 0% 50%, 0% 0%)"
    : "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)";
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center h-full">
        <div
          className={`bg-white w-[170px] h-full absolute right-0 top-0 flex items-center justify-center z-10 ${
            isOdd ? "left-0" : "right-0"
          }`}
          style={{
            clipPath,
          }}
        />
        <div
          className={`bg-black w-[165px] h-full absolute right-0 top-0 flex flex-col items-center justify-between py-4 z-10 ${
            isOdd ? "left-0" : "right-0"
          }`}
          style={{
            clipPath,
          }}
        >
          {/* <span
            className={`text-white text-7xl font-bold absolute top-5 ${
              isOdd ? "left-9" : "right-9"
            }`}
          >
            {i + 1}
          </span> */}
          <Image
            src={service.logo}
            alt={service.title}
            width={80}
            height={80}
            className={`absolute ${
              isOdd ? "left-5 bottom-5" : "right-5 bottom-5"
            }`}
          />
        </div>
      </div>
    </>
  );
}

function ServiceItemCardMobile({ service }: { service: Service }) {
  return (
    <div className="flex items-center justify-center flex-col px-4 mb-12 last:mb-24">
      <h3 className="text-2xl font-bold mb-4 font-cooper">{service.title}</h3>
      <Link
        className="relative w-full h-[350px] hover:brightness-80 transition-all duration-200"
        href={`/servicios/${service.id}`}
      >
        <Image
          src={service.image}
          alt={service.title}
          width={320}
          height={320}
          className="object-cover brightness-50 h-full w-full"
        />
        <div className="w-full h-[60px] text-white text-2xl font-bold bg-primary flex items-center justify-center">
          Conocer más
        </div>
        <ServiceItemCardMobileFlare service={service} />
      </Link>
    </div>
  );
}

function ServiceItemCardMobileFlare({ service }: { service: Service }) {
  return (
    <div className="absolute inset-0 h-full">
      <div
        className="bg-[#1C1C1C] w-[170px] h-1/3 absolute right-0 bottom-0 flex items-center justify-center z-10"
        style={{ clipPath: "polygon(100% 0, 20% 100%, 100% 100%)" }}
      />
      <Image
        src={service.logo}
        alt={service.title}
        width={60}
        height={60}
        className="absolute right-1 bottom-2 z-20"
      />
    </div>
  );
}
