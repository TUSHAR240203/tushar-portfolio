import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Rocket, Sparkles } from 'lucide-react';

const cards = [
  {
    icon: GraduationCap,
    title: 'CS Student',
    desc: 'Pursuing B.E. in Computer Science from Chandigarh University with a focus on modern software engineering.',
  },
  {
    icon: Briefcase,
    title: 'Capgemini Trainee',
    desc: 'Industry training in C#, ASP.NET Core, MVC Architecture, Web API development, and Microsoft Azure cloud services.',
  },
  {
    icon: Rocket,
    title: 'Full-Stack Builder',
    desc: 'Building innovative solutions with React, .NET, and cloud technologies. Passionate about clean, scalable code.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 particle-bg">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-wider mb-6">
            <Sparkles size={12} />
            ABOUT ME
          </div>
          <h2 className="section-heading neon-text">Who I Am</h2>
          <p className="section-subheading">
            A passionate Computer Science student skilled in React, Python, C#, and .NET, driven to build innovative full-stack solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="glass-card rounded-2xl p-7 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:neon-glow transition-shadow duration-500">
                <card.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{card.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
