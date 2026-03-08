import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, School, BookOpen } from 'lucide-react';

const timeline = [
  {
    icon: Briefcase,
    title: 'Capgemini Industry Training',
    subtitle: 'C#, ASP.NET Core, Azure',
    period: 'Jan 2026 – Present',
    desc: 'Learning MVC Architecture, Web API development, and hands-on Microsoft Azure cloud deployment.',
    active: true,
  },
  {
    icon: GraduationCap,
    title: 'Chandigarh University',
    subtitle: 'B.E. – Computer Science',
    period: '2022 – 2026',
    desc: 'Pursuing Bachelor of Engineering with focus on software development and emerging technologies.',
  },
  {
    icon: School,
    title: 'S.R. D.A.V Public School',
    subtitle: 'Intermediate – 91.6%',
    period: 'Senior Secondary',
    desc: 'Completed intermediate education with academic distinction.',
  },
  {
    icon: BookOpen,
    title: 'S.R. D.A.V Public School',
    subtitle: 'Matriculation – 89.2%',
    period: 'Secondary',
    desc: 'Strong foundation with excellent academic performance.',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-28 px-6 particle-bg">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-wider mb-6">
            <GraduationCap size={12} />
            JOURNEY
          </div>
          <h2 className="section-heading neon-text">Education & Training</h2>
          <p className="section-subheading">My academic and professional path</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] top-4 bottom-4 w-px timeline-connector md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title + item.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className={`absolute left-[17px] w-3 h-3 rounded-full bg-primary neon-glow z-10 mt-7 md:left-1/2 md:-translate-x-1.5 ${item.active ? 'animate-glow-pulse' : ''}`} />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <div className={`glass-card rounded-2xl p-5 hover-lift ${item.active ? 'neon-border' : ''}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon size={14} className="text-primary" />
                      <span className="font-mono text-[11px] text-primary tracking-wider">{item.period}</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
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
