import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar py-5 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 shadow-lg">
            <header className="w-[90%] h-16 flex justify-between items-center mx-auto py-2">
                {/* Brand Logo */}
                <Link to='/'>
                    <div className="text-6xl font-extrabold text-white hover:scale-110 transition-transform duration-300">
                        <span className="tracking-wide">Cere</span>
                        <span className="text-yellow-300">Brix</span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div>
                    <ul className="flex flex-row gap-5 md:gap-12 items-center text-xl">
                        <Link to='/mcq'>
                            <li className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-5 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 hidden md:block">
                                PRACTICE
                            </li>
                        </Link>
                        <Link to='/home'>
                            <li className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-5 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 hidden md:block cursor-pointer">
                                GUIDE
                            </li>
                        </Link>
                    </ul>
                </div>

                {/* Login Button (Optional) */}
                <div>
                    <Link to='/login'>
                    <button className="bg-yellow-300 hover:bg-yellow-400 text-black text-xl font-bold py-2 px-5 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 hidden md:block cursor-pointer">
                        Login
                    </button>
                    </Link>
                </div>
            </header>

            {/* GitHub Link */}
            {/* <div className="flex justify-center items-center mt-2">
                <a href="https://github.com/rajesh-adk-137/StudyPal" target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white md:px-5 md:py-2 rounded-md md:flex items-center space-x-2 px-4 py-2 shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <FaGithub className="text-2xl" />
                        <span className="hidden md:inline">GitHub</span>
                    </button>
                </a>
            </div> */}
        </div>
    );
};

export default Navbar;
