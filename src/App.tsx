import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Bhalchandra",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bharat" } });
  };
  return <div></div>;
}

export default App;
