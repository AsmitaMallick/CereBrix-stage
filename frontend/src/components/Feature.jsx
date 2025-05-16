import React, { useState } from 'react';
import { FaBookOpen, FaLightbulb, FaBrain, FaProjectDiagram } from 'react-icons/fa';

const FeaturesSection = () => {
  const [selected, setSelected] = useState(1);

  const featureData = [
    {
      id: 1,
      title: 'Tailored Study Materials 📚',
      description:
        'Crafted just for you. Smartly generated resources tailored to your style, goals, and syllabus.',
      icon: <FaBookOpen size={40} className="text-blue-400" />,
      content: <Feature1 />,
    },
    {
      id: 2,
      title: 'Interactive MCQ Practice 📝',
      description:
        'Practice smarter with hints, feedback, and explanations — all in real-time. Boost retention effortlessly.',
      icon: <FaLightbulb size={40} className="text-yellow-400" />,
      content: <Feature2 />,
    },
    {
      id: 3,
      title: 'Detailed Insights & Explanations 💡',
      description:
        'Don’t just memorize — deeply understand. Know the "why" behind every concept and answer.',
      icon: <FaBrain size={40} className="text-purple-400" />,
      content: <Feature3 />,
    },
    {
      id: 4,
      title: 'GuideMap Generator 🗺️',
      description:
        'Turn concepts into clear visual flows. Flowcharts for easier thinking and better retention.',
      icon: <FaProjectDiagram size={40} className="text-green-400" />,
      content: <Feature4 />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white py-20 px-6 md:px-20">
      <h1 className="text-center text-5xl font-bold tracking-wider mb-16">
        STUDY WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">CEREBRIX</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-14">
        {/* Feature List */}
        <div className="flex flex-col gap-8">
          {featureData.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setSelected(feature.id)}
              className={`flex items-start gap-6 p-6 border rounded-2xl transition-all duration-300 cursor-pointer hover:scale-105 ${
                selected === feature.id
                  ? 'bg-blue-900/80 border-blue-400 shadow-xl shadow-blue-500/40'
                  : 'border-gray-700 hover:bg-gray-800'
              }`}
            >
              <div className="mt-1">{feature.icon}</div>
              <div>
                <h2 className="text-2xl font-semibold">{feature.title}</h2>
                <p className="text-gray-400 text-lg mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Content */}
        <div className="p-8 bg-black/60 rounded-2xl shadow-lg shadow-black/40 border border-gray-700">
          {featureData.find((feature) => feature.id === selected)?.content}
        </div>
      </div>
    </div>
  );
};

const Feature1 = () => (
  <div className="space-y-5">
    <h3 className="text-5xl font-bold space-y-9 text-blue-400">Tailored Study Materials</h3>
    <ul className="list-disc pl-6 space-y-7 text-2xl text-gray-300">
      <li>🎯 Choose subjects, levels, and preferred learning styles.</li>
      <li>✨ Generate smart summaries, key points, and cheat sheets instantly.</li>
      <li>📘 Get notes, practice sets, and references all in one click.</li>
      <li>📈 Track what you’ve learned and what’s pending for each topic.</li>
      <li>🚀 Built to help you master concepts without the clutter.</li>
    </ul>
  </div>
);

const Feature2 = () => (
  <div className="space-y-5">
    <h3 className="text-5xl font-bold space-y-9 text-yellow-400">Interactive MCQ Practice</h3>
    <ul className="list-disc pl-6 space-y-7 text-2xl text-gray-300">
      <li>📊 Practice with questions based on your selected topics.</li>
      <li>💡 Access hints and explanations for every question.</li>
      <li>🔁 Retry incorrect answers with adjusted difficulty.</li>
      <li>⚡ Instant feedback to learn as you go — not after.</li>
      <li>🎯 Boost your confidence with performance analytics.</li>
    </ul>
  </div>
);

const Feature3 = () => (
  <div className="space-y-5">
    <h3 className="text-5xl font-bold space-y-9 text-purple-400">Detailed Insights & Explanations</h3>
    <ul className="list-disc pl-6 space-y-7 text-2xl text-gray-300">
      <li>🧠 Learn why an answer is right — or wrong — in depth.</li>
      <li>🔍 Step-by-step solutions explained with clarity.</li>
      <li>📚 Strengthen weak areas through guided explanations.</li>
      <li>🎓 Developed by AI but aligned with academic rigor.</li>
      <li>🌟 Improve long-term retention by learning the logic.</li>
    </ul>
  </div>
);

const Feature4 = () => (
  <div className="space-y-5">
    <h3 className="text-5xl font-bold space-y-9 text-green-400">GuideMap Generator</h3>
    <ul className="list-disc pl-6 space-y-7 text-2xl text-gray-300 leading-relaxed">
      <li>🗺️ Convert any topic into a visual, node-based flowchart.</li>
      <li>💡 Great for understanding chains, hierarchies, or timelines.</li>
      <li>🧩 Break down difficult concepts into digestible pieces.</li>
      <li>🎥 Export and share your maps for collaborative learning.</li>
      <li>🚀 Ideal for visual learners and revision sessions alike.</li>
    </ul>
  </div>
);

export default FeaturesSection;
