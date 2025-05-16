import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({ darkMode = true }) => {
  return (
    <footer
      className={`flex flex-col items-center justify-between gap-10 py-10 text-sm ${
        darkMode
          ? "bg-gray-950 text-gray-300"
          : "bg-gray-100 text-gray-700"
      }`}
    >
      {/* Top section with logo and links */}
      <div className="w-full mx-auto flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-0">
        
        {/* Logo and tagline */}
        <div className="flex flex-col items-start gap-3">
          <Link to="/">
            <div className="text-4xl font-extrabold text-white hover:scale-110 transition-transform duration-300">
              <span className="tracking-wide">Cere</span>
              <span className="text-yellow-300">Brix</span>
            </div>
          </Link>
          <p className="text-xl text-gray-600">
            Your Personalized Learning Companion.
          </p>

          {/* Social icons */}
          <div className="mt-3 flex gap-3 text-xl text-gray-500">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTiktok className="hover:text-white cursor-pointer" />
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Navigation links */}
        <div className="flex w-full md:w-2/5 justify-evenly">
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/AsmitaMallick/study-guide.git"
              className="hover:text-white hover:cursor-pointer"
            >
              About Us
            </a>
            <a
              href="https://github.com/AsmitaMallick/study-guide.git"
              className="hover:text-white hover:cursor-pointer"
            >
              Feedback
            </a>
            <a
              href="https://github.com/AsmitaMallick/study-guide.git"
              className="hover:text-white hover:cursor-pointer"
            >
              Contact Us
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/AsmitaMallick/study-guide.git"
              className="hover:text-white hover:cursor-pointer"
            >
              Quine
            </a>
            <a
              href="https://flowchart.fun/"
              className="hover:text-white hover:cursor-pointer"
            >
              Flowchart
            </a>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="text-gray-600 text-lg">
        &#169; CereBrix 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
