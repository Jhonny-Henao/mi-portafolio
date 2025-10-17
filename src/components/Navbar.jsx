'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contacto', id: 'contact' }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          DevPortfolio
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-400 transition duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-left hover:text-purple-400 transition font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}