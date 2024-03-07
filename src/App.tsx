import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    //Add
    setTags([...tags, "exciting"]);

    //Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    //  Here we can write an expression like if tag equals happy.
    //  We are going to change that to happiness otherwise
    //  we are going to return the tag
    setTags(tags.map((tag) => (tag === "happy" ? "happiest" : tag)));
  };
  return (
    <div>
      <button onClick={handleClick}> Click me</button>
    </div>
  );
}

export default App;
