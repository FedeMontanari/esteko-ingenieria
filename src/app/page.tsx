import { Button } from "@/components/ui/button";
import Link from "next/link";
import AboutUsSection from "@/components/about-us-section";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="sr-only">Esteko Ingeniería</h1>
      <div className="flex flex-col items-center justify-center">
        {/* Hero */}
        <div className="relative w-screen h-screen flex flex-col items-center justify-start md:block px-4 md:px-0">
          <div className="inset-0 -z-10 absolute">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover brightness-20"
            >
              <source src="/landing-hero.webm" type="video/webm" />
            </video>
          </div>
          {/* <div
            className="absolute inset-0 -z-10 bg-black/60 w-[60%] h-full"
            style={{
              clipPath: "polygon(0 0, 100% 0%, 80% 100%, 0% 100%)",
            }}
          />
          <div
            className="absolute inset-0 -z-10 bg-black/60 w-[80%] h-full"
            style={{
              0clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)",
            }}
          /> */}
          <div className="w-full md:w-1/2 md:px-12 flex flex-col items-center justify-center h-full">
            {/* <Image
              src="/hero.png"
              alt="Esteko Ingeniería"
              width={600}
              height={450}
              className="w-2/3 h-2/3 mx-auto py-24 md:w-3/4 md:h-3/4"
            /> */}
            <p className="text-white text-start text-5xl font-semibold xxl:leading-tight w-full xxl:w-3/4 mt-24">
              Soluciones <span className="text-primary">innovadoras</span>,{" "}
              <span className="text-primary">precisas</span> y{" "}
              <span className="text-primary">modernas</span> para potenciar tus
              proyectos de ingeniería.
            </p>
            <div className="flex flex-col gap-4 items-start justify-start py-12 w-full xxl:w-3/4 space-y-4">
              <Button className="text-lg font-bold px-12 w-1/2" asChild>
                <Link href="/contacto">Trabajemos Juntos</Link>
              </Button>
              <Button
                variant="ghost"
                className="text-lg font-bold px-12 text-white border border-primary w-1/2"
                asChild
              >
                <Link href="/#services">Investiga</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <AboutUsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
