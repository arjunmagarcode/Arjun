import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";
import { useTheme } from "../theme/ThemeContext";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const { isDark } = useTheme();

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className={`flex justify-between w-full max-w-[1200px] mx-auto items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] transition-colors duration-300 ${
        isDark 
          ? 'bg-black/90 backdrop-blur-md' 
          : 'bg-white/90 backdrop-blur-md'
      }`}>
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className={`flex lg:hidden sm:block p-6 items-center justify-center rounded-full border-orange border-[0.5px] transition-colors duration-300 ${
        isDark 
          ? 'bg-black/90 backdrop-blur-md' 
          : 'bg-white/90 backdrop-blur-md'
      }`}>
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;