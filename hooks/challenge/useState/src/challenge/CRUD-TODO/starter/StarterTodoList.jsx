// App.js
import { useState } from "react";

// Komponen TodoList
const StarterTodoList = () => {
  // ========== STATE MANAGEMENT ==========
  // TODO: Lengkapi state todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Belajar React", completed: false },
    { id: 2, text: "Belajar useState", completed: false },
  ]);

  // TODO: Lengkapi state input
  const [input, setInput] = useState("");

  // TODO: Lengkapi state editingId dan editText
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // ========== FUNGSI-FUNGSI YANG PERLU DILENGKAPI ==========

  // TODO: Buat fungsi addTodo
  const addTodo = () => {
    // Tulis kode untuk menambah todo disini
    if (!input.trim("")) {
      alert("jangan kosongin input!!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  // TODO: Buat fungsi toggleTodo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // TODO: Buat fungsi deleteTodo
  const deleteTodo = (id) => {
    if (window.confirm("Apakah yakin ingin menghapus??")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  // TODO: Buat fungsi startEdit
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // TODO: Buat fungsi saveEdit
  const saveEdit = () => {
    // Tulis kode untuk menyimpan hasil edit disini
    setTodos(
      todos.map((todo) =>
        todo.id === editingId ? { ...todo, text: editText.trim() } : todo
      )
    );

    setEditingId(null);
    setEditText("");
  };

  // TODO: Buat fungsi cancelEdit
  const cancelEdit = () => {
    // Tulis kode untuk membatalkan edit disini
    setEditingId(null);
    setEditText("");
  };

  // ========== TAMPILAN UI (SUDAH LENGKAP) ==========
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Todo List App
      </h1>

      {/* Form Input Todo */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          className="flex-1 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          placeholder="Tambah todo baru..."
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 
                     transition-colors duration-200"
        >
          Tambah
        </button>
      </div>

      {/* Daftar Todo */}
      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-2 p-3 border rounded hover:bg-gray-50
                       transition-colors duration-200"
          >
            {editingId === todo.id ? (
              // Form Edit Todo
              <div className="flex gap-2 flex-1">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && saveEdit()}
                  className="flex-1 px-2 py-1 border rounded focus:outline-none 
                            focus:border-blue-500"
                />
                <button
                  onClick={saveEdit}
                  className="px-3 py-1 bg-green-500 text-white rounded
                             hover:bg-green-600 transition-colors duration-200"
                >
                  Simpan
                </button>
                <button
                  onClick={cancelEdit}
                  className="px-3 py-1 bg-gray-500 text-white rounded
                             hover:bg-gray-600 transition-colors duration-200"
                >
                  Batal
                </button>
              </div>
            ) : (
              // Tampilan Normal Todo
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="h-5 w-5 cursor-pointer"
                />
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => startEdit(todo)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded
                             hover:bg-yellow-600 transition-colors duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded
                             hover:bg-red-600 transition-colors duration-200"
                >
                  Hapus
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Info Jumlah Todo */}
      <div className="mt-6 text-sm text-gray-600 text-center">
        Total: {todos.length} todo | Selesai:{" "}
        {todos.filter((todo) => todo.completed).length} todo
      </div>
    </div>
  );
};

export default StarterTodoList;
