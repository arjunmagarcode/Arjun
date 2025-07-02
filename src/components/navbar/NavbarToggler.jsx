import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { useTheme } from "../theme/ThemeContext";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const { isDark } = useTheme();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      className={`text-2xl p-3 transition-colors duration-300 hover:scale-105 ${
        isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
      }`}
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;