import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, School } from 'lucide-react';

const timeline = [
  {
    icon: Briefcase,
    title: 'Capgemini Industry Training',
    subtitle: 'C#, ASP.NET Core, Azure',
    period: 'Jan 2026 – Present',
    desc: 'Learning MVC Architecture, Web API development, and hands-on experience with Microsoft Azure cloud services.',
    active: true,
  },
  {
    icon: GraduationCap,
    title: 'Chandigarh University',
    subtitle: 'B.E. – Computer Science',
    period: '2022 – 2026',
    desc: 'Pursuing Bachelor of Engineering in Computer Science with focus on software development and emerging technologies.',
  },
  {
    icon: School,
    title: 'S.R. D.A.V Public School',
    subtitle: 'Intermediate – 91.6%',
    period: 'Senior Secondary',
    desc: 'Completed intermediate education with distinction.',
  },
  {
    icon: School,
    title: 'S.R. D.A.V Public School',
    subtitle: 'Matriculation – 89.2%',
    period: 'Secondary',
    desc: 'Completed matriculation with excellent academic performance.',
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 px-6 particle-bg">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold neon-text mb-4">Education & Training</h2>
          <p className="font-body text-muted-foreground">My academic journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title + item.period}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary shadow-[var(--shadow-neon-cyan)] -translate-x-1.5 mt-2 z-10" />

                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`glass-card rounded-xl p-5 ${item.active ? 'neon-border' : ''}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon size={16} className="text-primary" />
                      <span className="font-mono text-xs text-primary">{item.period}</span>
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="font-body text-sm text-primary/80 mb-2">{item.subtitle}</p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
