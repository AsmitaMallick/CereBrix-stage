"use client";
import React, { useEffect, useState } from 'react'
import {
    CopilotKit,
    useCopilotAction,
    useMakeCopilotReadable,
} from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { CopilotPopup } from "@copilotkit/react-ui";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Question from './Question';

const PracticeMCQ = () => {
    return (
        <>
            <CopilotKit url="http://127.0.0.1:8000/guide">
                <McqQns />
            </CopilotKit>
        </>
    )
}

const McqQns = () => {
    const [questions, setQuestions] = useState([
        {
            "question": "What is the value of 2 + x = 4?",
            "options": ["1", "2", "3", "4"],
            "hint": "Subtract 2 from 4.",
            "answer": "2"
        },
    ]);

    const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(''));
    const [score, setScore] = useState(0);
    const [hintsShown, setHintsShown] = useState(new Array(questions.length).fill(false));
    const [hintUsed, setHintUsed] = useState(new Array(questions.length).fill(false));
    const [submitted, setSubmitted] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);
    const [instructions, setInstructions] = useState(
        "Help the user solve the questions. If the user asks for direct answers, don't provide answers to them. " +
        "You can explain questions if the user does not understand and show them hints if asked for solutions."
    );

    const handleOptionChange = (questionIndex, option) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = option;
        setSelectedOptions(newSelectedOptions);
    };

    useMakeCopilotReadable(
        "This is the questions with their options, hint and answers: " + JSON.stringify(questions)
    );

    useCopilotAction({
        name: "newQuestions",
        description: `Provide questions based on conditions given. If the number of questions is not specified, provide 10 of them. Do not tell questions and options in chat.`,
        parameters: [{
            name: "items",
            type: "object[]",
            description: 'The new questions.',
            attributes: [
                { name: "question", type: "string", description: 'The MCQ question.' },
                { name: "option1", type: "string", description: "Option 1." },
                { name: "option2", type: "string", description: "Option 2." },
                { name: "option3", type: "string", description: "Option 3." },
                { name: "option4", type: "string", description: "Option 4." },
                { name: "hint", type: "string", description: "Hint for the question." },
                { name: "answer", type: "string", description: "Correct answer." }
            ],
        }],
        handler: async ({ items }) => {
            const newQuestions = items.map(item => ({
                question: item.question,
                options: [item.option1, item.option2, item.option3, item.option4],
                hint: item.hint,
                answer: item.answer
            }));
            setQuestions(newQuestions);
            setShowQuestion(true);
            setHintsShown(new Array(newQuestions.length).fill(false));
            setHintUsed(new Array(newQuestions.length).fill(false));
        },
        render: "Updating questions...",
    });

    useMakeCopilotReadable(
        "This is the current state of hintsShown: " + JSON.stringify(hintsShown)
    );

    useCopilotAction({
        name: "updateHintsShown",
        description: "Show or hide hints by updating hintsShown useState when asked for hints by the user.",
        parameters: [
            { name: "showHint", type: "boolean", description: 'Show or hide hints.' },
            { name: "indexNo", type: "number", description: "Index number of the hint to update (question_number-1)." }
        ],
        handler: async ({ showHint, indexNo }) => {
            const newHintsShown = [...hintsShown];
            newHintsShown[indexNo] = showHint;
            setHintsShown(newHintsShown);
            if (!hintUsed[indexNo]) {
                hintUsed[indexNo] = showHint;
            }
        },
        render: "Updating hints...",
    });

    useCopilotAction({
        name: "newHint",
        description: "Provide a different hint for a question.",
        parameters: [
            { name: "newHint", type: "string", description: 'The new hint to update.' },
            { name: "questionNo", type: "number", description: "Question number for the new hint (0-based index)." }
        ],
        handler: async ({ newHint, questionNo }) => {
            const updatedQuestions = questions.map((question, index) => {
                if (index === questionNo) {
                    return { ...question, hint: newHint };
                }
                return question;
            });
            setQuestions(updatedQuestions);
        },
        render: "Updating hints...",
    });

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
            <Footer />
            <CopilotPopup
                instructions={instructions}
                defaultOpen={false}
                labels={{
                    title: "CereBrix Copilot",
                    initial: "Hi! 👋 You can ask me to deliver personalized MCQs and hints.",
                }}
                clickOutsideToClose={false}
            />
        </>
    )
}

export default PracticeMCQ;
