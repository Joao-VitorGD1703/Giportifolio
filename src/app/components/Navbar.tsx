import { motion } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12"
      style={{
        background: 'rgba(37, 37, 37, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white relative z-50 shrink-0" style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
          <span style={{ color: '#b616b6' }}>◢</span> Gi_Designer
        </div>

        {/* Desktop Nav Links */}
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

        {/* CTA Button (Desktop) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-3 text-white rounded transition-all"
          style={{
            background: '#b616b6',
            fontWeight: 600,
            boxShadow: '0 0 20px rgba(182, 22, 182, 0.4)',
            borderRadius: '4px'
          }}
        >
          Vamos Conversar
        </motion.button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-50 shrink-0 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-40 md:hidden"
            style={{
              background: 'rgba(37, 37, 37, 0.98)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex flex-col gap-6 pt-24 px-6">
              <a
                href="#projects"
                className="text-white text-lg font-medium hover:text-[#b616b6] transition-colors border-b border-white/10 pb-4"
                onClick={() => setIsOpen(false)}
              >
                Projetos
              </a>

              <a
                href="#process"
                className="text-white text-lg font-medium hover:text-[#b616b6] transition-colors border-b border-white/10 pb-4"
                onClick={() => setIsOpen(false)}
              >
                Processo
              </a>

              <button
                className="w-full py-4 text-white rounded font-bold mt-2"
                style={{
                  background: '#b616b6',
                  boxShadow: '0 0 20px rgba(182, 22, 182, 0.4)',
                }}
              >
                Vamos Conversar
              </button>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}