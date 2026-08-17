/**
 * Site configuration for metadata and SEO
 */
export const siteConfig = {
  name: "Portfolio",
  description: "A premium portfolio showcasing technical expertise, projects, and experience in modern web development.",
  url: "https://yourportfolio.com",
  author: "Portfolio Developer",
  metadataBase: "https://yourportfolio.com",
  keywords: [
    "portfolio",
    "developer",
    "fullstack",
    "web development",
    "SallAgri",
    "SALL-Bondo",
    "PT INKA",
    "Laravel",
    "React",
    "TypeScript",
    "Next.js",
  ],
  social: {
    twitter: "@yourhandle",
    github: "yourusername",
    linkedin: "yourlinkedin",
  },
};

/**
 * Metadata configuration for Open Graph and Twitter cards
 */
export const metadataConfig = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.description}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.social.twitter,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: undefined,
  },
};