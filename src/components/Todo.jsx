import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo({ task, toggleCompleted, todoDelete, editTodo }) {
  return (
    <div className='todo'>
      <p onClick={() => toggleCompleted(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
      <div className='icons'>
        <FontAwesomeIcon className='edit' icon={faEdit} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className='delete' icon={faTrash} onClick={() => todoDelete(task.id)} />
      </div>
    </div>
  );
}

export default Todo;