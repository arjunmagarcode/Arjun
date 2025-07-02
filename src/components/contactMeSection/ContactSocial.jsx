import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/arjun-pun-magar-27b0b42b4/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/arjunmagarcode" Icon={FiGithub} />
      
     
    </div>
  );
};

export default ContactSocial;
