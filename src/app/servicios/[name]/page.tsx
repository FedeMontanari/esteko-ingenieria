import { SERVICES } from "@/lib/constants/services";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Slash } from "lucide-react";
import { Metadata } from "next";
import ServiceContent from "./_components/service-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const service = SERVICES.find((service) => service.id === name);

  if (!service) {
    return notFound();
  }

  return {
    title: `${service.title}`,
    description: service.description,
    openGraph: {
      images: service.image.src,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title}`,
      description: service.description,
      images: service.image.src,
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
        <video
          src={service.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          className="h-[400px] w-full object-cover brightness-50 xl:h-[550px]"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 flex flex-col items-center justify-center text-center xl:text-start">
            <h1 className="text-4xl font-bold text-white xl:text-5xl">
              {service.title}
            </h1>
            <Breadcrumb className="mt-4 hidden xl:block">
              <BreadcrumbList className="flex flex-col items-center justify-center xl:flex-row">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="text-lg text-white hover:text-white/80"
                    href="/"
                  >
                    Inicio
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash className="text-primary" />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="text-lg text-white">
                  Servicios
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash className="text-primary" />
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
      <div className="w-full py-12 xl:py-24">
        <ServiceContent service={service} />
      </div>
    </main>
  );
}
