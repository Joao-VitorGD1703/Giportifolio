import { motion } from 'motion/react';
import { Code, Palette, Zap, Rocket, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
        <motion.div
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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:sticky md:top-24"
          >
            <div
              className="relative overflow-hidden aspect-[3/4] w-full max-w-md flex items-center justify-center bg-zinc-900"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 40px rgba(182, 22, 182, 0.2)',
                borderRadius: '12px'
              }}
            >
              {/* Image Placeholder - Purple Cross */}
              <div className="relative z-10 p-8 rounded-full" style={{ background: 'rgba(182, 22, 182, 0.1)' }}>
                <div className="absolute inset-0 rounded-full" style={{ border: '2px solid rgba(182, 22, 182, 0.3)' }} />
                {/* Cruz Rotacionada (X) ou Reta (+)? O pedido foi "cruz". Usarei + rotacionado levemente ou reto. Vou usar o Plus da lucide 'rotate-45' para fazer um X estiloso ou apenas + */}
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#b616b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>

              {/* Overlay Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)'
                }}
              />

              {/* Decorative Elements */}
              <div
                className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md"
                style={{
                  background: 'rgba(182, 22, 182, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px'
                }}
              >
                <div className="text-white font-bold text-lg">Giovanna Soares</div>
                <div className="text-white/70 text-sm">Product Designer na IBM</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            {/* Description Text */}
            <div
              className="relative overflow-hidden p-8"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px'
              }}
            >
              <p className="text-white mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8', opacity: 0.9 }}>
                Com <span style={{ color: '#b616b6', fontWeight: 600 }}>1 ano e meio de experiência</span>,
                atualmente trabalho na <strong>IBM</strong> focada na área de vendas. Além disso, possuo domínio em <strong>Figma</strong> e edição profissional de fotos e vídeos com o pacote <strong>Adobe</strong>.
              </p>
              <p className="text-white mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8', opacity: 0.9 }}>
                Minha especialidade é o design de <span style={{ color: '#b616b6', fontWeight: 600 }}>MVPs (Mínimo Produto Viável)</span> para grandes clientes, transformando necessidades de negócios complexas em soluções visuais tangíveis e eficientes.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative pt-4">
              <h3 className="text-white mb-8 text-2xl font-bold flex items-center gap-3">
                <Rocket className="w-6 h-6" style={{ color: '#b616b6' }} />
                Trajetória Profissional
              </h3>

              {/* Vertical Line */}
              <div
                className="absolute left-8 top-20 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(182, 22, 182, 0.5), transparent)' }}
              />

              <div className="space-y-8">
                {[
                  {
                    year: 'Atual',
                    title: 'Designer de MVPs',
                    company: 'IBM',
                    duration: '1 ano e 6 meses',
                    description: 'Atuação na área de vendas, desenvolvendo protótipos e MVPs para demonstrar valor e inovação para grandes contas.'
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 items-start relative group"
                  >
                    {/* Icon */}
                    <div className="relative z-10">
                      <div
                        className="p-2 transition-transform group-hover:scale-110 duration-300"
                        style={{ background: 'rgba(182, 22, 182, 0.1)', border: '1px solid rgba(182, 22, 182, 0.3)', borderRadius: '4px' }}
                      >
                        <Briefcase className="w-5 h-5" style={{ color: '#b616b6' }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-white mb-2" style={{ fontSize: '1rem', fontWeight: 600, color: '#b616b6' }}>
                        {item.duration} • {item.company}
                      </div>
                      <h3 className="text-white mb-1" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                        {item.title}
                      </h3>
                      <p className="text-white" style={{ fontSize: '0.875rem', opacity: 0.7, lineHeight: '1.6' }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}