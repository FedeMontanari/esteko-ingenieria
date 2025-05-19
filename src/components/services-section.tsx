"use client";

import { useIsDesktop } from "@/hooks/use-media-query";
import { Service, SERVICES } from "@/lib/constants/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServicesSection() {
  const isDesktop = useIsDesktop();
  return (
    <div
      className="mx-auto flex w-full max-w-7xl flex-col flex-wrap items-center justify-center xl:pt-12"
      id="services"
    >
      <h2 className="font-cooper text-3xl font-extrabold md:text-5xl">
        Nuestros Servicios
      </h2>
      <div className="relative mt-12 flex w-full flex-col items-center justify-center gap-12 xl:mt-24">
        {SERVICES.map((service, i) => (
          <React.Fragment key={i}>
            {isDesktop ? (
              <ServiceItemCard service={service} i={i} />
            ) : (
              <ServiceItemCardMobile service={service} />
            )}
          </React.Fragment>
        ))}
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
          <h3 className="font-cooper mb-4 text-3xl font-bold">
            {service.title}
          </h3>
          <p className="mb-4 text-sm italic">{service.description}</p>
          <ul className="list-inside list-disc font-semibold">
            {service.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        className="relative h-[400px] w-1/2 transition-all duration-200 hover:brightness-80"
        href={`/servicios/${service.id}`}
      >
        <Image
          src={service.image}
          alt={service.title}
          width={640}
          height={640}
          className="h-full w-full object-cover brightness-50"
        />
        <ItemCardFlare isOdd={isOdd} service={service} />
        <span
          className={`bg-primary absolute bottom-0 flex h-[60px] w-[calc(100%-150px)] items-center justify-center text-2xl font-bold text-white ${
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
      <div className="absolute inset-0 flex h-full items-center justify-center">
        <div
          className={`absolute top-0 right-0 z-10 flex h-full w-[170px] items-center justify-center bg-white ${
            isOdd ? "left-0" : "right-0"
          }`}
          style={{
            clipPath,
          }}
        />
        <div
          className={`absolute top-0 right-0 z-10 flex h-full w-[165px] flex-col items-center justify-between bg-black py-4 ${
            isOdd ? "left-0" : "right-0"
          }`}
          style={{
            clipPath,
          }}
        >
          <Image
            src={service.logo}
            alt={service.title}
            width={80}
            height={80}
            className={`absolute ${
              isOdd ? "bottom-5 left-5" : "right-5 bottom-5"
            }`}
          />
        </div>
      </div>
    </>
  );
}

function ServiceItemCardMobile({ service }: { service: Service }) {
  return (
    <div className="border-foreground mb-12 flex flex-col items-center justify-center border-y-2 last:mb-24 xl:border-y-0">
      <h3 className="font-cooper bg-primary w-full py-4 text-center text-2xl font-bold text-white">
        {service.title}
      </h3>
      <div className="relative w-full">
        <Image
          src={service.image}
          alt={service.title}
          width={320}
          height={320}
          className="h-full w-full object-cover brightness-50"
        />
        <p className="p-4 font-semibold">{service.description}</p>
        <ul className="list-inside list-disc pb-4 pl-8 font-semibold">
          {service.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link
          className="bg-primary flex h-[60px] w-full items-center justify-center text-2xl font-bold text-white"
          href={`/servicios/${service.id}`}
        >
          Conocer más
        </Link>
      </div>
    </div>
  );
}
