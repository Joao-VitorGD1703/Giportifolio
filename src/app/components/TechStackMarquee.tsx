import { motion } from 'motion/react';
import { Figma, Code, Zap, Layers } from 'lucide-react';

const techStack = [
  { name: 'Figma', icon: Figma },
  { name: 'React', icon: Code },
  { name: 'Framer', icon: Zap },
  { name: 'Tailwind', icon: Layers },
  { name: 'Figma', icon: Figma },
  { name: 'React', icon: Code },
  { name: 'Framer', icon: Zap },
  { name: 'Tailwind', icon: Layers },
];

export function TechStackMarquee() {
  return (
    <section className="py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Stack de <span style={{ color: '#b616b6' }}>Tecnologia</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto" style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: '1.6' }}>
            Ferramentas e tecnologias que utilizo para dar vida às ideias
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient overlays */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 z-10"
            style={{ background: 'linear-gradient(to right, #252525, transparent)' }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 z-10"
            style={{ background: 'linear-gradient(to left, #252525, transparent)' }}
          />

          {/* Scrolling container */}
          <div className="flex gap-8">
            <motion.div
              className="flex gap-8 shrink-0"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center justify-center p-8 shrink-0"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    width: '160px',
                    height: '160px',
                    borderRadius: '4px'
                  }}
                >
                  <tech.icon 
                    className="w-12 h-12 mb-4 text-white"
                    strokeWidth={1.5}
                  />
                  <span className="text-white" style={{ fontWeight: 500, fontSize: '1rem' }}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Duplicate for seamless loop */}
            <motion.div
              className="flex gap-8 shrink-0"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-duplicate-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center justify-center p-8 shrink-0"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    width: '160px',
                    height: '160px',
                    borderRadius: '4px'
                  }}
                >
                  <tech.icon 
                    className="w-12 h-12 mb-4 text-white"
                    strokeWidth={1.5}
                  />
                  <span className="text-white" style={{ fontWeight: 500, fontSize: '1rem' }}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}