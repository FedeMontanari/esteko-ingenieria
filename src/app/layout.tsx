import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Image from "next/image";

const ENV = process.env.NODE_ENV;

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Esteko Ingeniería",
  description: "Esteko Ingeniería",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (ENV === "production") {
    return (
      <html lang="es">
        <body
          className={`${montserrat.variable} w-full h-full flex items-center justify-center bg-foreground overflow-hidden`}
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
    <html lang="es">
      <body className={`antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
