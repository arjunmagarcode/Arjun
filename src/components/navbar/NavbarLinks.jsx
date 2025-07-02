import { Link } from "react-scroll";
import { useTheme } from "../theme/ThemeContext";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const { isDark } = useTheme();

  return (
    <ul className={`flex lg:flex-row sm:flex-col gap-8 font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:w-full py-4 transition-colors duration-300 ${
      isDark 
        ? 'text-slate-300 sm:bg-slate-900/80 backdrop-blur-lg lg:bg-transparent rounded-lg' 
        : 'text-slate-700 sm:bg-white/80 backdrop-blur-lg lg:bg-transparent rounded-lg'
    }`}>
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className={`cursor-pointer hover:text-blue-500 transition-all duration-300 font-medium ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-blue-500 w-0 group-hover:w-full h-[2px] transition-all duration-300 rounded-full"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;