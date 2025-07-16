import type { MetadataRoute } from "next";

import { DOMAIN_NAME } from "@/constants/configs";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN_NAME,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
