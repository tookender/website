"use client";

import toast from "react-hot-toast";
import { useLocalStorageState } from "ahooks";
import React, { useEffect, useState } from "react";

import {
  handleKeyPress as handleKeyPressUtil,
  addVocabulary as addVocabularyUtil,
  deleteVocabulary as deleteVocabularyUtil,
  editVocabulary as editVocabularyUtil,
  saveToLocalStorage as saveToLocalStorageUtil,
  exportVocabularyToJSON,
  importVocabularyFromJSON,
} from "@/lib/vocab";

import { Tabs, Tab } from "@heroui/react";
import { VocabularyList } from "./list";
import { VocabularySelfTest } from "./self-test";
import { VocabularyQuiz } from "./quiz";

const VocabularyTestPage: React.FC = () => {
  const [state, setState] = useState({
    audio: null as HTMLAudioElement | null,
    vocabulary: [] as { question: string; answer: string }[],
    currentIndex: 0,
    userInput: "",
    showFeedback: false,
    feedback: "",
    correctAnswer: "",
    highlightedText: "",
    newQuestion: "",
    newAnswer: "",
  });
  const [savedVocabulary, saveVocabulary] = useLocalStorageState("vocabulary");
  const buttonClassName =
    "bg-default hover:bg-default-300 cursor-pointer text-small active:scale-[0.97] px-4 min-w-20 h-10 flex items-center rounded-medium duration-300";

  useEffect(() => {
    if (savedVocabulary) {
      setState((prev) => ({
        ...prev,
        vocabulary: JSON.parse(savedVocabulary as string),
      }));
    }
  }, [savedVocabulary]);

  useEffect(() => {
    const audioInstance = new Audio("/pop.mp3");
    setState((prev) => ({ ...prev, audio: audioInstance }));
    return () => {
      audioInstance.pause();
    };
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyPressUtil(event, state, setState);
  };

  const addVocabulary = () => {
    addVocabularyUtil(state.newQuestion, state.newAnswer, setState, toast);
  };

  const deleteVocabulary = (index: number) => {
    setState((prev) => ({
      ...prev,
      vocabulary: deleteVocabularyUtil(prev.vocabulary, index),
    }));
  };

  const saveToLocalStorage = () => {
    saveToLocalStorageUtil(state.vocabulary, saveVocabulary);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      importVocabularyFromJSON(file, setState);
    }
  };

  const handleExport = () => {
    exportVocabularyToJSON(state.vocabulary);
  };

  const editVocabulary = (index: number, newQuestion: string, newAnswer: string) => {
    editVocabularyUtil(index, newQuestion, newAnswer, setState, saveVocabulary);
  };

  return (
    <div className="flex flex-col items-center md:mt-2 min-h-screen">
      <Tabs variant="underlined" size="lg">
        <Tab key="list" title="Vocabulary List">
          <VocabularyList
            vocabulary={state.vocabulary}
            deleteVocabulary={deleteVocabulary}
            newQuestion={state.newQuestion}
            newAnswer={state.newAnswer}
            setNewQuestion={(newQuestion) =>
              setState((prev) => ({ ...prev, newQuestion }))
            }
            setNewAnswer={(newAnswer) =>
              setState((prev) => ({ ...prev, newAnswer }))
            }
            addVocabulary={addVocabulary}
            saveVocabulary={saveToLocalStorage}
            editVocabulary={editVocabulary}
          />
          <div className="flex flex-row gap-2 mt-64">
            <label className={buttonClassName}>
              Import from JSON
              <input
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            <button className={buttonClassName} onClick={handleExport}>
              Export as JSON
            </button>
          </div>
        </Tab>

        <Tab key="quiz" title="Quiz" isDisabled={state.vocabulary.length === 0}>
          {state.vocabulary.length > 0 && (
            <VocabularyQuiz
              currentIndex={state.currentIndex}
              vocabulary={state.vocabulary}
              showFeedback={state.showFeedback}
              feedback={state.feedback}
              correctAnswer={state.correctAnswer}
              highlightedText={state.highlightedText}
              handleKeyPress={handleKeyPress}
              userInput={state.userInput}
              setUserInput={(input) =>
                setState((prev: any) => ({ ...prev, userInput: input }))
              }
            />
          )}
        </Tab>

        <Tab key="selftest" title="Self Test" isDisabled={state.vocabulary.length === 0}>
          {state.vocabulary.length > 0 && (
            <VocabularySelfTest
              vocabulary={state.vocabulary}
            />
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default VocabularyTestPage;
