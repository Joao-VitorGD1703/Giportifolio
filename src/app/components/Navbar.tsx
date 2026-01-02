import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12"
      style={{ 
        background: 'rgba(37, 37, 37, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white" style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
          <span style={{ color: '#b616b6' }}>◢</span> Designer
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-12">
          <a 
            href="#projects" 
            className="text-white hover:text-opacity-70 transition-all"
            style={{ fontWeight: 500 }}
          >
            Projetos
          </a>
          <a 
            href="#process" 
            className="text-white hover:text-opacity-70 transition-all"
            style={{ fontWeight: 500 }}
          >
            Processo
          </a>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 text-white rounded transition-all"
          style={{ 
            background: '#b616b6',
            fontWeight: 600,
            boxShadow: '0 0 20px rgba(182, 22, 182, 0.4)',
            borderRadius: '4px'
          }}
        >
          Vamos Conversar
        </motion.button>
      </div>
    </motion.nav>
  );
}