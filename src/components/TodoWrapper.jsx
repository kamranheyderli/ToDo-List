import React, { useState } from 'react';
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false
    }]);
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ?
        { ...todo, completed: !todo.completed } : todo
    )));
  };

  const todoDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    )));
  };

  const editTask = (task, id) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    )));
  };

  return (
    <div className='todo_wrapper'>
      <div className="head">
        <h1>To do List!</h1>
        <span>Total Todos:{todos.length}</span>
      </div>
      {
        todos.map(todo => (
          todo.isEditing ? (<EditTodoForm key={todo.id} editTodo={editTask} task={todo} />) : (<Todo key={todo.id} task={todo} toggleCompleted={toggleCompleted} todoDelete={todoDelete} editTodo={editTodo} />)
        ))
      }
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoWrapper;