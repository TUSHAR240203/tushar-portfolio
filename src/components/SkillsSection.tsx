import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Cloud, Wrench } from 'lucide-react';

const categories = [
  { title: 'Languages', icon: Code2, skills: ['Java', 'C', 'C++', 'Python', 'C#'] },
  { title: 'Frontend', icon: Layout, skills: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { title: 'Backend', icon: Server, skills: ['.NET', 'ASP.NET Core'] },
  { title: 'Database', icon: Database, skills: ['SQL'] },
  { title: 'Cloud', icon: Cloud, skills: ['Microsoft Azure'] },
  { title: 'Tools', icon: Wrench, skills: ['Git', 'GitHub', 'VS Code', 'Visual Studio'] },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-mono tracking-wider mb-6">
            <Code2 size={12} />
            EXPERTISE
          </div>
          <h2 className="section-heading neon-text">Technical Skills</h2>
          <p className="section-subheading">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="glass-card rounded-2xl p-6 hover-lift group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:neon-glow transition-shadow duration-500">
                  <cat.icon className="text-primary" size={18} />
                </div>
                <h3 className="font-display text-sm font-bold text-foreground tracking-wide uppercase">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-secondary text-foreground/80 border border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
