"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PracticeMCQ = () => {
    return (
        <>
            <McqQns />
        </>
    );
};

const McqQns = () => {
    const [questions, setQuestions] = useState([
    {
        question: "What is the value of 2 + x = 4?",
        options: ["1", "2", "3", "4"],
        hint: "Subtract 2 from 4.",
        answer: "2"
    },
    {
        question: "What is the value of 3x = 12?",
        options: ["2", "3", "4", "5"],
        hint: "Divide both sides by 3.",
        answer: "4"
    },
    {
        question: "Solve: 5 + y = 9",
        options: ["3", "4", "5", "6"],
        hint: "Subtract 5 from 9.",
        answer: "4"
    },
    {
        question: "If 7 - z = 2, what is z?",
        options: ["3", "4", "5", "6"],
        hint: "Subtract 2 from 7.",
        answer: "5"
    },
    {
        question: "What is the value of x if 2x + 3 = 11?",
        options: ["2", "3", "4", "5"],
        hint: "Subtract 3 from 11 and divide by 2.",
        answer: "4"
    },
    
]);


    const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(''));
    const [score, setScore] = useState(0);
    const [hintsShown, setHintsShown] = useState(new Array(questions.length).fill(false));
    const [hintUsed, setHintUsed] = useState(new Array(questions.length).fill(false));
    const [submitted, setSubmitted] = useState(false);
    const [showQuestion, setShowQuestion] = useState(true); // Default to true so questions show initially
    const [instructions, setInstructions] = useState(
        "Help the user solve the questions. If the user asks for direct answers, don't provide answers to them. " +
        "You can explain questions if the user does not understand and show them hints if asked for solutions."
    );

    const handleOptionChange = (questionIndex, option) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = option;
        setSelectedOptions(newSelectedOptions);
    };

    const checkAnswer = () => {
        let newScore = 0;
        questions.forEach((question, index) => {
            if (selectedOptions[index] === question.answer) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setSubmitted(true);
        window.scrollTo(0, 0);
        setInstructions(
            "Help the user solve the questions. If the user asks for direct solutions or answers, you can provide them. " +
            "Explain why answers are correct or incorrect."
        );
    };

    useEffect(() => {}, [hintsShown, questions]);

    return (
        <>
            <div className="bg-black text-white">
                <Navbar />
            </div>

            <div className='bg-blue-50 min-h-[70vh] p-14 flex justify-center flex-col items-center'>
                <div className='md:w-[75%] bg-white p-10 border-t-8 border-t-blue-900 rounded-t-lg'>
                    <h1 className="text-5xl font-bold mb-2">Question and Answer</h1>
                    <hr />
                    {submitted ? (
                        <p className='text-3xl font-bold mt-8 text-center text-gray-800'>
                            YOUR SCORE IS: <span className='text-4xl text-blue-900'>{score}/{questions.length}</span>
                        </p>
                    ) : (
                        <p className="text-xl text-gray-800 my-4">
                            You can ask our copilot for questions by providing subject, qualification, and additional context.
                            Evaluate yourself and ask for hints or explanations as needed.
                        </p>
                    )}
                </div>

                {showQuestion ? questions.map((question, index) => (
                    <Question
                        key={index}
                        qno={index + 1}
                        question={question}
                        selectedOption={selectedOptions[index]}
                        showHint={hintsShown}
                        hintUsed={hintUsed}
                        onOptionChange={handleOptionChange}
                        isSubmitted={submitted}
                        isCorrect={selectedOptions[index] === question.answer}
                    />
                )) : (
                    <p className='text-xl text-slate-600 my-24'>Your question and options appear here.</p>
                )}

                {showQuestion && (
                    <div>
                        <button
                            className='px-5 py-2 my-4 bg-blue-900 text-white text-lg'
                            onClick={checkAnswer}
                            disabled={submitted}
                        >
                            Submit
                        </button>
                    </div>
                )}
            </div>

            {/* 👇 Embedded Chatbot IFrame 👇 */}
            <div className="w-full min-h-[700px] bg-white border-t border-gray-300 p-4">
                <h2 className="text-center text-2xl font-semibold mb-2">Ask CereBrix Copilot</h2>
                <iframe
                    src="https://www.chatbase.co/chatbot-iframe/oCNAtJq9i9tYmUIQat3m6"
                    width="100%"
                    style={{ height: "100%", minHeight: "700px" }}
                    frameBorder="0"
                ></iframe>
            </div>

            <Footer />
        </>
    );
};

export default PracticeMCQ;
