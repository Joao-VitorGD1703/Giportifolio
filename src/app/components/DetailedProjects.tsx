import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback'; // Certifique-se que o caminho está correto ou ajuste se necessário
import { ExternalLink, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { request } from '../../lib/datocms/client';

const PROJECT_QUERY = `
 query {
   	projestoRealizado{
      coverImage{	url}
      title
      description
      slug
      tags
    }
}
`;

const completedProjects = [
  {
    title: 'FinFlow Mobile Banking',
    description: 'Redesign completo de um aplicativo de banco móvel focado em experiência do usuário e segurança.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNjczNjQ0NDU&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Mobile', 'Fintech', 'React Native', 'Figma'],
  },
  {
    title: 'Plataforma DataViz Analytics',
    description: 'Dashboard analítico com IA para clientes empresariais com visualização de dados em tempo real.',
    image: 'https://images.unsplash.com/photo-1634804519576-d7047c5b39d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3Mjg2NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Dashboard', 'IA/ML', 'React', 'D3.js'],
  },
  {
    title: 'GlobalShop E-commerce',
    description: 'Plataforma de e-commerce multi-moeda com experiências localizadas e checkout simplificado.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlY29tbWerceUyB3ZWJzaXRlfGVufDF8fHx8MTc2NzMwNDExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['E-commerce', 'Next.js', 'Tailwind', 'Stripe'],
  },
];

export function DetailedProjects() {
  const [projects, setProjects] = useState(completedProjects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data: any = await request({ query: PROJECT_QUERY });
        console.log('--- Resposta do DatoCMS ---');
        console.log(data);

        if (data && data.projestoRealizado) {
          // Garante que é um array, mesmo que venha um objeto único
          const sourceData = Array.isArray(data.projestoRealizado) ? data.projestoRealizado : [data.projestoRealizado];

          const mappedProjects = sourceData.map((p: any) => ({
            title: p.title,
            description: p.description,
            image: p.coverImage?.url || '',
            // Ajuste para a estrutura JSON onde tags está dentro de tags: { tags: [...] }
            tags: p.tags?.tags && Array.isArray(p.tags.tags) ? p.tags.tags : [],
          }));
          setProjects(mappedProjects);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do DatoCMS:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-24 px-6 md:px-12" id="projects-grid">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full group"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'border-color 0.3s'
              }}
              whileHover={{
                y: -5,
                borderColor: 'rgba(182, 22, 182, 0.5)'
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video w-full">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay with links - Optional usage if needed, otherwise hidden or simplified */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {/* Links could go here if requested, keeping it clean for now */}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-white mb-3 text-xl font-bold leading-tight">
                  {project.title}
                </h3>

                <p className="text-white/70 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags Footer */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-white/90 text-xs font-medium rounded"
                      style={{
                        background: 'rgba(182, 22, 182, 0.15)',
                        border: '1px solid rgba(182, 22, 182, 0.2)',
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