import { useLocation } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import BioSection from '../sections/BioSection';
import ContactLinks from '../ui/ContactLinks';

const Sidebar = ({ toggleTheme, toggleParticles, showParticles }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <aside className="sidebar">
      <div className="toggle-buttons">
        <ThemeToggle toggleTheme={toggleTheme} />
        <button
          className="particles-toggle"
          onClick={toggleParticles}
          aria-label="Toggle particles"
          title="Toggle particles"
        >
          {showParticles ? '✨' : '🚫'}
        </button>
      </div>
      {isHomePage && (
        <>
          <BioSection />
          <ContactLinks />
          <nav className="nav-links-sidebar">
            <a href="#projects" className="nav-link-sidebar">Projects</a>
            <a href="#skills" className="nav-link-sidebar">Skills</a>
            <a href="#about" className="nav-link-sidebar">About</a>
          </nav>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
