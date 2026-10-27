import api from "./api/axios"
import { useState, useEffect } from "react"

function App() {
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    try {
      const response = await api.get('tasks/') // GET http://127.0.0.1:8000/api/tasks/
      setTasks(response.data)
    } catch (error) {
      console.error("Failed to fetch tasks:", error)
    }
  }

  useEffect(() => {
    getTasks()
  }, [])

  console.log(tasks)

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
