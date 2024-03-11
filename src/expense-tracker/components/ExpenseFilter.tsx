import React from "react";
import { categories } from "../../App";

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
      {categories.map((category) => (
        <option key={category} value={category}>
          {" "}
          {category}{" "}
        </option>
      ))}
      {/* <option value="Groceries"> Groceries</option>
      <option value="Utilities"> Utilities</option>
      <option value="Entertainment"> Entertainment</option> */}
    </select>
  );
};

export default ExpenseFilter;
