import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleToggleDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "completed") return task.done;
    return true;
  });

  return (
    <div className="p-4 max-w-md mx-auto" dir="ltr">
      <h1 className="text-2xl font-bold mb-4">ToDo App</h1>
      <TodoForm onAdd={handleAddTask} />
      
      <div className="flex justify-center gap-2 mb-4 mt-3">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "font-bold underline" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={filter === "active" ? "font-bold underline" : ""}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? "font-bold underline" : ""}
        >
          Completed
        </button>
      </div>

      <ul className="mt-6 space-y-2">
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            text={task.text}
            done={task.done}
            onToggle={handleToggleDone}
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
