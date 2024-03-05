//import { Fragment } from "react/jsx-runtime";

import { MouseEvent } from "react";


function ListGroup() {

  let items =['Sangli','Jaysingpur','Miraj','Kupwad'];  
  //const is replaced by let 
  //items = [];
  //items.map(item => <li> {item}</li>)
  //7 Managing state
  let selectedIndex = 0;  // -1 means no item selected, if we set to 0 then first item will selected 
  

  // Event handler (function)
  const handleClick = (event:MouseEvent) => console.log(event);
  return (
    <>
        <h1> List</h1>
        {items.length === 0 && <p>No item found</p>}

        <ul className="list-group" >

        {items.map((item, index) => <li 
                          className= { selectedIndex === index ? "list-group-item active" : "list-group-item"}
                          key = {item} 
                          onClick={handleClick}
                          >   
                          {item}</li>)}

        {/*  6 Handleing Events Only clicked on console         
        {items.map(item => <li className="list-group-item" key = {item} onClick={ () => console.log("Clicked")}>   {item}</li>)} 
        {items.map((item, index) => <li className="list-group-item active" key = {item} onClick={handleClick}> {item}</li>)} */}
        

          {/*  4 Redering List 
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li> */}
        </ul>
    </>
  );
}

export default ListGroup;
