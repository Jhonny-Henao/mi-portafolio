'use client';

import { 
  Code2, 
  Database, 
  Server, 
  Layout,
  Zap,
  Cpu
} from 'lucide-react';

export default function Skills() {
  const skillsData = [
    { name: 'React', icon: Code2, percentage: 70, category: 'Frontend' },
    { name: 'Next.js', icon: Zap, percentage: 70, category: 'Frontend' },
    { name: 'JavaScript', icon: Code2, percentage: 80, category: 'Lenguaje' },
    { name: 'TailwindCSS', icon: Layout, percentage: 70, category: 'Estilo' },
    { name: 'Node.js', icon: Server, percentage: 70, category: 'Backend' },
    { name: 'PostgreSQL', icon: Database, percentage: 80, category: 'BD' },
    { name: 'Django', icon: Server, percentage: 75, category: 'Backend' },
    { name: 'PHP', icon: Server, percentage: 85, category: 'Backend' }
  ];

  const categories = [
    { name: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', color: 'from-green-500 to-emerald-500' },
    { name: 'BD', color: 'from-purple-500 to-pink-500' },
    { name: 'Estilo', color: 'from-yellow-500 to-orange-500' },
    { name: 'Lenguaje', color: 'from-red-500 to-pink-500' }
  ];

  return (
    <section className="py-20 space-y-16">
      <div className="space-y-4">
        <h2 className="text-5xl font-black text-white">Habilidades y Tecnologías</h2>
        <p className="text-slate-400 text-lg">Las herramientas con las que rompo el código.</p>
      </div>

      {/* Categorías */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat, i) => (
          <div 
            key={i}
            className={`px-4 py-2 rounded-full font-semibold text-white text-sm bg-gradient-to-r ${cat.color}`}
          >
            {cat.name}
          </div>
        ))}
      </div>

      {/* Skills Grid con barras de progreso */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillsData.map((skill, i) => {
          const categoryColor = categories.find(cat => cat.name === skill.category)?.color || 'from-cyan-500 to-blue-600';
          const IconComponent = skill.icon;
          
          return (
            <div 
              key={i}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition group"
            >
              {/* Header con icon y nombre */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-slate-400">{skill.category}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {skill.percentage}%
                  </span>
                </div>
              </div>

              {/* Barra de progreso animada */}
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${categoryColor} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                  style={{ 
                    width: `${skill.percentage}%`,
                    animation: `fillBar 1s ease-out forwards`
                  }}
                />
              </div>

              {/* Nivel de proficiencia */}
              <div className="mt-3">
                <p className="text-xs text-slate-500">
                  {skill.percentage >= 90 ? '🔥 Experto' : skill.percentage >= 80 ? '⭐ Avanzado' : '📈 Intermedio'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: var(--width, 0%);
          }
        }
      `}</style>
    </section>
  );
}