import { motion } from 'framer-motion';
import { ArrowDown, FolderOpen, Mail } from 'lucide-react';
import HeroScene from './HeroScene';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">
      <HeroScene />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-mono text-sm text-primary tracking-widest uppercase mb-4"
        >
          Welcome to my world
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-black mb-6 neon-text leading-tight"
        >
          Tushar Sharma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-body text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Computer Science Student · React Developer · .NET Learner
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg font-body font-semibold text-sm text-primary-foreground bg-primary hover:shadow-[var(--shadow-neon-cyan)] transition-all duration-300"
          >
            <FolderOpen size={18} /> View Projects
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-body font-semibold text-sm glass-card neon-border text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Mail size={18} /> Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  );
}
