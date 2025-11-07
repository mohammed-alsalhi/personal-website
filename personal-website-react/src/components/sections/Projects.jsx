import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      layout
    >
      <div
        ref={cardRef}
        className="project-card tilt-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-shine"></div>
        <div className="project-header">
          <h3>{project.title}</h3>
          {project.githubUrl !== "#" && (
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          )}
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="tag pulse-tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      title: "TradeWise",
      description: "Investment news pipeline with LLM-powered sentiment analysis for trading decisions.",
      tags: ["Python", "Gemini AI", "APIs", "NLP"],
      category: "AI/ML",
      githubUrl: "#"
    },
    {
      title: "Kumti",
      description: "E-commerce marketplace using computer vision to match traditional clothing patterns.",
      tags: ["Python", "OpenCV", "Streamlit"],
      category: "AI/ML",
      githubUrl: "#"
    },
    {
      title: "PM/ERP System",
      description: "Project management system for construction workflow, budgeting, and expense tracking.",
      tags: ["Python", "SQL", "System Design"],
      category: "Full-Stack",
      githubUrl: "#"
    }
  ];

  const categories = ['All', 'AI/ML', 'Full-Stack'];

  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="project-filters">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleFilter(category)}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
