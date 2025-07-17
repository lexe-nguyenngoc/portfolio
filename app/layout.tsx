import type { Metadata } from "next";
import { Roboto, JetBrains_Mono as JetBrainsMono } from "next/font/google";

import { DOMAIN_NAME } from "@/constants/configs";

import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
});

const jetbrainsMono = JetBrainsMono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Nguyen Ngoc Le | Front-end Engineer | React, Next.js, Performance",
  description:
    "Explore Nguyen Ngoc Le's portfolio, a front-end developer specializing in React, Next.js, and performance optimization. View real-world code projects and innovative solutions",
  keywords: ["frontend developer", "react developer", "nextjs", "typescript", "portfolio", "web developer", "ui/ux"],
  authors: [{ name: "Nguyen Ngoc Le" }],
  creator: "Nguyen Ngoc Le",
  publisher: "Nguyen Ngoc Le",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL(DOMAIN_NAME),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Nguyen Ngoc Le - Frontend Engineer Portfolio",
    description: "Frontend Engineer Portfolio — React, Next.js, TypeScript & UI/UX Specialist",
    url: DOMAIN_NAME,
    siteName: "Nguyen Ngoc Le Portfolio",
    images: [
      {
        url: "/social.jpeg",
        width: 1200,
        height: 630,
        alt: "Nguyen Ngoc Le - Frontend Engineer Portfolio"
      }
    ],
    locale: "vi_VN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Ngoc Le - Frontend Engineer Portfolio",
    description: "Frontend Engineer Portfolio — React, Next.js, TypeScript & UI/UX Specialist",
    images: ["/social.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${roboto.variable} ${jetbrainsMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
