import { motion } from 'motion/react';
import { Code, Palette, Zap, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Briefcase } from 'lucide-react';

const timelineItems = [
  { year: '2018', title: 'Software Engineer', icon: Code },
  { year: '2020', title: 'UI/UX Explorer', icon: Palette },
  { year: '2022', title: 'Product Designer', icon: Zap },
  { year: '2024', title: 'Senior Tech Designer', icon: Rocket },
];

export function About() {
  return (
    <section id="process" className="min-h-screen flex items-center px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Sobre <span style={{ color: '#b616b6' }}>Mim</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto" style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: '1.6' }}>
            Criando produtos digitais que as pessoas adoram usar
          </p>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div 
              className="relative overflow-hidden"
              style={{ 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 40px rgba(182, 22, 182, 0.2)',
                borderRadius: '4px'
              }}
            >
              <div className="p-8" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                <p className="text-white mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8', opacity: 0.9 }}>
                  Com mais de <span style={{ color: '#b616b6', fontWeight: 600 }}>8 anos de experiência</span>, 
                  especializo-me em transformar conceitos complexos em interfaces intuitivas e visualmente impressionantes.
                </p>
                <p className="text-white mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8', opacity: 0.9 }}>
                  Minha abordagem combina <span style={{ color: '#b616b6', fontWeight: 600 }}>design thinking</span>, 
                  pesquisa de usuários e desenvolvimento técnico para entregar soluções que geram resultados mensuráveis.
                </p>
                <p className="text-white" style={{ fontSize: '1.125rem', lineHeight: '1.8', opacity: 0.9 }}>
                  Atualmente, trabalho com equipes em todo o mundo, ajudando startups e empresas a criar 
                  produtos de <span style={{ color: '#b616b6', fontWeight: 600 }}>classe mundial</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Vertical Line */}
            <div 
              className="absolute left-8 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(182, 22, 182, 0.5), transparent)' }}
            />

            <div className="space-y-8">
              {[
                { year: '2024', title: 'Design Lead Sênior', company: 'TechCorp Global', description: 'Liderando iniciativas de design para produtos SaaS empresariais' },
                { year: '2021', title: 'Product Designer', company: 'StartupXYZ', description: 'Redesenhei a plataforma principal, aumentando o engajamento em 40%' },
                { year: '2019', title: 'UX Designer', company: 'DesignStudio', description: 'Trabalhei em mais de 30 projetos de clientes em diversos setores' },
                { year: '2016', title: 'Designer Jr', company: 'AgencyABC', description: 'Comecei minha jornada profissional em design de produtos' },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 items-start relative"
                >
                  {/* Icon */}
                  <div className="relative z-10">
                    <div 
                      className="p-2"
                      style={{ background: 'rgba(182, 22, 182, 0.1)', border: '1px solid rgba(182, 22, 182, 0.3)', borderRadius: '4px' }}
                    >
                      <Briefcase className="w-5 h-5" style={{ color: '#b616b6' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-white mb-2" style={{ fontSize: '1rem', fontWeight: 600, color: '#b616b6' }}>
                      {item.year}
                    </div>
                    <h3 className="text-white mb-1" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <div className="text-white mb-2" style={{ fontSize: '1rem', opacity: 0.7 }}>
                      {item.company}
                    </div>
                    <p className="text-white" style={{ fontSize: '0.875rem', opacity: 0.7, lineHeight: '1.6' }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}