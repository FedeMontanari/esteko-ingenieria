"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { ABOUT_US } from "@/lib/constants/about-us";

export default function AboutUsSection() {
  const isDesktop = useMediaQuery("(min-width: 1454px)");
  return (
    <div className="py-12">
      {isDesktop ? (
        <div className="bg-primary my-24 flex h-[500px] w-1/2 items-center justify-start px-12">
          <h3 className="font-akira text-4xl font-semibold text-white">
            PORQUE ESTEKO
          </h3>
          <div className="border-primary absolute left-[60%] w-1/3 -translate-x-1/2 border-2 bg-white p-24">
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
