"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { Separator } from "./ui/separator";

export default function AboutUsSection() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="py-12">
      {isDesktop ? (
        <div className="flex w-1/2 my-24 px-12 bg-primary h-[500px] items-center justify-start">
          <h3 className="text-4xl font-semibold font-akira text-white">
            PORQUE ESTEKO
          </h3>
          <div className="w-1/3 bg-white p-24 absolute left-[60%] -translate-x-1/2 border-primary border-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
              ea quia, accusamus officia quae iusto numquam obcaecati nulla id
              nemo laudantium provident repudiandae facere corrupti est sit
              quibusdam vero quisquam.
            </p>
          </div>
          {/* <div className="h-[200px] w-full flex flex-row">
            <div className="w-1/2 flex flex-col justify-center items-center">
              <h2 className="text-5xl font-bold font-cooper">
                Somos{" "}
                <span className="font-akira text-5xl text-primary">ESTEKO</span>
              </h2>
            </div>
            <div className="w-1/2 relative">
              <svg
                width="400"
                height="200"
                viewBox="0 0 400 100"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-full h-[200px] block"
              >
                <path
                  d="M399.5 0.5V99.5H1.20711L100.207 0.5H200H399.5Z"
                  stroke="#FA7B04"
                />
              </svg>

              <p className="w-3/4 absolute right-0 h-full py-4 pr-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus voluptatum quaerat ad a fugiat provident est voluptas
                cupiditate accusamus omnis sequi harum doloremque. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Magnam nam error
                maxime distinctio quasi dolorem enim assumenda quisquam beatae
                tempora a repudiandae quae, hic inventore libero dolor aliquid
                at optio. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Similique rerum tempore est facilis sequi commodi nam
                impedit. Odio, quibusdam repellendus consequuntur molestiae
                ipsum minus corporis omnis dolorem. Delectus, eos eligendi?
              </p>
            </div>
          </div>
          <div className="h-[200px] w-full flex flex-row">
            <div className="w-1/2 relative">
              <svg
                width="400"
                height="200"
                viewBox="0 0 400 100"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-full h-[200px] block scale-[-1]"
              >
                <path
                  d="M399.5 0.5V99.5H1.20711L100.207 0.5H200H399.5Z"
                  stroke="#FA7B04"
                />
              </svg>
              <p className="w-3/4 py-4 pl-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                sunt sint, animi recusandae hic necessitatibus nemo? Asperiores,
                ratione officiis eum sed placeat et illo doloribus dolorem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                ipsum quia laudantium modi illum nesciunt cum. Assumenda dicta
                quos vero repudiandae? Est commodi, ea reiciendis porro nisi
                quos modi iusto. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Est perspiciatis minus pariatur necessitatibus
                quae tempora, optio incidunt possimus cumque corrupti. Non in
                incidunt dicta dolorem eius exercitationem rem dignissimos
                voluptatem?
              </p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <Image
                src="/logo-primary.svg"
                alt="About Us"
                width={120}
                height={120}
              />
            </div>
          </div> */}
        </div>
      ) : (
        <>
          <div className="flex flex-col flex-wrap w-full my-24 h-fit">
            <div className="flex w-full items-center justify-around">
              <h2 className="text-4xl font-bold">
                Somos
                <br />
                <span className="font-akira text-4xl text-primary">ESTEKO</span>
              </h2>
              <Image
                src="/logo-primary.svg"
                alt="About Us"
                width={60}
                height={60}
              />
            </div>
            <div className="mt-4">
              <p className="px-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio aut, blanditiis omnis alias modi, obcaecati
                repellendus animi error harum natus deserunt. Repudiandae
                delectus soluta voluptatem perspiciatis accusantium. Officia,
                excepturi reiciendis.
              </p>
              <Separator className="bg-primary my-12" />
              <p className="px-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita a, quisquam ipsam sint nostrum mollitia dolor quae modi
                molestias consequatur ex, eos maiores officiis neque earum nemo
                aliquam, blanditiis dolore?
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
