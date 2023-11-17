import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className='todo_form' onSubmit={handleSubmit}>
      <input type="text" placeholder='What is the task today?' value={value} onChange={handleOnChange} />
      <button type='submit'>Add Task</button>
    </form>
  );
}

export default TodoForm;