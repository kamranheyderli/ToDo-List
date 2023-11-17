import React, { useState } from 'react';

function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className='todo_form' onSubmit={handleSubmit}>
      <input type="text" placeholder='Update the task?' value={value} onChange={handleOnChange} />
      <button type='submit'>Update Task</button>
    </form>
  );
}

export default EditTodoForm;