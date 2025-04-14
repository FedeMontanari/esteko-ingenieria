import { MetadataRoute } from "next";

export const dynamic = "force-static";

export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/contacto"],
    },
    sitemap: "https://www.estekoingenieria.com/sitemap.xml",
  };
}
