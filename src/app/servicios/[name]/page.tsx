import Footer from "@/components/footer";
import { SERVICES } from "@/lib/constants/services";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Image from "next/image";
import { Slash } from "lucide-react";

export default async function ServicioPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const service = SERVICES.find((service) => service.id === name);

  if (!service) {
    return notFound();
  }

  return (
    <main className="min-h-screen w-full">
      <div className="relative w-full">
        <Image
          src={service.image}
          alt={service.title}
          width={1920}
          height={1080}
          className="w-full h-[400px] object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div
          className="bg-white w-[170px] h-full absolute right-0 top-0 flex items-center justify-center"
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0% 50%)",
          }}
        />
        <div
          className="bg-black w-[168px] h-full absolute right-0 top-0 flex items-center justify-center"
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0% 50%)",
          }}
        >
          <Image
            src={service.logo}
            alt={service.title}
            width={100}
            height={100}
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white">{service.title}</h1>
            <Breadcrumb className="mt-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="text-white hover:text-white/80"
                    href="/"
                  >
                    Inicio
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="text-white">
                  Servicios
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary font-bold text-xl">
                    {service.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
      </div>
      <div className="w-full py-24">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">{service.legend}</h2>
          <div className="pt-12 w-3/4">
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={450}
              className="float-left mr-12"
              style={{
                shapeOutside: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            />
            <p className="text-lg">{service.description}</p>
            <ul className="list-disc list-inside py-4">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, ex dolorem. Illum iusto necessitatibus voluptatem
              nobis, reiciendis quasi tenetur libero dolorem quia quas nostrum,
              delectus velit et ipsum excepturi debitis. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ipsa aliquam sint nam nisi
              ducimus officiis eligendi autem, facere saepe. Vitae itaque
              ratione illo possimus quibusdam ipsum quo iste accusamus
              doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quidem cupiditate, pariatur dolorum fuga perspiciatis sequi
              at iure quisquam praesentium asperiores, ad totam quam libero et a
              magni! Unde, laudantium eum! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ad temporibus, mollitia, aut sequi
              animi explicabo dolor provident nulla aperiam rerum tenetur
              incidunt dignissimos. Ea ab voluptate quae obcaecati sed corporis.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              dolor sit minima fugiat blanditiis soluta fugit, iusto officia
              delectus sed rerum harum eos voluptatem? Ipsam corporis quisquam
              soluta ipsa quam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio nihil, sunt vel odio enim officia neque
              labore deleniti assumenda iste dolorum fugiat? Veritatis molestiae
              amet dicta architecto aperiam exercitationem dolore.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
