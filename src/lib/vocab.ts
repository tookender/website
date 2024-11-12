export const normalizeInput = (input: string): string => {
  return input.replace(/’/g, "'").trim();
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