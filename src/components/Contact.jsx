'use client';

export default function Contact() {
  const handleEmail = () => {
    window.location.href = 'mailto:tu@jnony100@gmail.com?subject=Proyecto%20en%20mente&body=Hola,%20me%20interesa%20trabajar%20contigo';
  };

  const handleDownloadCV = () => {
    // Reemplaza con tu URL de CV
    const cvUrl = '/pdf/Hoja de vida Jhonny Alejandro Henao.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Hoja de Vida Jhoony Alejandro Henao.pdf';
    link.click();
  };

return (
    <section className="py-20 space-y-12">
      <div className="bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-cyan-900/30 border-2 border-cyan-500/30 rounded-2xl p-12 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl font-black text-white">¿Proyecto en mente?</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Estoy listo para crear algo épico. Contáctame y hablemos sobre tu próximo gran proyecto.
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={handleEmail}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
          >
            Enviar Email
          </button>
          <button 
            onClick={handleDownloadCV}
            className="px-8 py-4 border-2 border-slate-600 rounded-lg font-bold hover:bg-slate-800 transition"
          >
            Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
}