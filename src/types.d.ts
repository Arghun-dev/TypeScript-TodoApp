type Todo = {
  text: String,
  completed: boolean
}

type ToggleTodo = (selectedTodo: Todo) => void

type AddTodo = (newTodo: String) => void