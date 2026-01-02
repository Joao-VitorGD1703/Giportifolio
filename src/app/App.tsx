import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BentoGrid } from './components/BentoGrid';
import { DetailedProjects } from './components/DetailedProjects';
import { TechStackMarquee } from './components/TechStackMarquee';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  return (
    <div 
      className="min-h-screen"
      style={{ 
        background: '#252525',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <BentoGrid />
      <DetailedProjects />
      <TechStackMarquee />
      <ContactFooter />
    </div>
  );
}