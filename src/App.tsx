import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "Bhalchandra",
    address: {
      city: "Sangli",
      zipCode: 416101,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 416416 },
    });
  };
  return (
    <div>
      <button onClick={handleClick}> Click me</button>
    </div>
  );
}

export default App;
