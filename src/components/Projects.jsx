'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Cubatas - Landing Page',
      description: 'Landing page profesional para licorera Cubatas. Diseño moderno, responsivo y optimizado para conversiones con galería de productos y contacto directo.',
      tags: ['React', 'TailwindCSS', 'Vercel', 'Responsive'],
      link: 'https://cubatas.vercel.app/',
      image: '/img/cubatas.png',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Movie App - TMDB API',
      description: 'Aplicación de películas que consume la API de TMDB. Busca películas, consulta detalles, calificaciones y descubre nuevas películas con interfaz intuitiva.',
      tags: ['React', 'TMDB API', 'TailwindCSS', 'JavaScript'],
      link: 'https://movie-app-git-main-jhonny-henaos-projects.vercel.app/page?page=1',
      image: '/img/movie-app.png',
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Quiz Trivia - Juego de Preguntas',
      description: 'Un juego de trivia interactivo desarrollado con Next.js que consume la API pública de Open Trivia DB. Permite a los usuarios responder preguntas aleatorias de cultura general, ver su puntuación y volver a jugar. Diseño moderno, rápido y desplegado en Vercel.',
      tags: ['Next.js', 'React', 'TailwindCSS', 'Open Trivia DB', 'Vercel'],
      link: 'https://quiz-trivia-rust.vercel.app/',
      image: '/img/quiz-trivia.png',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Snake Game - Juego Retro con Ranking Global',
      description: 'Un juego clásico de la culebrita desarrollado con Next.js y Supabase. El jugador controla una serpiente que crece al comer frutas mientras evita chocar consigo misma. Incluye efectos de sonido, música de fondo y sistema de puntuaciones global con Supabase. Desplegado en Vercel con animaciones suaves y controles intuitivos.',
      tags: ['Next.js', 'React', 'TailwindCSS', 'Supabase', 'Framer Motion', 'Vercel'],
      link: 'https://snake-game-ten-flame.vercel.app/',
      image: '/img/snake.png',
      color: 'from-green-500 to-emerald-600'
    },
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 space-y-12">
      <div className="space-y-4">
        <h2 className="text-5xl font-black text-white">Proyectos Destacados</h2>
        <p className="text-slate-400 text-lg">Lo mejor de mi trabajo. Proyectos que rompieron esquemas.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className={`bg-gradient-to-br ${projects[activeProject].color} p-1 rounded-2xl h-fit`}>
          <div className="bg-slate-900 rounded-2xl overflow-hidden flex flex-col">
            <div className="w-full h-64 bg-slate-800 flex items-center justify-center overflow-hidden">
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-3">{projects[activeProject].title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {projects[activeProject].description}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-slate-800 rounded-full text-sm text-green-300 border border-green-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleProjectClick(projects[activeProject].link)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/50 transition w-full justify-center transform hover:scale-105"
                >
                  Ver Proyecto <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 flex flex-col">
          {projects.map((project, i) => (
            <button
              key={i}
              onClick={() => setActiveProject(i)}
              className={`p-4 rounded-xl text-left transition transform hover:scale-105 ${
                activeProject === i
                  ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-2 border-green-500'
                  : 'bg-slate-800 border-2 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <h4 className="font-bold text-lg mb-1">{project.title}</h4>
              <p className="text-slate-400 text-sm line-clamp-2">{project.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
