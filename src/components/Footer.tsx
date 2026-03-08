import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            Built with <Heart size={14} className="text-primary animate-glow-pulse" /> by{' '}
            <span className="neon-text font-semibold font-display">Tushar Sharma</span>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Mail, href: 'mailto:tushar.6036@gmail.com', label: 'Email' },
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 hover:neon-glow transition-all duration-300"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
