interface Profiles {
  [key: string]: Array<string>;
}

// Got a better way of doing this?
// Feel free to make a pull request :D
export const profiles: Profiles = {
  ender: ["/avatars/ender.webp", "#9D174D", "false"],
  doggo: ["/dogs/dog12.webp", "#3498DB", "false"],
  "Korii Bot": ["/avatars/bot.webp", "#FFD17C", "true"],
  "dog hater": ["/avatars/angry_cat.webp", "#DB4039", "false"],
};
