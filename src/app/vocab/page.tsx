"use client";

import React, { useEffect, useState } from "react";

const vocabulary: { [key: string]: string } = {
  "Wie heißt du?": "Tu t'appelles comment?",
  "Ich heiße Leo. Und du?": "Je m'appelle Leo. Et toi?",
  "Wie alt bist du?": "Tu as quel âge?",
  "Ich bin 14 Jahre Alt. Und du?": "J'ai 14 ans. Et toi?",
  "Ich bin in der achten Klasse.": "Je suis en quatrième.",
  "Hast du Geschwister?": "Tu as des frères et soeurs?",
  "Ich habe einen Bruder. / Ich habe keine Geschwister":
    "J'ai un frère. / Je n'ai pas de frères et soeurs.",
  "Hast du ein Haustier?": "Tu as un animal?",
  "Ich habe einen Hund. / Ich habe kein Haustier.":
    "J'ai un chien. / Je n'ai pas d'animal.",
  "Meine Eltern sind zusammen/getrennt.": "Mon parents sont ensembles/séparés.",
  "Ich habe eine Allergie.": "J'ai un allergie.",
  "Ich esse kein Fleisch, weil ich Vegetarier/in bin":
    "Je ne mange pas de viande, parce que je suis végétarien/ne.",
  "Fußball ist nicht mein Ding.": "Le foot ce n'est pas mon truc.",
  "Ich mag / liebe Videospiele.": "J'aime / J'adore les jeux vidéo.",
  "Ich mag / liebe es, Minecraft zu spielen":
    "J'aime / J'adore joéur á Minecraft.",
  "Ich hasse / mag Shoppen nicht (so sehr)":
    "Je n'aime pas / Je déteste la shopping.",
  "Ich hasse es / mag es nicht (so sehr) zu arbeiten.":
    "Je n'aime pas / Je déteste travailler.",
  "Ich bin ein Fan von Kylian Mbappé.": "Je suis fan de Kylian Mbappé.",
  "Pomme ist mein Lieblingssängerin.": "Pomme est ma chanteuse préférée.",
  "Ich bevorzuge es, (Museen zu besichtigen).":
    "Moi, je préfère (visiter des musées).",
  "Für mich, ist Sport der Horror!": "Pour moi, le sport c'est l'horreur.",
  "Ich treibe Sport/ klettere / spiele Gitarre.":
    "Je fais du sport / de l'escalade / de la guitare.",
};

const VocabularyTestPage: React.FC = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const words = Object.keys(vocabulary);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  useEffect(() => {
    const audioInstance = new Audio("/pop.mp3");
    setAudio(audioInstance);
    return () => {
      audioInstance.pause(); // Clean up audio instance on unmount
    };
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && audio) {
      audio.play();
      const answer = vocabulary[words[currentIndex]];
      if (userInput.trim() === answer) {
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
        setCorrectAnswer(answer);
        highlightIncorrect(userInput, answer);
      }
    }
  };

  const highlightIncorrect = (input: string, answer: string) => {
    const inputLower = input.toLowerCase();
    const answerLower = answer.toLowerCase();
    let highlighted = "";

    for (let i = 0; i < answerLower.length; i++) {
      if (inputLower[i] !== answerLower[i]) {
        highlighted += `<b id="incorrect">${answer[i]}</b>`;
      } else {
        highlighted += answer[i];
      }
    }

    setHighlightedText(highlighted);
  };

  const handleRetry = () => {
    window.location.reload(); // Reload the page to restart the quiz
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1
        className={`text-3xl font-bold mb-2 ${
          feedback.includes("Correct") ? "text-green-400" : "text-red-400"
        }`}
      >
        {feedback}
      </h1>

      {correctAnswer && (
        <p
          className="text-red-100 text-sm mb-4"
          dangerouslySetInnerHTML={{ __html: highlightedText }}
        />
      )}

      <h2 className="text-2xl mb-4">
        {currentIndex < words.length ? (
          words[currentIndex]
        ) : (
          <div className="text-4xl flex flex-row font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            <span className="text-white">🎉</span> <p>Test Complete!</p>{" "}
            <span className="text-white">🎉</span>
          </div>
        )}
      </h2>

      {currentIndex < words.length ? (
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="border border-gray-300 duration-300 rounded-lg p-3 mb-4 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your answer in French"
        />
      ) : (
        <button
          onClick={handleRetry}
          className="bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4 flex items-center"
        >
          <span className="mr-2">🔄</span> Retry
        </button>
      )}
    </div>
  );
};

export default VocabularyTestPage;
