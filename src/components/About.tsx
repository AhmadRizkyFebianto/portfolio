"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { easeOut } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal direction="up" delay={0.1}>
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-primary mb-6">
              About Me
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </div>
        </Reveal>

        {/* About Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Panel - 5 columns wide */}
          <Reveal className="lg:col-span-5" direction="left" delay={0.2}>
            <div className="bg-surface dark:bg-surface rounded-3xl border border-border dark:border-border shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-background-subtle to-border dark:from-surface dark:to-surface-secondary opacity-50" />
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/assets/my.jpg"
                  alt="Ahmad Rizky Febianto"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Reveal>

          {/* Content Panel - 7 columns wide */}
          <Reveal className="lg:col-span-7" direction="right" delay={0.3}>
            <div className="bg-surface dark:bg-surface rounded-3xl border border-border dark:border-border shadow-xl p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-primary dark:text-primary mb-6">
                Building digital experiences with precision and creativity
              </h3>
              <div className="prose prose-lg text-secondary dark:text-secondary max-w-none">
                <p className="mb-6 leading-relaxed">
                  I'm a passionate fullstack developer with a strong foundation in building enterprise-grade applications. My journey began with Laravel and SQL, where I developed a deep appreciation for clean architecture and robust data management.
                </p>
                <p className="mb-6 leading-relaxed">
                  Today, I combine technical expertise with design sensitivity to create products that are not only functional but also delightful to use. My experience at <strong className="text-primary dark:text-primary">PT INKA</strong> sharpened my skills in developing complex HR systems and enterprise applications.
                </p>
                <p className="mb-6 leading-relaxed">
                  When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and sharing knowledge with the community.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
