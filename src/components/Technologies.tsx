"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Smartphone, Cpu, Layers, GitBranch } from "lucide-react";
import { easeOut } from "framer-motion";
import Reveal from "@/components/Reveal";

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const categoryVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const chipVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

const technologies = [
  {
    category: "Backend Development",
    icon: Server,
    items: ["Laravel", "PHP 8.x", "Node.js", "Express", "REST API", "GraphQL", "Microservices", "Redis", "RabbitMQ"],
  },
  {
    category: "Database Management",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "SQL Optimization", "Query Profiling", "Migrations"],
  },
  {
    category: "Frontend Development",
    icon: Layout,
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery"],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: ["React Native", "Android Development", "iOS Development", "Cross-platform"],
  },
  {
    category: "DevOps & Tools",
    icon: Code,
    items: ["Git", "Docker", "CI/CD", "Nginx", "Apache", "AWS", "Vercel", "Linux", "Terminal"],
  },
  {
    category: "Enterprise Systems",
    icon: Layers,
    items: ["HR Systems", "Payroll", "Attendance", "Leave Management", "Performance Review", "ERP Integration"],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 lg:py-32 px-6">
      <Reveal className="max-w-7xl mx-auto">
        <Reveal direction="up" delay={0.1}>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-primary mb-6">
              Technologies
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.category}
                  variants={categoryVariants}
                  className="bg-surface dark:bg-surface rounded-3xl border border-border dark:border-border shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-background-subtle dark:bg-surface-secondary rounded-2xl mr-4">
                      <Icon className="w-6 h-6 text-primary dark:text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary dark:text-primary">{tech.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <motion.span
                        key={item}
                        variants={chipVariants}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-background-subtle dark:bg-surface-secondary hover:bg-surface dark:hover:bg-surface border border-border dark:border-border rounded-md text-sm font-medium text-secondary dark:text-secondary transition-colors cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Reveal>
      </Reveal>
    </section>
  );
}
