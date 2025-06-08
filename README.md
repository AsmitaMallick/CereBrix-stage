

# 🧠 Cerebrix – AI-Powered Personalized Learning Platform

*Cerebrix* is a full-stack intelligent web platform that redefines how students and professionals learn. With dynamic study material generation, interactive AI-powered quizzes, visual flowcharts, and real-time analytics, it offers a truly personalized learning journey powered by advanced AI and natural language processing.

---

## 📌 Project Overview

Cerebrix is a final-year B.Tech CSE-AI capstone project by Team Tetra Techtress from Techno India University. The platform is designed to support academic and professional learners by providing adaptive study plans, real-time feedback, and chatbot-driven support—all accessible through a seamless web interface and a Chrome extension.

---

## ✨ Key Features

* *Subject Selection & Personalization*
  Users can choose subjects and get content curated according to their learning level and goals.

* *AI-Generated Study Notes*
  GPT-4 Turbo generates concise and concept-oriented revision material instantly.

* *Interactive MCQ Practice*
  AI-driven MCQs with hints and rationales to deepen conceptual understanding based on pdf of notes uploaded.

* *Chatbot Support*
  Learners can ask follow-up questions, request hints, or clarify doubts mid-quiz.

* *Real-Time Progress Tracking*
  A smart dashboard monitors quiz performance, engagement time, and topic mastery.

* *Flowchart Fun Integration*
  Visualize concepts as interactive flowcharts powered by AI node generation and real-time mind mapping and making UML and Activity Diagrams.

* *Chrome Extension*
  Summarize any web page into Brief, Detailed, or Bullet-style notes with a single click.

---

## 🛠 Technology Stack

*Frontend:*
React.js, Tailwind CSS, Zustand, ReactFlow, Shadcn UI, CopilotKit

*Backend:*
FastAPI (Python), Express.js (Node.js for LLM proxy), Uvicorn, Python-dotenv

*AI Models:*
OpenAI GPT-4 Turbo, Gemini API

*Database:*
MongoDB, Firebase (for Authentication & Firestore)

*Other Components:*
Chrome APIs, JavaScript-based Extension, Flowchart Fun, Chart.js for Analytics

---

## ⚙ Setup Instructions

### Backend (FastAPI)

1. *Install Prerequisites*:
   Python 3.9+ and pip

2. *Clone Repository*:
   git clone <repo-url>
   cd backend/backend_using_fastapi

3. *Install Dependencies*:
   pip install fastapi uvicorn python-dotenv requests

4. *Start the Server*:
   uvicorn main:app --reload

### Frontend (React)

1. *Navigate to Frontend*:
   cd frontend

2. *Install Packages*:

   
   npm install
   npm install @copilotkit/react-core @copilotkit/react-ui axios
   

3. *Run the Frontend*:
   npm start

---

## 📡 API Documentation

Once the FastAPI server is running, visit:
*[http://localhost:8000/docs](http://localhost:8000/docs)*
To access Swagger-based interactive API documentation.

---

## 🧩 Additional Modules

### Chrome Extension – Cerebrix Summarizer

* Summarizes any webpage into three formats: Brief, Detailed, and Bullet Points.
* Built with HTML, CSS, JS and integrated with Chrome APIs.

### Flowchart Fun + Copilot

* Users can create mind maps with AI-suggested nodes and layout improvements.
* Built using Next.js, ReactFlow, Zustand, and CopilotKit.
* Supports live collaboration, node linking, and exports (PNG, PDF).

---

## 📈 Performance Highlights

* *User Satisfaction*: 85%+ rated the platform as helpful for studies.
* *Learning Outcomes*: Improved mock test scores and quiz accuracy.
* *Educator Feedback*: Simplified progress tracking and content delivery.

---

## 🧪 Use Cases

* *Classroom Supplement* – Reinforces in-class learning with practice and revision.
* *Remote Learning Tool* – Anytime access to materials and quizzes.
* *Exam Preparation* – Targeted questions, performance tracking, and feedback.
* *Professional Development* – Certification prep and industry-specific upskilling.

---

## 🚀 Future Enhancements

* Voice-based AI assistant for hands-free learning
* Group collaboration features for peer-to-peer study
* LMS integrations (e.g., Google Classroom, Moodle)
* Gamification: points, badges, leaderboards
* Multilingual and cross-curricular support

---

## 👥 Contributors – Team Tetra Techtress

* *Triparna Singha*
* *Srija Dutta*
* *Sayantani Karmakar*
* *Asmita Mallick*

---

## 📚 References

* MindmapCopilot (GitHub)
* CopilotKit Integration (Dev.to)
* Educational Chatbots and Progress Tracking Papers
* Real-time analytics and content generation studies

---

## 📎 License

This project is licensed under the MIT License.
Feel free to fork, contribute, and explore!

---
