import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Biometric Robotic Arm',
    desc: 'A robotic arm controlled through fingerprint authentication for secure access and precise operations.',
    tech: ['Arduino', 'Servo Motors', 'IoT Sensors'],
  },
  {
    title: 'Expense Tracker Website',
    desc: 'A responsive web application that helps users track and manage daily expenses with an intuitive interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Self Irrigation System',
    desc: 'An automated irrigation system that monitors soil moisture and distributes water automatically.',
    tech: ['Arduino', 'IoT Sensors'],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    setRotate({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass-card rounded-xl p-6 hover:border-primary/40 transition-colors duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
      </div>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/20"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold neon-text mb-4">Projects</h2>
          <p className="font-body text-muted-foreground">Things I've built</p>
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
