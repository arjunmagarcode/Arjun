import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../theme/ThemeContext"; // Adjust path as needed

const NavbarBtn = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className={`px-6 py-3 text-lg font-semibold font-body flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer rounded-lg ${
        isDark 
          ? 'text-white bg-slate-800 hover:bg-slate-700 border border-slate-600' 
          : 'text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300'
      }`}
    >
      {isDark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-blue-600" />}
      <span className="sm:hidden md:block">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default NavbarBtn;