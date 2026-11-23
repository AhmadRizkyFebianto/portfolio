"use client";

import { Briefcase } from "lucide-react";
import Reveal from "@/components/Reveal";

const experienceData = [
  {
    company: "Freelance / Client Projects",
    role: "Freelance Web Developer · Part-time",
    period: "2023 — Present",
    summary:
      "Develop responsive websites for individual and corporate clients, from requirements and UI implementation through API integration, testing, and deployment.",
    highlights: ["Bakoel Oli", "SallAgri", "Azwa Design Studio"],
  },
  {
    company: "PT INKA (Persero)",
    role: "Fullstack Developer Intern",
    period: "Feb 2024 — Jun 2024",
    summary:
      "Built an employee assessment and promotion system that replaced a manual Excel-based process.",
    highlights: [
      "Implemented employee testing, evaluation workflows, and centralized records.",
      "Worked with HR stakeholders and integrated data from INKA’s existing employee database.",
    ],
  },
  {
    company: "PT GITS Indonesia",
    role: "Fullstack Web Developer Intern · Project Lead",
    period: "Aug 2023 — Dec 2023",
    summary:
      "Led a team of five trainees building an e-commerce platform for an MSME client.",
    highlights: [
      "Planned tasks and timelines, and designed business workflows and the database structure.",
      "Integrated Midtrans payments and built ordering and transaction features.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32 px-6 bg-background-subtle dark:bg-background-subtle"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal direction="up" delay={0.1}>
          <div className="mb-14 lg:mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted dark:text-muted mb-4">
              Work history
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-primary">
              Experience
            </h2>
          </div>
        </Reveal>

        <div className="border-l border-border-dark ml-2 md:ml-0">
          {experienceData.map((experience, index) => (
            <Reveal key={experience.company} direction="up" delay={index * 0.08}>
              <article className="relative grid gap-3 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10 pb-10 pl-6 md:pl-10 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary dark:bg-primary ring-4 ring-background-subtle dark:ring-background-subtle" />
                <p className="text-sm font-medium text-muted dark:text-muted md:pt-1">
                  {experience.period}
                </p>
                <div className="min-w-0 border-b border-border pb-8 last:border-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                    <Briefcase className="h-4 w-4 text-muted dark:text-muted" aria-hidden="true" />
                    <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-primary dark:text-primary">
                      {experience.company}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-secondary dark:text-secondary mb-3">
                    {experience.role}
                  </p>
                  <p className="text-secondary dark:text-secondary leading-relaxed max-w-3xl mb-4">
                    {experience.summary}
                  </p>
                  <ul className="space-y-2 text-sm text-muted dark:text-muted">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary dark:bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
