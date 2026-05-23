import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import mica1 from "../src/assets/mica1.jpg";
import clip1 from "../src/assets/clip1.gif";
import ilus1 from "../src/assets/ilus1.gif";

const projects = [
  {
    title: "Identidade Visual e Peças Gráficas",
    category: "Design Gráfico",
    image: mica1,      

    description:
      "Branding, criação de logotipo criativos para redes sociais, impressos e tudo quanto é projeto gráfico.",

    tech: ["Photoshop", "Illustrator", "Branding", "CorelDraw", "Canva"],

    link: "https://www.behance.net/gallery/249899233/Portifolio-2026#",
  },

  {
    title: "Clipes, Filmes e Redes Sociais",
    category: "Filmmaker",
    image: clip1,

    description:
      "Produção audiovisual com edição dinâmica, color grading cinematográfico e narrativa visual moderna.",

    tech: ["Premiere", "After Effects", "CapCut"],

    link: "https://www.youtube.com/watch?v=l8fMaVvfHxc&list=RDl8fMaVvfHxc&start_radio=1#",
  },

  {
    title: "Soluções em JavaScript",
    category: "Desenvolvimento",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",

    description:
      "Back e Front-end em React com animações fluidas, foco em performance e experiência.",

    tech: ["React", "Tailwind", "TypeCript", "MongoDB", "MariaDB"],

    link: "#",
  },

  {
    title: "Ilustrações",
    category: "Desenhos e Animações",
    image: ilus1,

    description:
      "Criação de desenhos, personagens para ilustrações e animações frame por frame.",

    tech: ["Photoshop", "CorelDraw", "Premiere"],

    link: "https://www.instagram.com/chitonista/",
  },
];

function App() {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-600 rounded-full blur-[140px] opacity-30"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-violet-500 rounded-full blur-[140px] opacity-20"></div>

      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-sm fixed top-0 z-50 bg-black/20">
        <h1 className="text-2xl font-bold tracking-wide">
          Matheus Assis
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
          <a href="#projetos">Projetos</a>

          <a href="#sobre">Sobre</a>

          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-8 relative"
      >
        
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
              Disponível para projetos
            </span>

            <h2 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
              Matheus <br />
              <span className="text-purple-500">
                Assis
              </span>
            </h2>

            <p className="text-zinc-400 text-lg mt-6 max-w-xl leading-relaxed">
              Designer Gráfico, Filmmaker e Desenvolvedor JavaScript criando
              experiências digitais modernas, elegantes e impactantes.
            </p>

            <div className="flex gap-4 mt-10">
              <a
               href="#projetos"
               className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition font-medium shadow-lg shadow-purple-500/20"
              >
               Ver Projetos
              </a>

              <a
               href="#contato"
               className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
               Contato
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            
            <div className="w-[320px] h-[420px] rounded-[40px] bg-gradient-to-br from-purple-500/20 to-transparent border border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-500/10 p-4">
              
              <div className="w-full h-full rounded-[30px] bg-[#111111] flex items-center justify-center overflow-hidden">
                
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>

              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Sobre */}
<section
  id="sobre"
  className="py-32 px-8 relative"
