import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import heroImage from "../assets/images/learning-with-ai.png";

const HeroSection = () => {
    const gradientStyle = {
        background: 'radial-gradient(circle, rgba(0,85,184,1) 0%, rgba(0,0,0,1) 70%)',
    };

    return (<div className="grid grid-cols-1 md:grid-cols-5 m-10 md:px-20 h-[80%] relative">
        {/* Text Section */}
        <div className="col-span-2 flex flex-col justify-center items-start space-y-6">
          {/* Catchphrase */}
          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text tracking-widest uppercase animate-bounce mb-2">
            YOUR AI LEARNING BUDDY
          </h1>
      
          {/* Glassmorphic Card */}
          <div className="backdrop-blur-md bg-white/10 border left-20 border-white/20 rounded-3xl p-8 shadow-xl transition-all hover:scale-[1.02] duration-300">
            <h1 className="text-4xl md:text-6xl font-extrabold left-20  text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 drop-shadow-md tracking-tight">
              Reinventing Learning
            </h1>
      
            <h2 className="text-lg md:text-2xl font-medium text-gray-200 leading-relaxed mt-6">
              Meet <span className="text-green-300 font-bold">CereBrix</span> – your futuristic AI-powered learning buddy. Smart, sleek, and endlessly cool – revolutionize the way you learn today!
            </h2>
      
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://www.chatbase.co/chatbot-iframe/oCNAtJq9i9tYmUIQat3m6">
                <button className="bg-gradient-to-r from-blue-500 to-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300 flex items-center space-x-2">
                  <span>Get Started</span>
                  <MdKeyboardDoubleArrowRight className="text-2xl" />
                </button>
                </a>
              
              <a href="https://flowchart-gpt-metachool.vercel.app/new">
                <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full flex items-center shadow-md transform hover:scale-105 transition-transform duration-300">
                  <span>FLOWCHART</span>
                  <MdKeyboardDoubleArrowRight className="text-2xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
      
        {/* Image Section */}
        <div className="col-span-3 flex justify-end items-center relative overflow-hidden rounded-lg" style={{
          background: 'radial-gradient(circle, rgba(0,85,184,1) 0%, rgba(0,0,0,1) 70%)'
        }}>
          <div className="absolute top-0 left-40 w-12 h-12 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-r from-pink-400 via-purple-600 to-blue-600 opacity-30 rounded-full blur-2xl animate-pulse"></div>
      
          <div className="relative left-40 z-10 p-4">
            <img
              src={heroImage}
              alt="Hero"
              className="w-[60%] h-auto  rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      
    );
};

export default HeroSection;
