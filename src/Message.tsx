// function Message(){
//     const name = '';
//     if (name)
//     return <h1> Welcome {name} to B2A Technologies Private Limited </h1>;
//     return <h1> Welcome to B2A Technologies Private Limited </h1>;
// }

let count = 0;

const Message = () => {
  console.log("Message called", count);
  count++;
  return <div> Message {count}</div>;
};

export default Message;
