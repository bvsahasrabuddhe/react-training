import React from "react";

interface Props {
  onSelectCatetory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCatetory }: Props) => {
  return (
    <select
      className="select-form"
      onChange={(event) => onSelectCatetory(event.target.value)}
    >
      <option value=""> All Categories</option>
      <option value="Groceries"> Groceries</option>
      <option value="Utilities"> Utilities</option>
      <option value="Entertainment"> Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
