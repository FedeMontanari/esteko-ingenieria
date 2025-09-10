"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { ABOUT_US } from "@/lib/constants/about-us";

export default function AboutUsSection() {
  const isDesktop = useMediaQuery("(min-width: 1454px)");
  return (
    <div className="py-12">
      {isDesktop ? (
        <div className="bg-primary my-24 flex h-[500px] w-full flex-col items-start justify-center pl-32">
          <p className="font-cooper pb-4 font-semibold text-white">
            Sobre Nosotros
          </p>
          <h3 className="font-cooper text-5xl text-white">
            ¿POR QUE ELEGIR
            <br />
            <span className="font-akira px-1 text-7xl">ESTEKO</span>?
          </h3>
          <div className="border-primary absolute left-[70%] w-[700px] -translate-x-1/2 border-2 bg-[#303030] p-12 px-24 text-lg text-white">
            <p className="whitespace-pre-line">{ABOUT_US}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="my-24 flex h-fit w-full flex-col flex-wrap items-center">
            <div className="flex w-full items-center justify-center">
              <h3 className="font-cooper text-4xl font-bold">
                Porque{" "}
                <span className="font-akira text-primary text-4xl">ESTEKO</span>
              </h3>
            </div>
            <p className="border-primary mx-4 mt-10 border-2 p-5 text-center text-lg whitespace-pre-line">
              {ABOUT_US}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
