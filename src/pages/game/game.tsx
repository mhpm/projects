import { useState } from "react";
import { ICardIamges, Images } from "./game.contants";

const Game = () => {
  const [cardImages] = useState<ICardIamges[]>(Images)

  return (
    <>
      <h1>Game Page</h1>
      {cardImages.map((img) => (
        <img key={img.id} src={img.src} width={150} height={150} alt="image"></img>
      ))}
    </>
  );
};

export default Game;
