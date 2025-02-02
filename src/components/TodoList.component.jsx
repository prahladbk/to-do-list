import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div className="main">
      {todos?.map((item) => (
        <div key={item.id}>{item.label}</div>
      ))}
    </div>
  );
};

export default TodoList;
