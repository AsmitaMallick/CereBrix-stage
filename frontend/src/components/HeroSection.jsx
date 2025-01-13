import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import heroImage from "../assets/images/learning-with-ai.png";

const HeroSection = () => {
    const gradientStyle = {
        background: 'radial-gradient(circle, rgba(0,85,184,1) 0%, rgba(0,0,0,1) 70%)', // Radial gradient
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 m-10 h-[80%] md:px-20 relative">
            {/* Text Section */}
            <div className="col-span-2 flex flex-col justify-center items-start space-y-6">
                <div>
                    <h1 className="text-blue-400 text-4xl text-bold tracking-widest animate-pulse my-2">
                        YOUR AI LEARNING BUDDY
                    </h1>
                    <h1 className="md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 my-2">
                    Reinventing Learning
                    </h1>
                    <h2 className="text-lg md:text-4xl font-medium text-gray-300 leading-relaxed tracking-wide my-10 ">
                    Meet <span className="text-green-300 font-bold">CereBrix</span> – your futuristic AI-powered learning buddy. Smart, sleek, and endlessly cool – revolutionize the way you learn today!
                </h2>
                    <div className="flex flex-row gap-2">
                        {/* Try it Now Button */}
                        <Link to="/mcq">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-700 text-white font-semibold px-6 py-3 mr-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300 flex items-center space-x-2">
                            <span>Get Started</span>
                            <MdKeyboardDoubleArrowRight className="text-2xl" />
                        </button>
                        </Link>
                        {/* Vote on Quine Button */}
                        <a href="https://www.copilotkit.ai/">
                            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full flex items-center shadow-md transform hover:scale-105 transition-transform duration-300">
                                <span>GUIDEMAP</span>
                                <MdKeyboardDoubleArrowRight className="text-2xl" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div
                className="col-span-3 flex justify-end items-center relative overflow-hidden rounded-lg"
            style={gradientStyle}
            >
            {/* Floating Gradient Effect */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-40 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-r from-pink-400 via-purple-600 to-blue-600 opacity-30 rounded-full blur-2xl animate-pulse"></div>

                {/* Hero Image */}
                <div className="relative z-10 p-4">
                 <img
                 src={heroImage}
                 alt="Hero Image"
                 className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out"
                 />
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
