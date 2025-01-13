import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CopilotKit, useMakeCopilotReadable } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { CopilotPopup } from "@copilotkit/react-ui";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

const GuidePage = () => {
  return (
    <>
      <CopilotKit url="http://127.0.0.1:8000/guide">
        <GuidePageExtend />
      </CopilotKit>
    </>
  );
};

const GuidePageExtend = () => {
  const [guides, setGuides] = useState([]);
  const [error, setError] = useState(null);

  useMakeCopilotReadable(
    "This is the list of guide points: " + JSON.stringify(guides)
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/getGuide");

        if (response.data.revision) {
          console.log("Data fetched successfully.");
          console.log("Response from guide page:", response.data);

          let guideData = [];

          // Attempt to parse JSON
          try {
            if (typeof response.data.revision === "string") {
              guideData = JSON.parse(response.data.revision);
            } else if (Array.isArray(response.data.revision)) {
              guideData = response.data.revision;
            }
          } catch (jsonError) {
            console.error("Failed to parse revision data:", jsonError);
            setError("Error parsing guide data. Please try again.");
            return;
          }

          setGuides(guideData);
          setError(null);
        } else {
          console.error("Fetch failed", response.data.message);
          setError(response.data.message || "Failed to fetch guides.");
        }
      } catch (err) {
        console.error("Error fetching guide data:", err);
        setError(err.response?.data?.detail || "Failed to fetch guides.");
        setGuides([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      <div className="bg-black text-white">
        <Navbar />
      </div>

      <div style={{ "--copilot-kit-primary-color": "#7D5BA6" }}>
        <CopilotPopup
          instructions={
            "Help the user understand revision or guide points. Each point corresponds to the content of the index+1 element in the array."
          }
          defaultOpen={false}
          labels={{
            title: "CereBrix Copilot",
            initial: "Hi there! 👋 I can help you with the guides.",
          }}
          clickOutsideToClose={false}
        />

        <div className="container mx-auto py-12 px-6 md:px-24">
          <div className="bg-gradient-to-r from-white to-gray-100 p-6 mb-8 rounded-xl shadow-lg">
            <h1 className="text-5xl font-extrabold text-center mb-4 text-blue-600">
              Quick Revision Material
            </h1>
            <hr className="border-blue-400 mb-4" />
            <p className="text-lg text-gray-600 text-center">
              Prepare for your topics with intelligently crafted revision
              materials. After revising, enhance your preparation with our
              practice MCQs.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
              {error}
            </div>
          )}

          {/* Points */}
          <div className="rounded-lg">
            {guides.length > 0 ? (
              <ol className="space-y-6">
                {guides.map((point, index) => (
                  <li
                    key={index}
                    className="text-lg font-medium bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out border-l-4 border-blue-500"
                  >
                    {index + 1}. {point}
                  </li>
                ))}
              </ol>
            ) : (
              !error && (
                <div className="text-center text-gray-600 py-8">
                  No revision guides available. Please generate a guide first.
                </div>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
            <Link to="/mcq">
              <button className="bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105 hover:shadow-lg">
                <span>Practice MCQs</span>
                <MdKeyboardDoubleArrowRight className="text-2xl" />
              </button>
            </Link>
            <Link to="/home">
              <button className="bg-gradient-to-r from-green-400 to-green-500 text-white font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105 hover:shadow-lg">
                <FaHome className="text-2xl" />
                <span>Back to Home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuidePage;
