import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="loading-screen"
    >
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="loading-logo"
      >
        <div className="loading-initials">M</div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
