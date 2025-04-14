import { SERVICES } from "@/lib/constants/services";
import { MetadataRoute } from "next";

const BASE_URL = "https://www.estekoingenieria.com";

const SERVICES_URLS = SERVICES.map((service) => ({
  url: `${BASE_URL}/servicios/${service.id}`,
  lastModified: new Date().toISOString(),
  changeFrequency: "daily" as const,
  priority: 0.9,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...SERVICES_URLS,
  ];
}
