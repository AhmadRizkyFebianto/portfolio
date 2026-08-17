import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { siteConfig } from "@/lib/metadata";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <SelectedWork />
      <Experience />
      <Technologies />
      <About />
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteConfig.author,
            jobTitle: "Fullstack Developer",
            url: siteConfig.url,
            sameAs: [],
            worksFor: {
              "@type": "Organization",
              name: "PT INKA",
            },
            alumnusOf: [
              {
                "@type": "EducationalOrganization",
                name: "Your University",
              },
            ],
            knowledgeTopic: ["Web Development", "Fullstack", "Laravel", "React"],
          }),
        }}
      />
    </>
  );
}