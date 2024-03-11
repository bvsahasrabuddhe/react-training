import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "abc", amount: 10, category: "Utilities" },
    { id: 2, description: "def", amount: 10, category: "Utilities" },
    { id: 3, description: "ghi", amount: 10, category: "Utilities" },
    { id: 4, description: "jlk", amount: 10, category: "Utilities" },
    { id: 5, description: "mno", amount: 10, category: "Utilities" },
  ]);

  const visibleExpences = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCatetory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpences}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
