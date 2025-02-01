import React from 'react';

const QuizQuestionCard = ({ question, options, onAnswer, index, selectedAnswer }) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 shadow-2xl max-w-6xl min-h-[350px] w-full flex-col gap-auto text-black">
      <span className="flex justify-start">
        <p className="text-2xl font-bold mb-6">Q-{index}.</p>
        <h2 className="ml-2 text-2xl font-bold mb-6 text-left">{question}</h2>
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option.id)}
            className={`px-6 py-4 bg-white bg-opacity-30 hover:bg-opacity-50 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-start gap-1 ${
              selectedAnswer === option.id ? "bg-opacity-50 ring-2 ring-blue-500" : ""
            }`}
          >
            <input
              type="radio"
              name="option"
              className="w-5 h-5"
              checked={selectedAnswer === option.id} // Check the radio button if this option is selected
              readOnly // Make the input read-only since the button handles the click
            />
            <p className="text-lg text-left">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestionCard;