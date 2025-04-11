function TodoItem({ id, text, done, onToggle, onDelete }) {
    return (
        <li className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
            <div className="flex items-center gap-2">
                <span className={done ? "line-through text-gray-500" : ""}>
                {text}
                </span>
            </div>
            <div className="flex items-center gap-2">
                <input
                type="checkbox"
                checked={done}
                onChange={() => onToggle(id)}
                className="w-4 h-4"
                />
                <button
                onClick={() => onDelete(id)}
                className="text-red-500 hover:text-red-700 text-sm"
                >
                <button
  onClick={() => onDelete(id)}
  className="text-red-500 hover:text-red-700 p-1"
  aria-label="Delete task"
>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
            />
        </svg>
</button>
                </button>
            </div>
        </li>

    );
  }
  
  export default TodoItem;
  