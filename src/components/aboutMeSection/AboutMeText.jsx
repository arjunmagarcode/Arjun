import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I’m a Computer Science undergrad who’s genuinely passionate about
        building things with code. My background in mathematics has really
        helped shape the way I approach problem-solving — whether I’m designing
        a clean front-end or figuring out the logic behind the scenes. I’ve
        worked on everything from simple games like Rock Paper Scissors to
        full-stack apps and data structure-driven projects like an AVL
        Tree-based flight booking system. I love experimenting with technologies
        like React, Tailwind CSS, Vite, and Framer Motion to make things both
        functional and fun. Right now, I’m focused on leveling up as a
        full-stack developer and working toward building software that’s not
        just useful, but meaningful. I'm always curious, always learning, and
        always ready to take on new challenges.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
