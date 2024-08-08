import React, { useState } from "react";
const TodoInput = ({todos}) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    todos(value)
  };
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add Todo's."
        ></input>
        <button type="submit">Add</button>
        {console.log("hello")}
      </form>
    </div>
  );
};

export default TodoInput;
