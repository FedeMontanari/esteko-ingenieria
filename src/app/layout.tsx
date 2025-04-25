import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Image from "next/image";
import Footer from "@/components/footer";

const ENV = process.env.NODE_ENV;

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const akira = localFont({
  src: "../assets/fonts/akira_expanded.otf",
  variable: "--font-akira",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.estekoingenieria.com/"),
  title: {
    default: "Esteko Ingeniería",
    template: "%s | Esteko Ingeniería",
  },
  description:
    "Esteko Ingeniería, Ingeniería y Construcción. Ofrecemos soluciones integrales en ingeniería y construcción.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (ENV === "production") {
    return (
      <html lang="es">
        <head>
          <meta
            name="google-site-verification"
            content="QuK6G-W3bxR028m6L8nTM_RAinuYRi8WEVYNyZuCyiM"
          />
        </head>
        <body
          className={`${montserrat.variable} ${akira.variable} w-full h-full flex items-center justify-center bg-foreground overflow-hidden bg-gradient`}
        >
          <h1 className="text-white text-2xl absolute bottom-12">
            En Construcción
          </h1>
          <Image
            src="/soon.jpg"
            alt="Esteko Ingeniería"
            width={1013}
            height={1013}
          />
        </body>
      </html>
    );
  }

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="QuK6G-W3bxR028m6L8nTM_RAinuYRi8WEVYNyZuCyiM"
        />
      </head>
      <body
        className={`antialiased ${montserrat.variable} ${akira.variable} flex flex-col min-h-screen relative pb-[340px]`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
