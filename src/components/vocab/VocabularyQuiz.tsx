import React from "react";
import { Input } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";

interface QuizProps {
  currentIndex: number;
  vocabulary: { question: string; answer: string }[];
  showFeedback: boolean;
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
  showFeedback,
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

      {currentIndex < vocabulary.length ? (
        <>
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

          <AnimatePresence>
            {showFeedback && (
              <motion.h1
                key="feedback"
                exit={{ opacity: 0, y: 20 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={`text-3xl font-bold mt-6 ${feedback.includes("❌")  ? "text-red-400" : "text-green-400 mb-6"}`}>
                {feedback}
              </motion.h1>
            )}

            {feedback.includes("❌") && (     
              <motion.div
                key="solution"
                exit={{ opacity: 0, y: 20 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="flex flex-row gap-1 text-xl mb-6">
                <p className="font-bold">Solution:</p>
                <p className="text-xl text-red-200" dangerouslySetInnerHTML={{ __html: highlightedText }}/>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <h1 className="font-bold text-2xl bg-gradient-to-r from-cyan-500 via-purple-400 to-red-500 text-transparent bg-clip-text">
            <b>🎉</b> You have completed your quiz!
          </h1>

          <p className="font-semibold text-lg text-neutral-300/80">
            Refresh the page to do the quiz again.
          </p>
        </>
      )}
    </div>
  );
};