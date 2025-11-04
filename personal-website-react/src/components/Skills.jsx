import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skillsData = [
    { name: "Python", level: 90, category: "Languages" },
    { name: "Java", level: 85, category: "Languages" },
    { name: "JavaScript", level: 88, category: "Languages" },
    { name: "HTML/CSS", level: 92, category: "Languages" },
    { name: "React", level: 85, category: "Frameworks" },
    { name: "Node.js", level: 80, category: "Frameworks" },
    { name: "Git & GitHub", level: 87, category: "Tools" },
    { name: "VS Code", level: 95, category: "Tools" },
    { name: "Linux/Unix", level: 78, category: "Tools" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className={`skill-progress ${isVisible ? 'animate' : ''}`}
                  style={{ '--skill-level': `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-category-tag">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
