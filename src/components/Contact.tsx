"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Globe, GitBranch } from "lucide-react";
import Reveal from "@/components/Reveal";
import { easeOut } from "framer-motion";

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
    label: "Email",
    value: "ahmadrizky13jkl@gmail.com",
    icon: Mail,
    href: "mailto:ahmadrizky13jkl@gmail.com",
  },
  {
    label: "Location",
    value: "Pasuruan, East Java, Indonesia",
    icon: MapPin,
    href: "#",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ahmad-rizky-febianto",
    icon: Globe,
    href: "https://www.linkedin.com/in/ahmad-rizky-febianto/",
  },
  {
    label: "GitHub",
    value: "github.com/ariefdev",
    icon: GitBranch,
    href: "https://github.com/AhmadRizkyFebianto",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmad-rizky-febianto/",
    icon: Globe,
  },
  {
    label: "GitHub",
    href: "https://github.com/AhmadRizkyFebianto",
    icon: GitBranch,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6">
      <Reveal className="max-w-4xl mx-auto">
        <Reveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-primary mb-6">
              Let's Talk
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full mx-auto" />
            <p className="mt-6 text-xl text-secondary dark:text-secondary max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential collaboration?
              I'm always open to new opportunities.
            </p>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="bg-surface dark:bg-surface rounded-3xl border border-border dark:border-border shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-primary dark:bg-[#141414] p-10 text-white">
                <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                <p className="text-muted dark:text-muted mb-8 leading-relaxed">
                  I'm currently available for freelance work and full-time opportunities.
                  Let's build something amazing together.
                </p>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <motion.a key={item.label} variants={itemVariants} href={item.href} whileHover={{ x: 5 }} className="flex items-start group">
                      <item.icon className="text-3xl mr-4 mb-2 text-white group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm font-medium text-primary/80 dark:text-primary/80">{item.label}</p>
                        <p className="text-base text-white/90 group-hover:text-white transition-colors">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-white/20">
                  <p className="text-sm font-medium text-white/70 mb-4">Follow me on social media</p>
                  <div className="flex gap-4">
                    {socials.map((social) => (
                      <motion.a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                        <social.icon className="w-5 h-5" aria-hidden="true" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <Reveal direction="up" delay={0.1}>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary dark:text-secondary mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-border dark:border-border focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/20 outline-none transition-all bg-background-subtle dark:bg-surface-secondary focus:bg-surface dark:focus:bg-surface" placeholder="Your name" />
                  </Reveal>
                  <Reveal direction="up" delay={0.2}>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-secondary mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-border dark:border-border focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/20 outline-none transition-all bg-background-subtle dark:bg-surface-secondary focus:bg-surface dark:focus:bg-surface" placeholder="your.email@example.com" />
                  </Reveal>
                  <Reveal direction="up" delay={0.3}>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary dark:text-secondary mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-border dark:border-border focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/20 outline-none transition-all bg-background-subtle dark:bg-surface-secondary focus:bg-surface dark:focus:bg-surface resize-none" placeholder="Tell me about your project..." />
                  </Reveal>
                  <Reveal direction="up" delay={0.4}>
                    <motion.button variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 px-6 bg-primary text-white dark:bg-[#e5e5e5] dark:text-[#0a0a0a] rounded-xl font-semibold text-lg hover:shadow-xl transition-shadow">Send Message</motion.button>
                  </Reveal>
                </form>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Reveal>
    </section>
  );
}
