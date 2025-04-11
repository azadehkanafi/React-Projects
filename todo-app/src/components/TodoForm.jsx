import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Check if it is not empty
    if (text.trim() === "") return;

    //Send to the onAdd function that came from App
    onAdd(text);

    // Empty input
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new task..."
        className="flex-1 p-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
