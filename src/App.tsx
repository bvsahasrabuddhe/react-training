import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const expenses = [
    { id: 1, description: "abc", amount: 10, category: "Utilities" },
    { id: 2, description: "def", amount: 10, category: "Utilities" },
    { id: 3, description: "ghi", amount: 10, category: "Utilities" },
    { id: 4, description: "jlk", amount: 10, category: "Utilities" },
    { id: 5, description: "mno", amount: 10, category: "Utilities" },
  ];

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
}

export default App;
