import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';

const HomePage = () => {
  return (
    <HomePageExtend />
  );
};

const HomePageExtend = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');
  const [additionalContext, setAdditionalContext] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleQualificationChange = (event) => {
    setSelectedQualification(event.target.value);
  };

  const handleAdditionalContextChange = (event) => {
    setAdditionalContext(event.target.value);
  };

  const generateRevision = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Adjusting the JSON structure to align with backend expectations
    const requestData = {
      subject: selectedSubject,
      qualification: selectedQualification,
      additional_context: additionalContext, // Ensure `additional_context` matches backend naming
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/guide', requestData);

      if (response.status === 200) {
        console.log("Data submitted successfully:", response.data);
        // Navigate to guide page with response data if needed
        navigate('/guide', { state: { guide: response.data } });
      } else {
        console.error("Submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="container mx-auto p-10 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-2xl">
          <div className="px-10 py-16">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                Your Study Guide
              </h1>
              <p className="text-2xl text-gray-300 mt-6">
                Choose your preferences and get tailored revision content.
              </p>
            </div>

            {loading && (
              <p className="text-2xl text-center text-green-300 animate-pulse">
                Generating your content...
              </p>
            )}
            {!loading && (
              <>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                  {/* Subject Dropdown */}
                  <div className="w-full md:w-1/3">
                    <h2 className="text-2xl font-semibold mb-4 text-green-400">
                      Subjects
                    </h2>
                    <select
                      value={selectedSubject}
                      onChange={handleSubjectChange}
                      className="w-full border-none rounded-lg py-4 px-6 bg-gray-800 text-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <option value="" className="text-gray-400">
                        Select a subject
                      </option>
                      <option value="science">Physics</option>
                      <option value="math">Math</option>
                      <option value="history">History</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="grammar">Grammar</option>
                    </select>
                  </div>

                  {/* Qualification Dropdown */}
                  <div className="w-full md:w-1/3">
                    <h2 className="text-2xl font-semibold mb-4 text-green-400">
                      Qualification
                    </h2>
                    <select
                      value={selectedQualification}
                      onChange={handleQualificationChange}
                      className="w-full border-none rounded-lg py-4 px-6 bg-gray-800 text-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <option value="" className="text-gray-400">
                        Educational background
                      </option>
                      <option value="primary">Primary</option>
                      <option value="middle_school">Middle School</option>
                      <option value="high_school">High School</option>
                      <option value="undergrad">Undergrad</option>
                      <option value="postgrad">Postgrad</option>
                    </select>
                  </div>
                </div>

                {/* Additional Context */}
                <div className="mt-8">
                  <textarea
                    value={additionalContext}
                    onChange={handleAdditionalContextChange}
                    placeholder="Add any extra information here..."
                    className="w-full border-none rounded-lg py-4 px-6 bg-gray-800 text-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="mt-8 text-center">
                  <button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={generateRevision}
                  >
                    <span className="text-xl">Generate Revision</span>
                    <MdKeyboardDoubleArrowRight className="text-3xl" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
