interface DogImages {
  [key: string]: string;
}

// DO NOT question the order.
export const dogImages: DogImages = {
  dog4: "PLEASEE GIVE ME TREATS",
  dog6: "WHAT WAS THAT?",
  dog7: "leave me alone im eepy",
  dog8: "WHY AM I IN A FLOWER POT???",
  dog9: "hiii :D",
  dog10: "zzzzzzz",
  dog12: ":( i lost my toy",
  dog13: "welp :D",
  dog14: "i feel like a model",
  dog15: "hii hooman wana play??",

  dog1: "this dog just encountered a G-HOOOST 👻👻",

  dog16: "zzz...",
  dog17: "im too old for this 👴",

  dog2: "hehe hi",
  dog3: "huh?",
  dog5: "let me sleep hooman...",
  dog11: "RAWRRRR",
};

export function getRandomDog(full: Boolean): string[] {
  let url;
  const randomIndex = Math.floor(Math.random() * Object.keys(dogImages).length);

  if (full) {
    url = `https://korino.dev/dogs/${Object.keys(dogImages)[randomIndex]}.webp`;
  } else {
    url = `/dogs/${Object.keys(dogImages)[randomIndex]}.webp`;
  }
  const description = Object.values(dogImages)[randomIndex];

  return [url, description];
}
