import { useState, useEffect } from 'react'
import Booking from "./Component/Booking/Booking";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero"
import Title from "./Component/Title/Title"
import PopularCars from "./Component/PopularCars/PopularCars"
import RecommendationCars from "./Component/RecommendationCars/RecommendationCars"
import Footer from './Component/Footer/Footer';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.8 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', bounce: 0.6, duration: 1 }
  }
};

const titleVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', bounce: 0.7, duration: 1 } }
};

const footerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.5, delay: 0.5, duration: 1 } }
};

const heroVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: 'spring', stiffness: 120, damping: 18, duration: 1.5 }
  }
};

function App() {
  useEffect(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    if (savedMode && JSON.parse(savedMode)) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  return (
    <>
        <Navbar />
        <motion.div className='container'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroVariants}>
            <Hero />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <Booking />
          </motion.div>
          <motion.div variants={titleVariants}>
            <Title Title='Popular Cars' />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <PopularCars />
          </motion.div>
          <motion.div variants={titleVariants}>
            <Title Title='Recommendation Cars' showViewAll={false} />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <RecommendationCars />
          </motion.div>
        </motion.div>
        <motion.div
          variants={footerVariants}
          initial="hidden"
          animate="visible"
        >
          <Footer />
        </motion.div>
    </>
  );
}

export default App;
