import React, { useState } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

const initialTodos: Array<Todo> = [
  { text: 'Learn Typescript', completed: false },
  { text: 'Learn Vue', completed: false },
  { text: 'Learn GraphQL', completed: false }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' && setTodos([...todos, { text: newTodo, completed: false }])
  }

  return (
    <React.Fragment>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </React.Fragment>
  ) 
}

export default App;
