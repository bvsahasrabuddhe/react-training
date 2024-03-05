import { useState } from "react";

// 8
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //let selectedIndex = 0;  // -1 means no item selected, if we set to 0 then first item will selected
  //Hook
  // const arr = useState(-1);
  // arr[0] //variable (selectedIndex)
  // arr[1] // updater function
  //const [name, stName] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1); // line No 7 commented

  return (
    <>
      <h1> {heading}</h1>
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
