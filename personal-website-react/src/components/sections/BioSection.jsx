import { motion } from 'framer-motion';
import { useState } from 'react';
import profileImage from '../../assets/profile.png';
import winkImage from '../../assets/wink.png';
import TypingText from '../ui/TypingText';

const roles = [
  'CS Freshman @ UIUC',
  'Aspiring Full-Stack Developer'
];

const BioSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bio-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="profile-picture"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={isHovered ? winkImage : profileImage} alt="Mohammed Al Salhi" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bio-name"
      >
        Mohammed Al Salhi
      </motion.h1>

      <div className="bio-title-container">
        <p className="bio-title">
          <TypingText
            texts={roles}
            typingSpeed={80}
            deletingSpeed={40}
            pauseTime={1500}
          />
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bio-location-container"
      >
        <motion.div
          className="location-item current-location"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.span
            className="location-indicator"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="location-text">Muscat, Oman</span>
        </motion.div>

        <motion.span
          className="location-separator"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          •
        </motion.span>

        <motion.div
          className="location-item home-location"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="location-text">Muscat, Oman</span>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bio-description"
      >
        Passionate about coding, problem-solving, and building cool projects.
        Always learning and exploring new technologies.
      </motion.p>
    </div>
  );
};

export default BioSection;
