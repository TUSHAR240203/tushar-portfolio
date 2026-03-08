import { motion } from 'framer-motion';
import { ArrowDown, FolderOpen, Mail, Download } from 'lucide-react';
import HeroScene from './HeroScene';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-background/30 via-transparent to-background" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-mono text-xs sm:text-sm text-primary tracking-[0.3em] uppercase mb-6"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 neon-text leading-[0.9] tracking-tight"
          >
            Tushar
            <br />
            Sharma
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-body text-base sm:text-lg lg:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed"
          >
            Computer Science Student <span className="text-primary">·</span> React Developer <span className="text-primary">·</span> .NET Learner
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-body font-semibold text-sm text-primary-foreground bg-primary hover:shadow-[var(--glow-primary)] transition-all duration-500 hover-lift"
            >
              <FolderOpen size={16} />
              View Projects
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-body font-semibold text-sm glass-card neon-border text-primary hover:bg-primary/10 transition-all duration-500"
            >
              <Mail size={16} />
              Contact Me
            </a>

            {/* Resume Download Button */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-body font-semibold text-sm text-muted-foreground bg-secondary hover:text-foreground transition-all duration-300"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}