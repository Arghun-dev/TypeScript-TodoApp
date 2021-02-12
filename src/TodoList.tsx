import React from 'react'
import TodoListItem from './TodoListItem'

interface TodoListProps {
  todos: Array<Todo>,
  toggleTodo: ToggleTodo
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => <TodoListItem todo={todo} toggleTodo={toggleTodo} />)}
    </ul>
  )
}

export default TodoList