export const normalizeInput = (input: string): string => {
  return input.replace(/’/g, '\'').trim();
};

export const highlightIncorrect = (input: string, answer: string): string => {
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

  return highlighted;
};

export const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, state: any, setState: React.Dispatch<React.SetStateAction<any>>) => {
  if (event.key === "Enter" && state.audio) {
    state.audio.play();
    const answer = state.vocabulary[state.currentIndex]?.answer;

    const normalizedUserInput = normalizeInput(state.userInput);
    const normalizedAnswer = normalizeInput(answer || "");

    if (normalizedUserInput === normalizedAnswer) {
      setState((prev: any) => ({
        ...prev,
        showFeedback: true,
        feedback: "✅ Correct!",
        correctAnswer: "",
        highlightedText: "",
        currentIndex: prev.currentIndex,
        userInput: "",
      }));
      setTimeout(() => {
        setState((prev: any) => ({ ...prev, showFeedback: false, currentIndex: prev.currentIndex + 1 }));
      }, 1250);
    } else {
      setState((prev: any) => ({
        ...prev,
        showFeedback: true,
        feedback: "❌ Incorrect!",
        correctAnswer: answer || "",
        highlightedText: highlightIncorrect(state.userInput, answer || ""),
      }));
    }
  }
};

export const addVocabulary = (newQuestion: string, newAnswer: string, setState: React.Dispatch<React.SetStateAction<any>>, toast: any) => {
  if (newQuestion && newAnswer) {
    setState((prev: any) => ({
      ...prev,
      vocabulary: [...prev.vocabulary, { question: newQuestion, answer: newAnswer }],
      newQuestion: "",
      newAnswer: "",
    }));
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

export const deleteVocabulary = (vocabulary: { question: string; answer: string }[], index: number) => {
  return vocabulary.filter((_, i) => i !== index);
};

export const saveToLocalStorage = (vocabulary: { question: string; answer: string }[], saveVocabulary: (value: string) => void) => {
  saveVocabulary(JSON.stringify(vocabulary));
};

export const importVocabularyFromJSON = async (file: File, setState: React.Dispatch<React.SetStateAction<any>>) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const json = event.target?.result;
    if (json) {
      const vocabulary = JSON.parse(json as string);
      setState((prev: any) => ({ ...prev, vocabulary }));
    }
  };
  reader.readAsText(file);
};

export const exportVocabularyToJSON = (vocabulary: { question: string; answer: string }[]) => {
  const json = JSON.stringify(vocabulary, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "vocabulary.json";
  a.click();
  URL.revokeObjectURL(url);
};

export const editVocabulary = (index: number, newQuestion: string, newAnswer: string, setState: React.Dispatch<React.SetStateAction<any>>, saveVocabulary: (value: string) => void) => {
  setState((prev: any) => {
    const updatedVocabulary = prev.vocabulary.map((item: { question: string; answer: string }, i: number) => 
      i === index ? { question: newQuestion, answer: newAnswer } : item
    );
    saveVocabulary(JSON.stringify(updatedVocabulary));
    return { ...prev, vocabulary: updatedVocabulary };
  });
};