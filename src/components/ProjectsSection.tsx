import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Biometric Robotic Arm',
    desc: 'A robotic arm controlled through fingerprint authentication for secure access and precise robotic operations.',
    tech: ['Arduino', 'Servo Motors', 'IoT Sensors'],
  },
  {
    title: 'Expense Tracker Website',
    desc: 'A responsive web application that helps users track and manage daily expenses with an intuitive, clean interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Self Irrigation System',
    desc: 'An automated irrigation system that monitors soil moisture and distributes water precisely when needed.',
    tech: ['Arduino', 'IoT Sensors'],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    setRotate({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.2s ease-out',
      }}
      className="glass-card rounded-2xl p-7 group"
    >
      {/* Project number */}
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-xs text-primary/50 tracking-wider">0{index + 1}</span>
        <div className="flex items-center gap-2">
          <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
            <Github size={14} />
          </a>
          <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs font-mono rounded-lg bg-primary/10 text-primary border border-primary/20"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-mono tracking-wider mb-6">
            <Layers size={12} />
            PORTFOLIO
          </div>
          <h2 className="section-heading neon-text">Featured Projects</h2>
          <p className="section-subheading">Innovative solutions I've designed and built</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
