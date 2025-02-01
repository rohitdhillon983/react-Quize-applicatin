import React, { useState, useEffect } from "react";
import QuizQuestionCard from "../pages/QuizQuestionCard";
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import Results from "./Results";

const QuizQuestion = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]); // Stores user's answers
  const [points, setPoints] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(quizData.duration * 60); // Convert minutes to seconds
  const [quizEnded, setQuizEnded] = useState(false); // Track if the quiz has ended

  useEffect(() => {
    if (timeLeft === 0) {
      // Time's up, end the quiz
      setQuizEnded(true);
      return;
    }

    // Set up the timer
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Handle user's answer selection
  const handleAnswer = (answer) => {
    const updatedAnswers = [...userAnswers];
    const previousAnswer = updatedAnswers[currentQuestionIndex]; // Get the previous answer for the current question

    // Update the latest answer for the current question
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedAnswers);

    const selectedOption = quizData.questions[currentQuestionIndex].options.find(
      (option) => option.id === answer
    );
    const previousOption = quizData.questions[currentQuestionIndex].options.find(
      (option) => option.id === previousAnswer
    );

    // Update points and correct answers based on the new selection
    if (selectedOption.isCorrect) {
      setPoints((prevPoints) => prevPoints + 4); // Add points for correct answer
      setCorrectAnswers((prevCorrect) => prevCorrect + 1); // Increment correct answers
    } else {
      setPoints((prevPoints) => prevPoints - 1); // Deduct points for wrong answer
    }

    // If the user had previously selected a correct answer, revert the points and correct answers
    if (previousOption && previousOption.isCorrect) {
      setPoints((prevPoints) => prevPoints - 4); // Revert points for previously correct answer
      setCorrectAnswers((prevCorrect) => prevCorrect - 1); // Decrement correct answers
    }
  };

  // Move to the next question
  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Move to the previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Format the time left as minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Handle quiz submission
  const handleQuizEnd = () => {
    setQuizEnded(true); // End the quiz
  };

  // If the quiz has ended, show the results
  if (quizEnded || currentQuestionIndex === quizData.questions.length) {
    return (
      <Results
        points={points}
        correctAnswer={correctAnswers}
        userAnswers={userAnswers}
        quizData={quizData}
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-black p-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 shadow-2xl max-w-6xl w-full mb-4">
        <div>
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-xl font-semibold">Question: {currentQuestionIndex + 1} of {quizData.questions.length}</p>

            <div>
              <p className="text-xl font-semibold">Time Left: {formatTime(timeLeft)}</p>
            </div>

            <div className="flex gap-7 justify-center items-center">
              <div className="flex flex-col gap-2 items-center">
                <h3 className="font-bold">Marks</h3>
                <div className="flex gap-4">
                  <p className="bg-green-500 text-white font-semibold rounded-2xl text-xl px-2">+{quizData.correct_answer_marks}</p>
                  <p className="bg-red-500 text-white font-semibold rounded-2xl text-xl px-2">-{quizData.negative_marks}</p>
                </div>
              </div>
              <a href="/" className="px-6 py-3 bg-white text-purple-600 border border-purple-200 font-semibold rounded-lg shadow-lg hover:bg-purple-100 transition-all duration-300 transform hover:scale-105">end quiz</a>
            </div>
          </div>
        </div>
      </div>

      {/* Pass the user's selected answer (if any) to the QuizQuestionCard */}
      <QuizQuestionCard
        question={quizData.questions[currentQuestionIndex].description}
        options={quizData.questions[currentQuestionIndex].options}
        onAnswer={handleAnswer}
        index={currentQuestionIndex + 1}
        selectedAnswer={userAnswers[currentQuestionIndex]} // Pass the selected answer
      />

      <div className="flex justify-between w-full max-w-2xl mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0} // Disable "Previous" button on the first question
          className="flex items-center space-x-2 border-3 border-rose-500 bg-rose-500 hover:bg-transparent trannsition-all duration-300 text-white font-bold p-2 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaRegArrowAltCircleLeft />
          <p>Previous</p>
        </button>
        {currentQuestionIndex === quizData.questions.length - 1 ? (
          <button
            onClick={handleQuizEnd}
            className="flex items-center space-x-2 border-3 border-violet-500 bg-violet-500 hover:bg-transparent trannsition-all duration-300 text-white font-bold p-2 rounded-lg cursor-pointer"
          >
            <p>Submit</p>
            <FaRegArrowAltCircleRight />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center space-x-2 border-3 border-violet-500 bg-violet-500 hover:bg-transparent trannsition-all duration-300 text-white font-bold p-2 rounded-lg cursor-pointer"
          >
            <p>Next</p>
            <FaRegArrowAltCircleRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;