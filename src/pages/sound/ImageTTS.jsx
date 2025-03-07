import { useState } from "react";

const items = [
  {
    word: "Dog",
    image: "https://images.pexels.com/photos/4608106/pexels-photo-4608106.jpeg",
  },
  {
    word: "Cat",
    image: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg",
  },
  {
    word: "Bird",
    image:
      "https://images.pexels.com/photos/45853/bird-blue-cristata-cyanocitta-45853.jpeg",
  },
];

export default function ImageTTS() {
  const speak = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-gray-900 p-4 rounded-lg shadow-lg text-white"
        >
          <img
            src={item.image}
            alt={item.word}
            className="w-full h-48 object-cover rounded-lg"
          />
          <button
            onClick={() => speak(item.word)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 flex items-center"
          >
            🔊 Play Sound
          </button>
          <p className="text-lg font-semibold mt-2">{item.word}</p>
        </div>
      ))}
    </div>
  );
}
