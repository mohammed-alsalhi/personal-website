import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const TopNav = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="top-nav">
      <div className="top-nav-container">
        <Link to="/" className="top-nav-logo">
          Mohammed Al Salhi
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default TopNav;
