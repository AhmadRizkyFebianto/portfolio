'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase, Code, Database, Layout } from 'lucide-react';
import { borderRadius, colors, spacing } from '@/lib/design-tokens';
import { easeOut } from 'framer-motion';

// Animation variants
const containerVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const iconMap = {
  time: Calendar,
  role: Briefcase,
  tech: Code,
  database: Database,
  frontend: Layout,
};

const techStack = {
  backend: ['Laravel', 'PHP', 'REST API', 'Microservices'],
  database: ['MySQL', 'PostgreSQL', 'SQL', 'Query Optimization'],
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery'],
  tools: ['Git', 'VS Code', 'Postman', 'Docker', 'Linux'],
  enterprise: ['HR Systems', 'Payroll', 'Attendance', 'Leave Management', 'Performance Review'],
};

export default function Experience() {
  const experienceData = {
    company: 'PT INKA (Persero)',
    role: 'Fullstack Developer Intern',
    period: 'February 2024 – June 2024',
    description: 'Developing enterprise-level web applications for HR management, payroll, and attendance systems. Built scalable solutions handling 5000+ employees while applying modern fullstack technologies.',
    achievements: [
      'Built scalable HR management systems handling 5000+ employees',
      'Developed RESTful APIs with Laravel following clean architecture principles',
      'Optimized database queries resulting in 40% faster response times',
      'Implemented responsive frontends ensuring cross-device compatibility',
      'Integrated third-party APIs for seamless data synchronization',
    ],
    technologies: {
      backend: techStack.backend,
      database: techStack.database,
      frontend: techStack.frontend,
      tools: techStack.tools,
      enterprise: techStack.enterprise,
    },
  };

  return (
    <section id="experience" className="py-24 lg:py-32 px-6 bg-background-subtle dark:bg-background-subtle">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-primary mb-6">
            Experience
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full" />
        </motion.div>

        {/* Company Panel */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white dark:bg-[#141414] rounded-3xl border border-border dark:border-border shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-surface dark:bg-surface-secondary p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-primary dark:text-primary">{experienceData.company}</h3>
                  <p className="text-primary dark:text-secondary text-lg">{experienceData.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-primary dark:text-secondary">{experienceData.period}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10">
              <p className="text-secondary dark:text-secondary text-lg leading-relaxed mb-8">
                {experienceData.description}
              </p>

              {/* Achievements */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold text-primary dark:text-primary mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {experienceData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-secondary dark:text-secondary">
                      <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 mr-3" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack */}
              <div>
                <h4 className="text-xl font-semibold text-primary dark:text-primary mb-6 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Technologies Used
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(experienceData.technologies).map(([category, techs]) => (
                    <div key={category} className="bg-background-subtle dark:bg-background-subtle rounded-2xl p-5">
                      <h5 className="font-semibold text-primary dark:text-primary mb-3 capitalize">
                        {category}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-surface dark:bg-surface-secondary border border-border dark:border-border rounded-md text-xs font-medium text-gray-700 dark:text-border-light"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


