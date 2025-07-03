import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const SingleProject = ({ name, year, description, github }) => {
  return (
    <div className="bg-lightBrown/10 p-6 rounded-xl border border-orange shadow-md">
      <h3 className="text-2xl text-cyan font-bold">{name}</h3>
      <p className="text-lightGrey text-sm italic mb-2">{year}</p>
      <p className="text-white mb-4">{description}</p>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan hover:text-orange flex items-center gap-2 transition-all duration-300"
      >
        View on GitHub <BsFillArrowUpRightCircleFill />
      </a>
    </div>
  );
};

export default SingleProject;

