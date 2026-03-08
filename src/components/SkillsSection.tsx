import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  {
    title: 'Languages',
    skills: ['Java', 'C', 'C++', 'Python', 'C#'],
    color: 'from-neon-cyan to-neon-purple',
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    color: 'from-neon-purple to-neon-pink',
  },
  {
    title: 'Backend',
    skills: ['.NET', 'ASP.NET Core'],
    color: 'from-neon-green to-neon-cyan',
  },
  {
    title: 'Database',
    skills: ['SQL'],
    color: 'from-neon-pink to-neon-purple',
  },
  {
    title: 'Cloud',
    skills: ['Microsoft Azure'],
    color: 'from-neon-cyan to-neon-green',
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Visual Studio'],
    color: 'from-neon-purple to-neon-cyan',
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold neon-text mb-4">Technical Skills</h2>
          <p className="font-body text-muted-foreground">Technologies I work with</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="font-display text-sm font-semibold text-primary tracking-wider uppercase mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-muted text-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
