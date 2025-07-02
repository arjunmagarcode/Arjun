import { useTheme } from "../theme/ThemeContext"; // Adjust path as needed

const SingleSkill = ({ imgSvg, text }) => {
  const { isDark } = useTheme();

  return (
    <div className="hover:-translate-y-2 transition-all duration-300 group">
      <div className="flex flex-col items-center gap-3 p-4">
        <div className={`h-16 w-16 flex items-center justify-center rounded-xl transition-all duration-300 text-3xl group-hover:scale-110 ${
          isDark 
            ? 'bg-slate-800 text-blue-400 group-hover:bg-slate-700' 
            : 'bg-slate-100 text-blue-600 group-hover:bg-slate-200'
        }`}>
          {imgSvg}
        </div>
        <p className={`font-semibold text-sm transition-colors duration-300 ${
          isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default SingleSkill;