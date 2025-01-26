import React, { useState } from "react";

interface VocabularyItem {
  question: string;
  answer: string;
}

interface QuizProps {
  vocabulary: VocabularyItem[];
}

export const VocabularySelfTest: React.FC<QuizProps> = ({ vocabulary }) => {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const [scores, setScores] = useState<Record<number, "correct" | "incorrect" | undefined>>({});

  const toggleVisibility = (index: number) => {
    const newVisibleIndices = [...visibleIndices];
    if (newVisibleIndices.includes(index)) {
      newVisibleIndices.splice(newVisibleIndices.indexOf(index), 1);
    } else {
      newVisibleIndices.push(index);
    }
    setVisibleIndices(newVisibleIndices);
  };

  const handleScore = (index: number, type: "correct" | "incorrect") => {
    setScores(prev => ({
      ...prev,
      [index]: prev[index] === type ? undefined : type
    }));
  };

  const totalCorrect = Object.values(scores).filter(score => score === "correct").length;
  const totalIncorrect = Object.values(scores).filter(score => score === "incorrect").length;

  return (
    <div className="md:max-w-[600px] md:w-screen">
      <div className="flex flex-row justify-between dark-paper">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold mb-2 text-neutral-300">
            Questions
          </h1>

          <div className="text-neutral-200">
            {vocabulary.map((item, index) => (
              <div className="flex flex-row gap-4 justify-between" key={index}>
                <button
                  className={`inline-block mb-0.5 ${visibleIndices.includes(index) ? "bg-green-300/20 text-neutral-200 rounded-md" : "bg-green-300 text-transparent rounded-md"}`}
                  onClick={() => toggleVisibility(index)}>{item.question}</button>
                <br/>

                <div className="mb-1">
                  <button 
                    className={`p-1 rounded-tl-md rounded-bl-md border-r ${scores[index] === "correct" ? "bg-green-500" : "bg-neutral-600/70"}`}
                    onClick={() => handleScore(index, "correct")}>
                    ✅
                  </button>

                  <button 
                    className={`p-1 rounded-tr-md rounded-br-md ${scores[index] === "incorrect" ? "bg-red-500" : "bg-neutral-600/70"}`}
                    onClick={() => handleScore(index, "incorrect")}>
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-neutral-300">
            <p>Correct: {totalCorrect}</p>
            <p>Incorrect: {totalIncorrect}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-lg font-bold mb-2 text-neutral-300">
            Solutions
          </h1>

          <div className="text-neutral-200">
            {vocabulary.map((item) => (
              <>
                <p className="inline-block mb-[12.5px]">{item.answer}</p>
                <br/>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};