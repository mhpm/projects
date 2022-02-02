const cardImages = [
  { id: 1, src: "/public/img/helmet-1.png" },
  { id: 2, src: "/public/img/potion-1.png" },
  { id: 3, src: "/public/img/ring-1.png" },
  { id: 4, src: "/public/img/scroll-1.png" },
  { id: 5, src: "/public/img/shield-1.png" },
  { id: 6, src: "/public/img/sword-1.png" },
];

const Game = () => {
  return (
    <>
      <h1>Game Page</h1>
      {cardImages.map((img) => (
        <img key={img.id} src={img.src} width={150} height={150}></img>
      ))}
    </>
  );
};

export default Game;
