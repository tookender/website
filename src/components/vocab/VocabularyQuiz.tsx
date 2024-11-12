import React from "react";
import { Button, Input } from "@nextui-org/react";

interface QuizProps {
  currentIndex: number;
  vocabulary: { question: string; answer: string }[];
  userInput: string;
  setUserInput: (input: string) => void;
  feedback: string;
  correctAnswer: string;
  highlightedText: string;
  handleRetry: () => void;
}

export const VocabularyQuiz: React.FC<QuizProps> = ({
  currentIndex,
  vocabulary,
  userInput,
  setUserInput,
  feedback,
  correctAnswer,
  highlightedText,
  handleRetry,
}) => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4">Vocabulary Quiz</h1>

      <h2 className="text-2xl mb-4">
        {currentIndex < vocabulary.length ? (
          vocabulary[currentIndex].question
        ) : (
          <div className="text-4xl flex flex-row font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            <span className="text-white">🎉</span> <p>Test Complete!</p>{" "}
            <span className="text-white">🎉</span>
          </div>
        )}
      </h2>

      {currentIndex < vocabulary.length ? (
        <Input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          label="Type your answer"
          size="sm"
        />
      ) : (
        <Button onClick={handleRetry} color="success">
          🔄 Retry
        </Button>
      )}

      {feedback && (
        <div className="mt-4">
          <span className="text-lg">{feedback}</span>
          {correctAnswer && <span className="text-lg"> Correct answer: {correctAnswer}</span>}
          {highlightedText && <div dangerouslySetInnerHTML={{ __html: highlightedText }} />}
        </div>
      )}
    </div>
  );
};