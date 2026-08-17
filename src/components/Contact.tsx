'use client';

import { motion } from 'framer-motion';
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

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
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

const contactInfo = [
  {
    label: 'Email',
    value: 'hello@ariefdev.com',
    icon: '?',
    href: 'mailto:hello@ariefdev.com',
  },
  {
    label: 'Phone',
    value: '+62 812-3456-7890',
    icon: '??',
    href: 'tel:+6281234567890',
  },
  {
    label: 'Location',
    value: 'Jakarta, Indonesia',
    icon: '??',
    href: '#',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ariefdev',
    icon: '??',
    href: 'https://linkedin.com/in/ariefdev',
  },
  {
    label: 'GitHub',
    value: 'github.com/ariefdev',
    icon: '??',
    href: 'https://github.com/ariefdev',
  },
  {
    label: 'Twitter',
    value: '@ariefdev',
    icon: '??',
    href: 'https://twitter.com/ariefdev',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Let&apos;s Talk
          </h2>
          <div className="h-1 w-24 bg-gray-900 rounded-full mx-auto" />
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaboration?
            I&apos;m always open to new opportunities.
          </p>
        </motion.div>

        {/* Main Contact Panel */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="bg-surface dark:bg-surface rounded-3xl border border-border dark:border-border shadow-2xl overflow-hidden"
        >
          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info Panel */}
            <div className="bg-primary dark:bg-primary p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-muted dark:text-muted mb-8 leading-relaxed">
                I&apos;m currently available for freelance work and full-time opportunities.
                Let&apos;s build something amazing together.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    variants={itemVariants}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <span className="text-3xl mr-4 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <div>
                      <div className="text-sm text-muted dark:text-muted mb-1">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Follow Section */}
              <div className="mt-12 pt-8 border-t border-[#262626]">
                <p className="text-sm text-muted dark:text-muted mb-4">Follow me</p>
                <div className="flex space-x-4">
                  {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                    <motion.a
                      key={social}
                      href={`https://${social.toLowerCase()}.com/ariefdev`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-300 hover:bg-[#262626] hover:text-white transition-colors"
                    >
                      <span className="text-lg">
                        {social === 'LinkedIn' && '??'}
                        {social === 'GitHub' && '??'}
                        {social === 'Twitter' && '??'}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Panel */}
            <div className="p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary dark:text-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-border dark:border-border focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/20 outline-none transition-all bg-background-subtle dark:bg-surface-secondary focus:bg-surface dark:focus:bg-surface"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-border dark:border-border focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/20 outline-none transition-all bg-background-subtle dark:bg-surface-secondary focus:bg-surface dark:focus:bg-surface"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary dark:text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border dark:border-border focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/20 outline-none transition-all bg-background-subtle dark:bg-surface-secondary focus:bg-surface dark:focus:bg-surface resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 px-6 bg-[#2d3748] text-white dark:bg-[#e5e5e5] dark:text-[#0a0a0a] rounded-xl font-semibold text-lg hover:bg-[#1a202c] dark:hover:bg-[#f5f5f5] transition-colors shadow-lg hover:shadow-xl"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

