import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import GridBackground from './components/backgrounds/GridBackground';
import ParticleBackground from './components/backgrounds/ParticleBackground';
import LoadingScreen from './components/ui/LoadingScreen';
import Sidebar from './components/layout/Sidebar';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import AboutSection from './components/sections/AboutSection';
import Footer from './components/layout/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [showParticles, setShowParticles] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleParticles = () => {
    setShowParticles(prev => !prev);
  };

  return (
    <>
      <GridBackground />
      {showParticles && <ParticleBackground />}
      {isLoading && <LoadingScreen />}

      <div className="split-layout">
        <Sidebar toggleTheme={toggleTheme} toggleParticles={toggleParticles} showParticles={showParticles} />
        <main className="main-content">
          <div className="main-content-wrapper">
            <Projects />
            <Skills />
            <AboutSection />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
