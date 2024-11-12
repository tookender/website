"use client";

import toast from "react-hot-toast";
import React, { useEffect, useState, SetStateAction } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { normalizeInput, highlightIncorrect } from "@/lib/vocab";
import { VocabularyList } from "@/components/vocab/VocabularyList";
import { VocabularyQuiz } from "@/components/vocab/VocabularyQuiz";
import { useLocalStorage } from "@uidotdev/usehooks";

const VocabularyTestPage: React.FC = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [vocabulary, setVocabulary] = useState<
    { question: string; answer: string }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [highlightedText, setHighlightedText] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [savedVocabulary, saveVocabulary] = useLocalStorage("vocabulary", null);

  useEffect(() => {
    if (savedVocabulary) {
      console.log("exists")
      setVocabulary(JSON.parse(savedVocabulary));
    } else {
      console.log("doesn't exist")
    }
  }, [savedVocabulary, saveVocabulary]);

  useEffect(() => {
    const audioInstance = new Audio("/pop.mp3");
    setAudio(audioInstance);
    return () => {
      audioInstance.pause();
    };
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && audio) {
      audio.play();
      const answer = vocabulary[currentIndex]?.answer;

      const normalizedUserInput = normalizeInput(userInput);
      const normalizedAnswer = normalizeInput(answer || "");

      if (normalizedUserInput === normalizedAnswer) {
        setFeedback("✅ Correct!");
        setCorrectAnswer("");
        setHighlightedText("");
        setTimeout(() => {
          setFeedback("");
          setCurrentIndex(currentIndex + 1);
          setUserInput("");
        }, 1000);
      } else {
        setFeedback("❌ Incorrect!");
        setCorrectAnswer(answer || "");
        setHighlightedText(highlightIncorrect(userInput, answer || ""));
      }
    }
  };

  const handleRetry = () => {
    window.location.reload();
  };

  const addVocabulary = () => {
    if (newQuestion && newAnswer) {
      setVocabulary([
        ...vocabulary,
        { question: newQuestion, answer: newAnswer },
      ]);
      setNewQuestion("");
      setNewAnswer("");
    } else {
      toast("Invalid question and/or solution", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const deleteVocabulary = (index: number) => {
    const updatedVocabulary = vocabulary.filter((_, i) => i !== index);
    setVocabulary(updatedVocabulary);
  };

  const saveToStorage = () => {
    saveVocabulary(JSON.stringify(vocabulary) as unknown as SetStateAction<null>);
  };

  return (
    <div className="flex flex-col items-center mt-12 min-h-screen">
      <Tabs variant="underlined" size="lg">
        <Tab key="list" title="Vocabulary List">
          <VocabularyList
            vocabulary={vocabulary}
            deleteVocabulary={deleteVocabulary}
            newQuestion={newQuestion}
            newAnswer={newAnswer}
            setNewQuestion={setNewQuestion}
            setNewAnswer={setNewAnswer}
            addVocabulary={addVocabulary}
            saveVocabulary={saveToStorage}
          />
        </Tab>
        <Tab key="quiz" title="Quiz" isDisabled={vocabulary.length === 0}>
          {vocabulary.length > 0 && (
            <VocabularyQuiz
              currentIndex={currentIndex}
              vocabulary={vocabulary}
              userInput={userInput}
              setUserInput={setUserInput}
              handleKeyPress={handleKeyPress}
              feedback={feedback}
              correctAnswer={correctAnswer}
              highlightedText={highlightedText}
              handleRetry={handleRetry}
            />
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default VocabularyTestPage;
