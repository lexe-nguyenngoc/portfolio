import type { MetadataRoute } from "next";

import { DOMAIN_NAME } from "@/constants/configs";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/"
    },
    sitemap: `${DOMAIN_NAME}/sitemap.xml`
  };
}
