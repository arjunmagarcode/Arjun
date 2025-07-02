import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useTheme } from "../theme/ThemeContext"; // Adjust path as needed

const SkillsMain = () => {
  const { isDark } = useTheme();

  return (
    <div id="skills">
      <div className={`max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-black' : 'bg-gray-50'
      }`}>
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>
        
        {/* Desktop Skills - Horizontal Layout */}
        <div className="mt-16 sm:hidden lg:block">
          <AllSkills />
        </div>
        
        {/* Mobile/Tablet Skills */}
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;