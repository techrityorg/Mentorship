const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



export const randomColor = () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[randomNumber()];
  }

  function randomNumber() {
    return Math.floor(Math.random() * hex.length);
  }

  return hexCode;
};

