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
import { Metadata } from "next";
import { PageProps } from "../../../../.next/types/app/servicios/[name]/page";
import ServiceContent from "./_components/service-content";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const service = SERVICES.find((service) => service.id === params.name);

  if (!service) {
    return notFound();
  }

  return {
    title: `${service.title} | Esteko Ingeniería`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Esteko Ingeniería`,
      description: service?.description,
    },
  };
}

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
      {/* Hero section */}
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
                    className="text-white hover:text-white/80 text-lg"
                    href="/"
                  >
                    Inicio
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="text-white text-lg">
                  Servicios
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="text-primary text-lg font-bold">
                  {service.title}
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
      </div>

      {/* Service content section */}
      <div className="w-full py-24">
        <ServiceContent service={service} />
      </div>
    </main>
  );
}
