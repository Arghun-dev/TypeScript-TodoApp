import React from 'react'
import './TodoListItem.css'

interface TodoListItemProps {
  todo: Todo,
  toggleTodo: ToggleTodo
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div className={ todo.completed ? "completed" : undefined }>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo)} />
      {todo?.text}
    </div>
  )
}

export default TodoListItem