>
  <div className="max-w-7xl mx-auto">

    {/* Título */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <span className="text-purple-400 text-sm tracking-[0.3em] uppercase">
        Sobre Mim
      </span>

      <h2 className="text-4xl md:text-6xl font-black mt-4">
        Criatividade,
        <span className="text-purple-500"> estratégia </span>
        e tecnologia.
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-zinc-400 text-lg leading-relaxed">
          Maricaense, artista e compositor que enxerga o mundo de forma
          visual, criativa e original.
        </p>

        <p className="text-zinc-500 text-lg leading-relaxed mt-6">
          Trabalho com identidade visual, edição de vídeo, captação
          e desenvolvimento back e front-end utilizando tecnologias
          modernas para construir projetos inovadores e impactantes.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          {[
            "Photoshop",
            "Illustrator",
            "CorelDraw",
            "Canva",
            "Premiere",
            "CapCut",
            "Figma",
            "React",
            "JavaScript",
            "TypeScript",
            "MongoDB",
            "MariaDB",
            "Tailwind",
          ].map((item) => (
            <div
              key={item}
              className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-300 backdrop-blur-md"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid gap-6"
      >

        <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/30 transition">
          <h3 className="text-2xl font-bold mb-4">
            Design Gráfico
          </h3>

          <p className="text-zinc-400 leading-relaxed">
            Identidade visual, peças criativas e ilustrações
            desenvolvidas com foco em impacto visual.
          </p>
        </div>

        <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/30 transition">
          <h3 className="text-2xl font-bold mb-4">
            Filmmaker
          </h3>

          <p className="text-zinc-400 leading-relaxed">
            Produção audiovisual, animação, captação e edição de vídeo
            com estética moderna e cinematográfica.
          </p>
        </div>

        <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/30 transition">
          <h3 className="text-2xl font-bold mb-4">
            Desenvolvimento
          </h3>

          <p className="text-zinc-400 leading-relaxed">
            Solução de problemas , interfaces modernas e experiências
            digitais utilizando React, JavaScript e animações fluidas.
          </p>
        </div>

      </motion.div>
    </div>
  </div>
</section>
  {/* Projetos */}
<section
  id="projetos"
  className="py-32 px-8 relative"
>
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <span className="text-purple-400 text-sm tracking-[0.3em] uppercase">
        Projetos
      </span>

      <h2 className="text-4xl md:text-6xl font-black mt-4">
        Trabalhos em
        <span className="text-purple-500"> destaque</span>
      </h2>
    </motion.div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-8">

      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          viewport={{ once: true }}
          onClick={() => setSelectedProject(project)}
          className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer"
        >

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-8">
            <span className="text-purple-400 text-sm">
              {project.category}
            </span>

            <h3 className="text-3xl font-bold mt-2">
              {project.title}
            </h3>
          </div>

          {/* Glow */}
          <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/30 rounded-[32px] transition"></div>

        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* Contato */}
<section
  id="contato"
  className="py-32 px-8 relative"
>
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <span className="text-purple-400 text-sm tracking-[0.3em] uppercase">
        Contato
      </span>

      <h2 className="text-4xl md:text-6xl font-black mt-4">
        Vamos criar algo
        <span className="text-purple-500"> incrível</span>
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-12">

      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
          Estou disponível para projetos de design gráfico,
          audiovisual e desenvolvimento.
          Entre em contato e vamos transformar sua ideia
          em algo profissional.
        </p>

        <div className="mt-10 space-y-6">

          <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-xl">
            <span className="text-zinc-500 text-sm">
              Email
            </span>

            <h3 className="text-xl font-semibold mt-2">
              matheusassisdes@gmail.com
            </h3>
          </div>

          <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-xl">
            <span className="text-zinc-500 text-sm">
              Instagram
            </span>

            <h3 className="text-xl font-semibold mt-2">
              @chitonista
            </h3>
          </div>

          <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-xl">
            <span className="text-zinc-500 text-sm">
              WhatsApp
            </span>

            <h3 className="text-xl font-semibold mt-2">
              (21) 97423-2059
            </h3>
          </div>

        </div>
      </motion.div>

    
    </div>
  </div>
</section>


  {/* Modal */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl w-full rounded-[40px] overflow-hidden border border-white/10 bg-[#111111] shadow-2xl shadow-purple-500/20"
      >

        {/* Imagem */}
        <div className="relative">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-[420px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Conteúdo */}
        <div className="p-10">
          <span className="text-purple-400 text-sm uppercase tracking-widest">
            {selectedProject.category}
          </span>

          <h2 className="text-4xl font-black mt-4">
            {selectedProject.title}
          </h2>

            <p className="text-zinc-400 mt-6 leading-relaxed text-lg">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {selectedProject.tech.map((item) => (
                 <div
                     key={item}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-300"
                    >
                     {item}
                  </div>
              ))}
            </div>

          <div className="flex gap-4 mt-10">
            <a
              href={selectedProject.link}
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 transition inline-block"
            >
               Ver Projeto
            </a>

            <button
              onClick={() => setSelectedProject(null)}
              className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Fechar
            </button>
          </div>
        </div>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* Footer */}
<footer className="relative border-t border-white/10 py-12 px-8 overflow-hidden">

  {/* Glow */}
  <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-600/20 blur-[140px] rounded-full"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

      {/* Left */}
      <div>
        <h2 className="text-3xl font-black">
          Matheus
          <span className="text-purple-500"> Assis</span>
        </h2>

        <p className="text-zinc-500 mt-3 max-w-md">
          Artista visual e Dev criando experiências digitais modernas,
          elegantes e impactantes.
        </p>
      </div>

      {/* Links */}
      <div className="flex gap-6 text-zinc-400">

        <a
          href="#home"
          className="hover:text-purple-400 transition"
        >
          Home
        </a>

        <a
          href="#sobre"
          className="hover:text-purple-400 transition"
        >
          Sobre
        </a>

        <a
          href="#projetos"
          className="hover:text-purple-400 transition"
        >
          Projetos
        </a>

        <a
          href="#contato"
          className="hover:text-purple-400 transition"
        >
          Contato
        </a>

      </div>
    </div>

    {/* Bottom */}
    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-zinc-600 text-sm">
        © 2026 Matheus Assis. Todos os direitos reservados.
      </p>

      <div className="flex gap-5 text-zinc-500">

        <a
          href="https://www.instagram.com/chitonista/"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          Instagram
        </a>

        <a
          href="https://github.com/matheusades"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.behance.net/gallery/249899233/Portifolio-2026"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          Behance
        </a>

      </div>
    </div>

  </div>
</footer>

    </main>
  );
}

export default App;