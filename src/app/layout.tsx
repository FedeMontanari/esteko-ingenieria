import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Image from "next/image";
import Footer from "@/components/footer";
import { cooper } from "@/assets/fonts/cooper";
import { Toaster } from "@/components/ui/sonner";
import { PostHogProvider } from "./providers";

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
  if (process.env.VERCEL_ENV === "production") {
    return (
      <html lang="es">
        <head>
          <meta
            name="google-site-verification"
            content="QuK6G-W3bxR028m6L8nTM_RAinuYRi8WEVYNyZuCyiM"
          />
        </head>
        <body
          className={`${montserrat.variable} ${akira.variable} ${cooper.variable} bg-foreground flex h-full w-full items-center justify-center overflow-hidden`}
        >
          <PostHogProvider>
            <h1 className="absolute bottom-12 text-2xl text-white">
              En Construcción
            </h1>
            <Image
              src="/soon.jpg"
              alt="Esteko Ingeniería"
              width={1013}
              height={1013}
            />
          </PostHogProvider>
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
        className={`antialiased ${montserrat.variable} ${akira.variable} ${cooper.variable} relative flex min-h-screen flex-col pb-[570px] sm:pb-[300px]`}
      >
        <PostHogProvider>
          <NavBar />
          {children}
          <Footer />
          <Toaster />
        </PostHogProvider>
      </body>
    </html>
  );
}
