import { motion } from 'motion/react';
import { Sparkles, Layout, Smartphone, Globe } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Design System Architecture',
    description: 'Built a scalable component library used by 50+ developers',
    icon: Layout,
    gradient: 'linear-gradient(135deg, rgba(182, 22, 182, 0.2), rgba(182, 22, 182, 0.05))',
    tags: ['Design System', 'Scalability', 'Component Library'],
  },
  {
    title: 'Mobile Banking App',
    description: 'Redesigned UX flow, increasing user retention by 40%',
    icon: Smartphone,
    gradient: 'linear-gradient(135deg, rgba(182, 22, 182, 0.15), rgba(182, 22, 182, 0.03))',
    tags: ['Mobile App', 'UX Design', 'User Retention'],
  },
  {
    title: 'AI-Powered Dashboard',
    description: 'Created intuitive interfaces for complex data visualization',
    icon: Sparkles,
    gradient: 'linear-gradient(135deg, rgba(182, 22, 182, 0.25), rgba(182, 22, 182, 0.08))',
    tags: ['AI', 'Dashboard', 'Data Visualization'],
  },
  {
    title: 'Global E-commerce Platform',
    description: 'Designed multi-currency checkout experience for 20+ countries',
    icon: Globe,
    gradient: 'linear-gradient(135deg, rgba(182, 22, 182, 0.18), rgba(182, 22, 182, 0.04))',
    tags: ['E-commerce', 'Multi-currency', 'Checkout Experience'],
  },
];

export function BentoGrid() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Trabalhos em <span style={{ color: '#b616b6' }}>Destaque</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto" style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: '1.6' }}>
            Uma seleção de projetos que definem minha abordagem de design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative p-8 cursor-pointer overflow-hidden"
              style={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '4px'
              }}
            >
              {/* Hover border effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  border: '1px solid #b616b6',
                  boxShadow: '0 0 30px rgba(182, 22, 182, 0.3)',
                  pointerEvents: 'none',
                  borderRadius: '4px'
                }}
              />

              {/* Gradient background */}
              <div 
                className="absolute inset-0 opacity-50"
                style={{ background: item.gradient }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div 
                  className="inline-flex p-3"
                  style={{ 
                    background: 'rgba(182, 22, 182, 0.15)',
                    border: '1px solid rgba(182, 22, 182, 0.3)',
                    boxShadow: '0 0 20px rgba(182, 22, 182, 0.2)',
                    borderRadius: '4px'
                  }}
                >
                  <item.icon className="w-6 h-6" style={{ color: '#b616b6' }} />
                </div>

                <h3 className="text-white mb-3" style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
                  {item.title}
                </h3>
                <p className="text-white mb-4" style={{ fontSize: '0.875rem', opacity: 0.7, lineHeight: '1.6' }}>
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-white"
                      style={{
                        background: 'rgba(182, 22, 182, 0.15)',
                        border: '1px solid rgba(182, 22, 182, 0.3)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}