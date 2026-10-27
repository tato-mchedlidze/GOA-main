import api from "./api/axios"
import { useState, useEffect } from "react"

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  const getTasks = async () => {
    const response = await api.get('tasks/')
    setTasks(response.data)
  }

  const addTask = async () => {
    if (title.trim() === '') return
    await api.post('tasks/', { title: title })
    setTitle('')
    getTasks()
  }

  const deleteTask = async (id) => {
    await api.delete(`tasks/${id}/`)
    getTasks()
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
