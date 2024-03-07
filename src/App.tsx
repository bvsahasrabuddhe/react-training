// import ListGroup from "./components/ListGroup";
// import "./App.css";
//import { AiFillDollarCircle } from "react-icons/ai";
//import Button from "./components/Button/Button";

import { useState } from "react";

//import Like from "./components/Like";

//import Message from "./Message";

function App() {
  // let items = ["Sangli", "Jaysingpur", "Miraj", "Kupwad"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // state hook with drink object with two properties title and price
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    //drink.price = 6;
    //setDrink(drink);
    // 1 Nothing happen with above code

    // const newDrink = {
    //   ...drink, // existing drink object spread operation - copy all the properties of object
    //   //title: drink.title,
    //   price: 6,
    // };
    // setDrink(newDrink);
    // 2 All above code we can replaced by one line as

    setDrink({ ...drink, price: 6 });
  };
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}> Click me</button>
      {/* <Message /> */}
      {/* <Message />
      <Message /> */}
      {/* <Like onClick={() => console.log("clicked")} /> */}
      {/* <Button onClick={() => {}}>My Button</Button> */}
      {/* <AiFillDollarCircle color="red" size="50" /> */}
      {/* {" "}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      />{" "} */}
    </div>
  );
}

export default App;
