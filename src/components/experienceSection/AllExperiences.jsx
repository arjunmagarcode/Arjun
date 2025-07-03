import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "SWE intern",
    company: "Sports and Media Inc",
    date: "June 2025 - Present",
    responsibilities: [
      "Developed and optimized gameplay systems using programming languages such as Java/C++ to improveperformance and player experience.",
      "Collaborated with cross-functional teams including artists and engineers to implement interactive features andUI/UX prototypes.",
      "Implemented data structures and algorithms to manage game events, player progression, and real-time statsintegration.",
      "Conducted code reviews, debugging, and iterative testing to enhance gameplay balance and stability.",
    ],
  },
  {
    job: "Desk Assistant, Office of Residence Life ",
    company: "University of Southern Mississippi ",
    date: "Jan 2025 - Present",
    responsibilities: [
      "Assisted residents and staff with housing inquiries and campus resources, improving communication and support.",
      "Monitored resident safety protocols and enforced building access procedures.",
      "Organized and documented maintenance requests, streamlining operations and improving response time.",
      "Demonstrated reliability, professionalism, and attention to detail in a fast-paced campus environment.",
    ],
  },
 /*{
    job: "Course Instructor",
    company: "Sprints",
    date: "2024 - Present",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },

  {
    job: "Course Instructor",
    company: "Sprints",
    date: "2024 - Present",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
 */ 
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <SingleExperience key={index} experience={experience} />
      ))}
    </div>
  );
};

export default AllExperiences;
