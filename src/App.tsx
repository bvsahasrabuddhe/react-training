import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let items = ["Sangli", "Jaysingpur", "Miraj", "Kupwad"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {" "}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      />{" "}
    </div>
  );
}

export default App;
