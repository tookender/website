interface DogImageData {
  description: string;
  blurhash: string;
}

interface DogImages {
  [key: string]: DogImageData;
}

// DO NOT question the order.
export const dogImages: DogImages = {
  dog4: { description: "PLEASEE GIVE ME TREATS", blurhash: "LDI:K}}?FcxD~A~URj9b~o58MzEM" },
  dog6: { description: "WHAT WAS THAT?", blurhash: "LTF=s_WCkDNJ?wbcs,RjbwWXROa|" },
  dog7: { description: "leave me alone im eepy", blurhash: "L4AcrII-5ZroIBDNys=@lUDi02WA" },
  dog8: { description: "WHY AM I IN A FLOWER POT???", blurhash: "LUF~HqWCbcM}?wbcoIRkbwWCM_oz" },
  dog9: { description: "hiii :D", blurhash: "LVC?Q38_tSoz_ND$xukCtlM{t7of" },
  dog10: { description: "zzzzzzz", blurhash: "L7A+Z.59JU=_0O}=xsRk-.IWV[W;" },
  dog12: { description: ":( i lost my toy", blurhash: "LLBD1p4nX8x]_4I9WYxv%hMxflt8" },
  dog13: { description: "welp :D", blurhash: "LDEV~K.7RWVZ_L%#Mfn5%ykpH@r^" },
  dog14: { description: "i feel like a model", blurhash: "LnHCAtt7Nenh?wt7jFWV%hoes9WX" },
  dog15: { description: "hii hooman wana play??", blurhash: "L9E{Om74~B9]R4MxxuVs5m~A9G-T" },
  dog1: { description: "this dog just encountered a G-HOOOST 👻👻", blurhash: "LdHJswr?t6xZ$%xZt6j[~AI;WqbH" },
  dog16: { description: "zzz...", blurhash: "LmGSltVsWCbv?wjZjZkCt9bcoIaK" },
  dog17: { description: "im too old for this 👴", blurhash: "LmH2vNs9OZRj?wt7jFayyEt7r=kC" },
  dog18: { description: "a bit sleepy....", blurhash: "L7IN{m00J--p0001_NMxu5?v8_-:" },
  dog2: { description: "hehe hi", blurhash: "LcID5BR*X7s-~At6j?jZ-.xZWBaz" },
  dog3: { description: "huh?", blurhash: "LUHTELoekVxY~AxZj@oLxuxZWBWW" },
  dog5: { description: "let me sleep hooman...", blurhash: "LAGk|4o}*0H=4nNeD%%20Mx]rW.8" },
  dog11: { description: "RAWRRRR", blurhash: "LRHxKJ?vK69b~8N{NKNGX.JBRjs9" },
};

export function getRandomDog(full: boolean): string[] {
  let url;
  const randomIndex = Math.floor(Math.random() * Object.keys(dogImages).length);

  const dogKey = Object.keys(dogImages)[randomIndex];
  const { description, blurhash } = dogImages[dogKey];

  if (full) {
    url = `https://korino.dev/dogs/${dogKey}.webp`;
  } else {
    url = `/dogs/${dogKey}.webp`;
  }

  return [url, description, blurhash];
}
