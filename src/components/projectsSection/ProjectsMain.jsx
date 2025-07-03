import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Personal Portfolio",
    year: "July 2025",
    description:
      "Developed a fully responsive personal portfolio using React, Vite, Tailwind CSS, and Framer Motion. Includes animated sections, project showcase, and deployed on Vercel.",
    github: "https://github.com/arjunmagarcode/Arjun",
  },
  {
    name: "Flight Booking System | C++, Data Structures (AVL Tree) ",
    year: "April 2025",
    description:
      "Developed a console-based flight booking system in C++ with AVL Trees for efficient data handling, seat map visualization, and advanced search features. Collaborated in a team of four with a focus on modular design, documentation, and testing.",

    github: "https://github.com/arjunmagarcode/Flight_booking_system",
  },
  {
    name: "Rock Paper Scissors",
    year: "June 2025",
    description:
      "Developed a browser-based Rock Paper Scissors game with HTML, CSS, and JavaScript. The game features a clean UI, real-time score updates, and responsive interactions using DOM manipulation and event handling..",
    github: "https://github.com/arjunmagarcode/Rock_paper_scissors-",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-10 mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
