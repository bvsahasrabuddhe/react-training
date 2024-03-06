// import ListGroup from "./components/ListGroup";
// import "./App.css";
//import { AiFillDollarCircle } from "react-icons/ai";
//import Button from "./components/Button/Button";
import Like from "./components/Like";
function App() {
  // let items = ["Sangli", "Jaysingpur", "Miraj", "Kupwad"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      <Like onClick={() => console.log("clicked")} />

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
