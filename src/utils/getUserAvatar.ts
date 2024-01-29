export const getUserAvatar = (userName: string): string =>
  userName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

export const getRandomColor = (): string => {
  const randomColors = [
    "#00BFD9",
    "#FFB834",
    "#9B51E0",
    "#F2C94C",
    "#27AE60",
    "#2D9CDB",
    "#2F80ED",
  ];
  const randomIndex = Math.floor(Math.random() * randomColors.length);
  return randomColors[randomIndex];
};
