import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import GridBackground from './components/backgrounds/GridBackground';
import ParticleBackground from './components/backgrounds/ParticleBackground';
import LoadingScreen from './components/ui/LoadingScreen';
import TopNav from './components/layout/TopNav';
import Sidebar from './components/layout/Sidebar';
import HomePage from './pages/HomePage';
import BlogListing from './components/blog/BlogListing';
import BlogPost from './components/blog/BlogPost';

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

      <TopNav />

      <div className="split-layout">
        <Sidebar toggleTheme={toggleTheme} toggleParticles={toggleParticles} showParticles={showParticles} />
        <main className="main-content">
          <div className="main-content-wrapper">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogListing />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
