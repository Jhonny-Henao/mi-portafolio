'use client';

import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function Hero() {
  const socialIcons = [
    { Icon: Github, label: 'GitHub', link: 'https://github.com/Jhonny-Henao?tab=repositories' },
    { Icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/feed/' },
    { Icon: Mail, label: 'Email', link: 'mailto:jnony100@gmail.com'}
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20">
      {/* Profile Image - Arriba en mobile */}
      <div className="w-full md:hidden flex justify-center mb-8">
        <div className="relative w-80 h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl p-1">
            <div className="w-full h-full bg-szlate-900 rounded-3xl flex items-center justify-center overflow-hidden">
              <img 
                src="/img/profile.png" 
                alt="profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 space-y-8 animate-fade-in-up">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
            Hola, soy Jhonny
          </h1>
          <p className="text-xl text-slate-400 max-w-lg">
            Diseño y desarrollo experiencias digitales escalables y de alto rendimiento. Especializado en desarrollo full-stack, optimización de performance y experiencia de usuario.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <button 
            onClick={() => handleScroll('projects')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105"
          >
            Ver Proyectos
          </button>
          <a
            href="https://wa.me/573118228988?text=Hola%2C%20me%20interesa%20trabajar%20contigo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/50 transition transform hover:scale-105 flex items-center gap-2"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>

        <div className="flex gap-4 pt-4">
          {socialIcons.map(({ Icon, label, link }, i) => (
            <a 
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition transform hover:scale-110"
              title={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Profile Image - Desktop */}
      <div className="flex-1 hidden md:flex justify-center">
        <div className="relative w-96 h-96">
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-50"></div>
          
          {/* Image Container */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl p-1">
            <div className="w-full h-full bg-slate-900 rounded-3xl flex items-center justify-center overflow-hidden">
              <img 
                src="/img/profile.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}