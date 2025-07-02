import { useTheme } from "../theme/ThemeContext"; // Adjust path as needed

const SkillsText = () => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan mb-10">My Skills</h2>
      <p className={`text-lg text-center max-w-[600px] ${
        isDark ? 'text-gray-300' : 'text-gray-700'
      }`}>
        I specialize in these technologies and apply industry best practices to build 
        high-quality, maintainable projects — as showcased in my portfolio work.
      </p>
    </div>
  );
};

export default SkillsText;