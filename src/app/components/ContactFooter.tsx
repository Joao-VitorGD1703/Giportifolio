import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, Send, MapPin, Clock, Dribbble } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@designer.com', label: 'Email' },
];

export function ContactFooter() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 py-24">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Vamos <span style={{ color: '#b616b6' }}>Conversar</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto" style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: '1.6' }}>
            Tem um projeto em mente? Vamos criar algo incrível juntos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Seu nome"
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 text-white placeholder-gray-500 outline-none transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: focusedField === 'name' ? '1px solid #b616b6' : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: focusedField === 'name' ? '0 0 20px rgba(182, 22, 182, 0.3)' : 'none',
                  borderRadius: '4px'
                }}
              />

              <input
                type="email"
                placeholder="seu@email.com"
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 text-white placeholder-gray-500 outline-none transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: focusedField === 'email' ? '1px solid #b616b6' : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: focusedField === 'email' ? '0 0 20px rgba(182, 22, 182, 0.3)' : 'none',
                  borderRadius: '4px'
                }}
              />

            <textarea
              rows={6}
              placeholder="Conte-me sobre seu projeto..."
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className="w-full px-6 py-4 text-white placeholder-gray-500 outline-none transition-all resize-none"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: focusedField === 'message' ? '1px solid #b616b6' : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: focusedField === 'message' ? '0 0 20px rgba(182, 22, 182, 0.3)' : 'none',
                borderRadius: '4px'
              }}
            />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-8 py-5 text-white transition-all group"
            style={{
              background: '#b616b6',
              fontWeight: 600,
              fontSize: '1.125rem',
              boxShadow: '0 0 30px rgba(182, 22, 182, 0.5)',
              borderRadius: '4px'
            }}
          >
            Enviar Mensagem
            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {[
              { icon: Mail, label: 'Email', value: 'ola@designer.com', href: 'mailto:ola@designer.com' },
              { icon: MapPin, label: 'Localização', value: 'São Paulo, Brasil', href: '#' },
              { icon: Clock, label: 'Horário', value: 'Seg - Sex, 9h - 18h BRT', href: '#' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <item.icon className="w-6 h-6 text-white" />
                <div>
                  <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {item.label}
                  </h3>
                  <a href={item.href} className="text-gray-300" style={{ fontSize: '0.875rem' }}>
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 pt-12 border-t border-white border-opacity-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div className="text-white" style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
              <span style={{ color: '#b616b6' }}>◢</span> Designer
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Dribbble, label: 'Dribbble', href: '#' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px'
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-white" style={{ fontSize: '0.875rem', opacity: 0.6 }}>
            © 2024 Designer. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}