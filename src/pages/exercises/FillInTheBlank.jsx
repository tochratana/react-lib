import React from "react";
import FillInTheBlankQuiz from "@/components/exercises/FillInTheBlankQuiz";

export const FillInTheBlank = () => {
  const exercisesData = [
    {
      id: 1,
      question_text: "What is the capital of France?",
      correct_answer: "Paris",
    },
    { id: 2, question_text: "What is 5 + 5?", correct_answer: "10" },
    {
      id: 3,
      question_text: "Who wrote 'Romeo and Juliet'?",
      correct_answer: "Shakespeare",
    },
    {
      id: 4,
      question_text: "What is the boiling point of water in Celsius?",
      correct_answer: "100",
    },
    {
      id: 5,
      question_text: "What is the largest planet in our solar system?",
      correct_answer: "Jupiter",
    },
  ];

  // Rendering the component

  return (
    <div>
      <FillInTheBlankQuiz exercises={exercisesData} />;
    </div>
  );
};
