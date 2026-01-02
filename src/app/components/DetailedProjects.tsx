import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, Calendar, Users, Award } from 'lucide-react';

const completedProjects = [
  {
    title: 'FinFlow Mobile Banking',
    category: 'Design de App Mobile',
    year: '2024',
    description: 'Redesign completo de um aplicativo de banco móvel focado em experiência do usuário e segurança. Implementei autenticação biométrica, fluxos de transação simplificados e criei um sistema de design moderno.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNjczNjQ0NDU&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: [
      { label: 'Retenção de Usuários', value: '+40%' },
      { label: 'Avaliação do App', value: '4.8/5' },
      { label: 'Downloads', value: '100K+' },
    ],
    tags: ['Mobile', 'Fintech', 'React Native', 'Figma'],
    impact: 'Reduziu tickets de suporte ao cliente em 35% e aumentou usuários ativos diários em 40%'
  },
  {
    title: 'Plataforma DataViz Analytics',
    category: 'Design de Dashboard',
    year: '2024',
    description: 'Construí um dashboard analítico com IA para clientes empresariais. Criei componentes intuitivos de visualização de dados com atualizações em tempo real e widgets customizáveis.',
    image: 'https://images.unsplash.com/photo-1634804519576-d7047c5b39d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3Mjg2NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: [
      { label: 'Processamento de Dados', value: '10M+/dia' },
      { label: 'Tempo de Carregamento', value: '<2s' },
      { label: 'Clientes', value: '50+' },
    ],
    tags: ['Dashboard', 'IA/ML', 'React', 'D3.js'],
    impact: 'Permitiu que clientes tomassem decisões baseadas em dados 3x mais rápido com visualizações intuitivas'
  },
  {
    title: 'GlobalShop E-commerce',
    category: 'Plataforma Web',
    year: '2023',
    description: 'Desenhei uma plataforma de e-commerce multi-moeda atendendo mais de 20 países. Implementei experiências localizadas, filtragem avançada e processo de checkout simplificado.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NzMwNDExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: [
      { label: 'Taxa de Conversão', value: '+25%' },
      { label: 'Abandono de Carrinho', value: '-30%' },
      { label: 'Países', value: '20+' },
    ],
    tags: ['E-commerce', 'Next.js', 'Tailwind', 'Stripe'],
    impact: 'Gerou mais de R$ 10M em receita adicional através de UX melhorado e otimização de conversão'
  },
];

export function DetailedProjects() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Projetos <span style={{ color: '#b616b6' }}>Concluídos</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto" style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: '1.6' }}>
            Uma vitrine de trabalhos recentes onde design thinking encontra execução técnica
          </p>
        </motion.div>

        <div className="space-y-12">
          {completedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                borderRadius: '4px',
              }}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden group"
                style={{ borderRadius: '4px' }}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                  style={{ background: 'rgba(182, 22, 182, 0.9)' }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white text-black"
                    style={{ borderRadius: '4px' }}
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white text-black"
                    style={{ borderRadius: '4px' }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Content */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span
                      className="px-3 py-1 text-white"
                      style={{
                        background: 'rgba(182, 22, 182, 0.2)',
                        border: '1px solid #b616b6',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        borderRadius: '4px',
                      }}
                    >
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2 text-white" style={{ opacity: 0.6, fontSize: '0.875rem' }}>
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                  </div>
                  <h3 className="text-white mb-3" style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                    {project.title}
                  </h3>
                  <p className="text-white" style={{ fontSize: '1rem', opacity: 0.8, lineHeight: '1.7' }}>
                    {project.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-4 text-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                      }}
                    >
                      <div className="text-white mb-1" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#b616b6' }}>
                        {stat.value}
                      </div>
                      <div className="text-white" style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Impact */}
                <div
                  className="p-4 flex items-start gap-3"
                  style={{
                    background: 'rgba(182, 22, 182, 0.1)',
                    border: '1px solid rgba(182, 22, 182, 0.3)',
                    borderRadius: '4px',
                  }}
                >
                  <Award className="w-5 h-5 shrink-0 mt-1" style={{ color: '#b616b6' }} />
                  <p className="text-white" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                    <span style={{ fontWeight: 600 }}>Impacto:</span> {project.impact}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-white"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        borderRadius: '4px',
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