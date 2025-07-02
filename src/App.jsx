import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import { useTheme } from "./components/theme/ThemeContext";

function App() {
  const { isDark } = useTheme();

  return (
    <main className={`font-body relative overflow-hidden min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'text-white bg-black' 
        : 'text-gray-900 bg-white'
    }`}>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <AboutMeMain />
      <SkillsMain />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
