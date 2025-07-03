import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useState } from "react";

const HeroText = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 h-screen w-full px-4">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey dark:text-lightCyan"
      >
        Aspiring Full-Stack Software Engineer (SWE)
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase dark:text-lightCyan"
      >
        Arjun <br className="sm:hidden md:block" />
        Pun Magar
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex items-center gap-4 mt-4"
      >
        <a
          href="public/images/ArjunMagar.pdf"
          download
          className="px-6 py-3 font-semibold text-white bg-orange rounded-lg shadow-neon hover:bg-orange-600 transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;

