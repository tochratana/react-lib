import { useState, useEffect } from "react";

export default function InputFill() {
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://english-club.istad.co/exercises/8cfd4ab7-e092-4e12-b29f-5fae8f358fdb"
    )
      .then((res) => res.json())
      .then((data) => {
        const fetchedQuestion = data.payload.questions[0];
        setQuestion(fetchedQuestion);
        setLoading(false);
        console.log(fetchedQuestion.question_text);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const checkAnswer = () => {
    if (!question) return;

    const correctAnswer = question.correct_answer[0]?.answer
      .toLowerCase()
      .trim();
    if (userAnswer.toLowerCase().trim() === correctAnswer) {
      alert("✅ Correct!");
    } else {
      alert(`❌ Incorrect. The correct answer is: ${correctAnswer}`);
    }
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!question || !question.question_text)
    return <p>Error loading question.</p>;

  // Replacing the correct answer with an input field dynamically
  const sentenceWithBlank = question.question_text.replace(
    question.correct_answer[0]?.answer,
    "_____"
  );

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fill in the Blank</h2>
      <p className="text-lg mb-3">
        {sentenceWithBlank.split("_____").map((part, index, array) => (
          <span key={index}>
            {part}
            {index < array.length - 1 && (
              <input
                type="text"
                className="border-b-2 border-gray-500 outline-none px-2 text-center w-20 mx-1"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
            )}
          </span>
        ))}
      </p>
      <button
        onClick={checkAnswer}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Check Answer
      </button>
    </div>
  );
}
