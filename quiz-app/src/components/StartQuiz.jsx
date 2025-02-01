const StartQuiz = ({ onStart ,quizData}) => 
 (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <h1 className="text-5xl font-bold mb-6 ">Welcome to the Quiz!</h1>
    <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 shadow-2xl max-w-2xl w-full text-black">
      <p className="text-4xl font-semibold mb-4">Title: {quizData.title}</p>
      <span className="block h-1 w-12 bg-green-500 mb-4 rounded-md"></span>
      <p className="text-2xl font-semibold mb-4 text-gray-500"> Topic: {quizData.topic}</p>
      <div className="flex justify-between">
        <p className="text-lg font-semibold mb-4 text-gray-500">Total Questions : {quizData.questions.length}</p>
        <p className="text-lg font-semibold mb-4 text-gray-500">Total Time : {quizData.duration}:00</p>
      </div>
      <button
      onClick={onStart}
      className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
      Start Quiz
    </button>
    </div>
    
  </div>
);

export default StartQuiz;