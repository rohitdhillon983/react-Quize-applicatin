import React from "react";

const Results = ({ userAnswers, quizData}) => {
  const questions = quizData?.questions || [];
  const answers = userAnswers || [];

  // Calculate the score
  const score = answers.filter((answer, index) => {
    const correctOption = questions[index].options.find((option) => option.is_correct);
    return correctOption && answer === correctOption.id;
  }).length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-pink-600 text-black p-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 shadow-2xl max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center animate-pulse">Quiz Completed!</h1>
        <p className="text-2xl font-semibold mb-4">Your Score: {score} / {questions.length}</p>
        <p className="text-2xl font-semibold mb-6">Total Points: {score * 4}</p>
        <div className="space-y-4">
          {questions.map((q, index) => {
            const userAnswerId = answers[index]; // User's selected answer ID
            const userAnswer = q.options.find((option) => option.id === userAnswerId)?.description || "No answer"; // User's answer text
            const correctOption = q.options.find((option) => option.is_correct); // Correct option
            const correctAnswerText = correctOption?.description || "No correct answer"; // Correct answer text
            const isCorrect = correctOption && userAnswerId === correctOption.id; // Check if user's answer is correct

            return (
              <div
                key={index}
                className={`bg-white bg-opacity-30 rounded-lg p-4 ${
                  isCorrect ? "border-2 border-green-500" : "border-2 border-red-500"
                }`}
              >
                <p className="text-lg font-semibold">Question {index + 1}: {q.description}</p>
                <p className="text-lg">Your Answer: {userAnswer}</p>
                <p className="text-lg">Correct Answer: {correctAnswerText}</p>
              </div>
            );
          })}
        </div>
        <a
          href="/"
          className="mt-7 px-6 py-3 bg-white text-purple-600 border border-purple-200 font-semibold rounded-lg shadow-lg hover:bg-purple-100 transition-all duration-300 transform hover:scale-105"
        >
          Restart Quiz
        </a>
      </div>
    </div>
  );
};

export default Results;