import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import img from "../assets/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div
      id="Home"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal uppercase"
        >
          Welcome To <span className="text-fuchsia-500">My Website</span>
        </h1>
        <p data-aos="fade-left">
          I am a passionate frontend web developer with a creative flair for
          designing beautiful and user-friendly websites. Here, you will find a
          showcase of my work, highlighting my skills in HTML, CSS, JavaScript,
          React, Redux-Toolkit, APIs ad other related technologies. Explore my
          projects to see how I turn ideas into visually stunning and
          interactive web experiences. Whether you are a fellow developer,
          potential client, or simply curious, I invite you to browse through my
          portfolio and discover the world of frontend development.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div data-aos="fade-up" className="flex space-x-2">
              <a
                href="https://github.com/sk8077"
                target="blank1"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/sunny-kumar-b1367120a/"
                target="blank2"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a
                href="https://twitter.com/SUNNYKUMAR1474"
                target="blank3"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FiTwitter className="text-[28px]" />
              </a>
              <a
                href="https://www.instagram.com/sunnysingh3841/"
                target="blank4"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src={img}
        width={290}
        height={280}
        className="rounded-full border-2 p-1 border-fuchsia-500 img_glow"
        alt=""
      />
    </div>
  );
};

export default Banner;
