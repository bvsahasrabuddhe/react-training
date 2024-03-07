import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Veg Margarita",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };
  return (
    <div>
      <button onClick={handleClick}> Add Toppings </button>
    </div>
  );
}

export default App;
