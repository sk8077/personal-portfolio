import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="mb-4 md:mb-0">
          <span className="text-3xl font-semibold font-serif text-fuchsia-800 py-2 ">
            $unnyK
          </span>
          <p className="text-[18px] my-4">
            Coding creativity into reality – Crafting elegant web experiences
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Web Design</li>
            <li className="my-2">Web Development</li>
            <li className="my-2">SEO</li>
            <li className="my-2">E-commerce</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-4">Email: sunny.kumar.e21@nsut.ac.in</p>
          <p className="text-[16px] my-4">Phone: +91 8954311071</p>
        </div>
        <div className="mx-4">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase ">
            Follow Me
          </h2>
          <div className="flex space-x-4">
            <a
              className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out"
              href="https://github.com/sk8077"
              target="blank1"
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out"
              href="https://www.linkedin.com/in/sunny-kumar-b1367120a/"
              target="blank2"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out"
              href="https://twitter.com/SUNNYKUMAR1474"
              target="blank3"
            >
              <FaTwitter />
            </a>
            <a
              className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out"
              href="https://www.instagram.com/sunnysingh3841/"
              target="blank4"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
