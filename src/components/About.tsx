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
        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Portrait Panel - 5 columns wide */}
          <Reveal className="min-w-0 lg:col-span-5" direction="left" delay={0.2}>
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
          <Reveal className="min-w-0 lg:col-span-7" direction="right" delay={0.3}>
            <div className="min-w-0 bg-surface dark:bg-surface rounded-3xl border border-border dark:border-border shadow-xl p-6 sm:p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary dark:text-primary mb-6">
                From first sketch to a working product
              </h3>
              <div className="prose prose-lg text-secondary dark:text-secondary max-w-none">
                <p className="mb-6 leading-relaxed">
                  I'm a fullstack developer with freelance experience since 2023. I work across the product lifecycle, from gathering requirements and implementing interfaces to API integration, testing, and deployment.
                </p>
                <p className="mb-6 leading-relaxed">
                  My projects include e-commerce, an English-learning platform for agriculture, and an employee assessment system. I've contributed to teams at <strong className="text-primary dark:text-primary">PT INKA</strong> and <strong className="text-primary dark:text-primary">PT GITS Indonesia</strong>.
                </p>
                <p className="mb-6 leading-relaxed">
                  I graduated in Informatics from the University of Jember. I enjoy turning practical requirements into clear, responsive web experiences.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
