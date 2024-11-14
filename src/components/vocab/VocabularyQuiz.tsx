import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";

interface QuizProps {
  currentIndex: number;
  vocabulary: { question: string; answer: string }[];
  feedback: string;
  correctAnswer: string;
  highlightedText: string;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>, userInput: string) => void;
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

export const VocabularyQuiz: React.FC<QuizProps> = ({
  currentIndex,
  vocabulary,
  feedback,
  correctAnswer,
  highlightedText,
  handleKeyPress,
  userInput,
  setUserInput,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="md:max-w-[600px] md:w-screen">
      <h1 className="text-4xl font-bold mb-6">Vocabulary Quiz</h1>

      {feedback && (
        <h1 className={`text-3xl font-bold ${feedback.includes("❌")  ? "text-red-400" : "text-green-400 mb-6"}`}>
          {feedback}
        </h1>
      )}

      {feedback.includes("❌") && (     
        <div className="flex flex-row gap-1 text-xl mb-6">
          <p className="font-bold">Solution:</p>
          <p className="text-xl text-red-200" dangerouslySetInnerHTML={{ __html: highlightedText }}/>
        </div>
      )}

      <div className="flex flex-row gap-1 text-xl mb-2">
        <p className="font-bold">Question:</p>
        <p className="select-none">{vocabulary[currentIndex]?.question}</p>
      </div>

      <Input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        onKeyPress={(event) => handleKeyPress(event, userInput)}
        label="Type your answer"
      />
    </div>
  );
};