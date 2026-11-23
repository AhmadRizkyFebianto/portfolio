import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = localFont({
  src: [
    { path: "../../node_modules/@fontsource/geist/files/geist-latin-400-normal.woff2", weight: "400" },
    { path: "../../node_modules/@fontsource/geist/files/geist-latin-500-normal.woff2", weight: "500" },
    { path: "../../node_modules/@fontsource/geist/files/geist-latin-600-normal.woff2", weight: "600" },
    { path: "../../node_modules/@fontsource/geist/files/geist-latin-700-normal.woff2", weight: "700" },
    { path: "../../node_modules/@fontsource/geist/files/geist-latin-800-normal.woff2", weight: "800" },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ariz-portofolio.vercel.app"),
  title: {
    default: "Portfolio | Fullstack Developer",
    template: "%s | Portfolio",
  },
  description: "A premium portfolio showcasing technical expertise, projects, and experience in modern web development.",
  keywords: ["portfolio", "developer", "fullstack", "web development", "SallAgri", "SALL-Bondo", "PT INKA"],
  authors: [{ name: "Portfolio Developer" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Portfolio",
    title: "Portfolio | Fullstack Developer",
    description: "A premium portfolio showcasing technical expertise, projects, and experience in modern web development.",
    images: [
      {
        url: "https://ariz-portofolio.vercel.app/logo.svg",
        width: 64,
        height: 64,
        alt: "Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Fullstack Developer",
    description: "A premium portfolio showcasing technical expertise, projects, and experience in modern web development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: undefined,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0F0F0F",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
       <body className="min-h-full flex flex-col bg-background">
         <SmoothScroll>
           <Navigation />
           <main className="flex-1">{children}</main>
         </SmoothScroll>
       </body>
    </html>
  );
}
