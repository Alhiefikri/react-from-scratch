// App.js
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <TodoList />
    </div>
  );
}

// Komponen TodoList - Komponen utama untuk aplikasi todo
const TodoList = () => {
  // ========== STATE MANAGEMENT ==========
  // State untuk menyimpan daftar todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Belajar React", completed: false },
    { id: 2, text: "Belajar useState", completed: false },
  ]);

  // State untuk input todo baru
  const [input, setInput] = useState("");

  // State untuk proses edit
  const [editingId, setEditingId] = useState(null); // ID todo yang sedang diedit
  const [editText, setEditText] = useState(""); // Text yang sedang diedit

  // ========== FUNGSI-FUNGSI UTAMA ==========

  // Fungsi untuk menambah todo baru
  const addTodo = () => {
    // Validasi input kosong
    if (!input.trim()) {
      alert("Todo tidak boleh kosong!");
      return;
    }

    // Membuat todo baru
    const newTodo = {
      id: Date.now(), // Menggunakan timestamp sebagai ID unik
      text: input.trim(), // Mengambil text dari input
      completed: false, // Status awal selalu false
    };

    // Menambahkan todo baru ke daftar todos
    setTodos([...todos, newTodo]);
    // Reset input field
    setInput("");
  };

  // Fungsi untuk menandai todo selesai/belum
  const toggleTodo = (id) => {
    setTodos(
      todos.map(
        (todo) =>
          todo.id === id
            ? { ...todo, completed: !todo.completed } // Ubah status completed jika ID cocok
            : todo // Biarkan todo lain tetap sama
      )
    );
  };

  // Fungsi untuk menghapus todo
  const deleteTodo = (id) => {
    // Konfirmasi sebelum menghapus
    if (window.confirm("Apakah Anda yakin ingin menghapus todo ini?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  // ========== FUNGSI-FUNGSI EDIT ==========

  // Fungsi untuk memulai proses edit
  const startEdit = (todo) => {
    setEditingId(todo.id); // Set ID yang sedang diedit
    setEditText(todo.text); // Set text yang sedang diedit
  };

  // Fungsi untuk menyimpan hasil edit
  const saveEdit = () => {
    // Validasi input edit kosong
    if (!editText.trim()) {
      alert("Todo tidak boleh kosong!");
      return;
    }

    // Update todo yang diedit
    setTodos(
      todos.map(
        (todo) =>
          todo.id === editingId
            ? { ...todo, text: editText.trim() } // Update text jika ID cocok
            : todo // Biarkan todo lain tetap sama
      )
    );

    // Reset state edit
    setEditingId(null);
    setEditText("");
  };

  // Fungsi untuk membatalkan edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  // ========== RENDER KOMPONEN ==========
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Todo List App
      </h1>

      {/* Form Input Todo Baru */}
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

export default App;
