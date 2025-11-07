import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = {
    "Languages": [
      "Python",
      "Kotlin",
      "C++",
      "HTML/CSS"
    ],
    "Tools & Technologies": [
      "Git & GitHub"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <motion.div
          className="skills-pills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-pills-category"
              variants={categoryVariants}
            >
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-pills-wrapper">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-pill"
                    variants={pillVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
