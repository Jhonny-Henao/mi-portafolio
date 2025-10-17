'use client';

import { Github, Linkedin, Mail, Heart, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { Icon: Github, label: 'GitHub', link: 'https://github.com/Jhonny-Henao?tab=repositories' },
    { Icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/feed/' },
    { Icon: Mail, label: 'Email', link: 'mailto:jnony100@gmail.com' },
    { Icon: MessageCircle, label: 'WhatsApp', link: 'https://wa.me/573118228988' }
  ];

  return (
    <footer className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-slate-900 to-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-8">
          {socialLinks.map(({ Icon, label, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition transform hover:scale-110"
              title={label}
            >
              <Icon size={20} className={label === 'WhatsApp' ? 'text-green-400' : ''} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} DevPortfolio. Hecho con <Heart size={14} className="inline text-red-500" /> por Jhonny Henao</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition text-white"
          >
            ↑ Arriba
          </button>
        </div>
      </div>
    </footer>
  );
}