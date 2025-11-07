const ThemeToggle = ({ toggleTheme }) => {
  return (
    <button
      className="theme-toggle-sidebar"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="sun-icon">☀️</span>
      <span className="moon-icon">🌙</span>
    </button>
  );
};

export default ThemeToggle;
