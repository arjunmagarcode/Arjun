import { useTheme } from "../theme/ThemeContext";

const NavbarLogo = () => {
  const { isDark } = useTheme();

  return (
    <div>
      <h1 className={`text-2xl sm:hidden md:block transition-colors duration-300 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Arjun Pun Magar
      </h1>
      <h1 className={`font-special font-extrabold text-4xl md:hidden sm:block transition-colors duration-300 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        APM
      </h1>
    </div>
  );
};

export default NavbarLogo;