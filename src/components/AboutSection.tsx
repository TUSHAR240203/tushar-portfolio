import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Rocket } from 'lucide-react';

const cards = [
  {
    icon: GraduationCap,
    title: 'CS Student',
    desc: 'Pursuing B.E. in Computer Science from Chandigarh University, building a strong foundation in software engineering.',
  },
  {
    icon: Briefcase,
    title: 'Capgemini Trainee',
    desc: 'Currently undergoing industry training in C#, ASP.NET Core, MVC Architecture, Web API, and Microsoft Azure.',
  },
  {
    icon: Rocket,
    title: 'Full-Stack Aspirant',
    desc: 'Passionate about building innovative solutions using React, .NET, and cloud technologies.',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-6 particle-bg">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold neon-text mb-4">About Me</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            A Computer Science student skilled in React, Python, C#, and .NET technologies with a strong interest in full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 hover:border-primary/40 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-neon-cyan)] transition-shadow">
                <card.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
