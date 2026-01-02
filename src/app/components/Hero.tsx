import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 pt-24">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <div>
            <p className="text-white mb-4" style={{ fontSize: '1.125rem', opacity: 0.9, fontWeight: 500 }}>
              Olá, eu sou um
            </p>
            <h1 className="text-white mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, lineHeight: '1.1', letterSpacing: '-0.02em' }}>
              Designer de <br />
              <span style={{ color: '#b616b6' }}>Tecnologia</span> Sênior
            </h1>
            <p className="text-white max-w-xl" style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: '1.6' }}>
              Especializado em criar experiências digitais de <span style={{ color: '#b616b6', fontWeight: 600 }}>alto impacto</span> que 
              combinam <span style={{ color: '#b616b6', fontWeight: 600 }}>design minimalista</span> com 
              código <span style={{ color: '#b616b6', fontWeight: 600 }}>moderno</span>.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 text-white transition-all group"
            style={{ 
              background: '#b616b6',
              fontWeight: 600,
              fontSize: '1.125rem',
              boxShadow: '0 0 30px rgba(182, 22, 182, 0.5)',
              borderRadius: '4px'
            }}
          >
            Ver Meu Trabalho
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Right Column - 3D Geometric Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="relative"
          >
            {/* Main geometric shape */}
            <div 
              className="relative"
              style={{ 
                width: 'clamp(250px, 40vw, 400px)',
                height: 'clamp(250px, 40vw, 400px)',
              }}
            >
              {/* Outer ring with glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(182, 22, 182, 0.2), rgba(182, 22, 182, 0.05))',
                  border: '2px solid #b616b6',
                  boxShadow: '0 0 60px rgba(182, 22, 182, 0.6), inset 0 0 40px rgba(182, 22, 182, 0.2)',
                  transform: 'rotate(45deg)',
                  borderRadius: '4px'
                }}
              />
              
              {/* Inner shapes */}
              <div
                className="absolute inset-12"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 40px rgba(182, 22, 182, 0.4)',
                  borderRadius: '4px'
                }}
              />
              
              {/* Center glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #b616b6, transparent)',
                  filter: 'blur(30px)',
                  opacity: 0.8
                }}
              />
            </div>
          </motion.div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{ 
                background: '#b616b6',
                boxShadow: '0 0 10px rgba(182, 22, 182, 0.8)',
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}