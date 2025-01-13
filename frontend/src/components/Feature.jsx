import React, { useState } from 'react';
import { FaBookOpen, FaLightbulb, FaBrain, FaProjectDiagram } from 'react-icons/fa';

const FeaturesSection = () => {
  const [selected, setSelected] = useState(1);

  const featureData = [
    {
      id: 1,
      title: 'Tailored Study Materials 📚',
      description:
        'Create personalized resources that adapt to your learning style and needs. Save time and focus on what truly matters.',
      icon: <FaBookOpen size={40} className="text-blue-400" />,
      content: <Feature1 />,
    },
    {
      id: 2,
      title: 'Interactive MCQ Practice 📝',
      description:
        'Test your knowledge with dynamic MCQs and get instant feedback. Explore hints and solutions tailored to your learning pace.',
      icon: <FaLightbulb size={40} className="text-yellow-400" />,
      content: <Feature2 />,
    },
    {
      id: 3,
      title: 'Detailed Insights & Explanations 💡',
      description:
        'Unlock deeper understanding with step-by-step insights. Learn the "why" behind every answer to strengthen your skills.',
      icon: <FaBrain size={40} className="text-purple-400" />,
      content: <Feature3 />,
    },
    {
      id: 4,
      title: 'GuideMap Generator 🗺️',
      description:
        'Visualize concepts with flowcharts that make complex topics easier to understand and follow.',
      icon: <FaProjectDiagram size={40} className="text-green-400" />,
      content: <Feature4 />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white py-20 px-8 md:px-20">
      <h1 className="text-center text-5xl font-bold tracking-wider mb-16">
        STUDY WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">COPILOT</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Feature Selection Section */}
        <div className="flex flex-col gap-8">
          {featureData.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setSelected(feature.id)}
              className={`flex items-center gap-6 p-6 border rounded-lg transition-all duration-300 cursor-pointer ${
                selected === feature.id
                  ? 'bg-blue-900 border-blue-400 shadow-lg shadow-blue-400/50 transform scale-105'
                  : 'border-gray-700 hover:bg-gray-800 hover:scale-105'
              }`}
            >
              {feature.icon}
              <div>
                <h2 className="text-2xl font-semibold">{feature.title}</h2>
                <p className="text-gray-400 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Content Section */}
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg shadow-gray-800/50">
          {featureData.find((feature) => feature.id === selected)?.content}
        </div>
      </div>
    </div>
  );
};

const Feature1 = () => (
  <div className="space-y-5">
    <h3 className="text-3xl flex items-center font-bold text-blue-400">Tailored Study Materials</h3>
    <ul className="space-y-5 text-xl leading-relaxed text-gray-300">
      <li>
        🎯 Choose your subjects and qualifications to generate personalized study materials.
      </li>
      <li>
        ✨ From concise summaries to targeted practice questions, everything is crafted for your success.
      </li>
      <li>🚀 Study smarter, not harder, with curated resources at your fingertips.</li>
    </ul>
  </div>
);

const Feature2 = () => (
  <div className="space-y-4">
    <h3 className="text-3xl font-bold text-yellow-400">Interactive MCQ Practice</h3>
    <ul className="space-y-5 text-xl leading-relaxed text-gray-300">
      <li>📊 Test your skills with engaging multiple-choice questions.</li>
      <li>
        💡 Stuck? Get personalized hints and explanations powered by AI to enhance understanding.
      </li>
      <li>
        🎉 Make learning fun with real-time feedback and insights for continuous improvement.
      </li>
    </ul>
  </div>
);

const Feature3 = () => (
  <div className="space-y-4">
    <h3 className="text-3xl font-bold text-purple-400">Detailed Insights & Explanations</h3>
    <ul className="space-y-5 text-xl leading-relaxed text-gray-300">
      <li>
        🧠 Gain in-depth knowledge by understanding the reasoning behind every answer.
      </li>
      <li>
        🔍 Strengthen your concepts with detailed, step-by-step explanations for tricky topics.
      </li>
      <li>
        📖 Build a solid foundation that ensures long-term academic success and confidence.
      </li>
    </ul>
  </div>
);

const Feature4 = () => (
  <div className="space-y-4">
    <h3 className="text-3xl font-bold text-green-400">GuideMap Generator</h3>
    <ul className="space-y-5 text-xl leading-relaxed text-gray-300">
      <li>🗺️ Input your desired topic and receive a beautifully crafted flowchart.</li>
      <li>
        💡 Simplify complex concepts and understand their connections visually.
      </li>
      <li>
        🌟 Perfect for students and educators who love structured, step-by-step breakdowns.
      </li>
      <li>🚀 Make learning more intuitive and fun with powerful visual aids.</li>
    </ul>
  </div>
);

export default FeaturesSection;
