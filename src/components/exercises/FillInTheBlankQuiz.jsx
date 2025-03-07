import React, { useState } from "react";

const FillInTheBlankQuiz = ({ exercises }) => {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleInputChange = (exerciseId, value) => {
    if (!isSubmitted) {
      setAnswers((prev) => ({
        ...prev,
        [exerciseId]: value.trim(), // Trim spaces to avoid accidental empty input
      }));
    }
  };

  // Check if all blanks are filled
  const isAllFilled = exercises.every(
    (exercise) => answers[exercise.id]?.length > 0
  );

  // Handle submission
  const handleSubmit = () => {
    if (isAllFilled) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      {exercises.map((exercise, index) => {
        const userAnswer = answers[exercise.id] || "";
        const isCorrect =
          isSubmitted &&
          userAnswer.toLowerCase() === exercise.correct_answer.toLowerCase();

        return (
          <div key={exercise.id} className="mb-6">
            <h2 className="font-bold text-lg mb-2">
              {index + 1}. {exercise.question_text}
            </h2>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => handleInputChange(exercise.id, e.target.value)}
              disabled={isSubmitted}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
            />
            {isSubmitted && (
              <p
                className={`mt-2 ${
                  isCorrect ? "text-green-600" : "text-red-600"
                }`}
              >
                {isCorrect
                  ? "Correct!"
                  : `Incorrect. Correct answer: ${exercise.correct_answer}`}
              </p>
            )}
          </div>
        );
      })}

      <button
        onClick={handleSubmit}
        disabled={!isAllFilled || isSubmitted}
        className={`px-4 py-2 rounded-lg text-white ${
          isAllFilled && !isSubmitted
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </div>
  );
};

export default FillInTheBlankQuiz;
