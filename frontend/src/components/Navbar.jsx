import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { SiGooglechrome } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 shadow-lg py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                
                {/* Logo */}
                <Link to="/" className="text-4xl md:text-5xl font-extrabold text-white hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white hover:scale-110 transition-transform duration-300 font-serif tracking-wide">
    <span>Cere</span>
    <span className="text-yellow-300">Brix</span>
</div>

                </Link>

                {/* Navigation Links */}
                <div className="flex gap-8 items-center">
                    <ul className="hidden md:flex gap-6 text-lg font-semibold text-white">
                        <li>
                            <a href="https://ai-sdk-preview-pdf-support.vercel.app/" className="hover:text-yellow-300 transition">Practice</a>
                        </li>
                        <li>
                            <Link to="/home" className="hover:text-yellow-300 transition">Guide</Link>
                        </li>
                        <li>
                            <a href="https://github.com/AsmitaMallick/study-guide.git" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition flex items-center gap-1">
                                <FaGithub className="text-xl" />
                                <span className="hidden lg:inline">GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://chromewebstore.google.com/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk?hl=en-GB&utm_source=ext_sidebar" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition flex items-center gap-1">
                                <SiGooglechrome className="text-xl text-blue-500" />
                                <span className="hidden lg:inline">Extension</span>
                            </a>
                        </li>
                    </ul>

                    {/* Login Button */}
                    <div className="ml-8">
                        <Link to="/login">
                            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-2xl shadow-md transform hover:scale-105 transition duration-300">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;