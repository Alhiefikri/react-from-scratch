import { useReducer } from "react";
import { cartReducer, initialState } from "../../reducers/cartReducer";
import { useState } from "react";

const ShoppingCart = () => {
  // State & Reducer
  const [{ cartItems }, dispatch] = useReducer(cartReducer, initialState);
  const [newItem, setNewItem] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setNewItem("");
    }
  };

  const handleRemoveItem = (id) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });

  const handleEditItem = (id, itemText) => {
    setEditId(id);
    setEditText(itemText);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      dispatch({
        type: "EDIT_ITEM",
        payload: { id: editId, updatedText: editText },
      });
      setEditId(null);
      setEditText("");
    }
  };

  const handleResetCart = () => dispatch({ type: "RESET_CART" });

  return (
    <div>
      <h1>Shopping Cart</h1>
      <form onSubmit={handleAddItem}>
        <label>
          Add Item:{" "}
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button type="submit">Add</button>
        </label>
      </form>

      <h2>Item Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {editId === item.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() =>
                    dispatch({ type: "TOGGLE_COMPLETE", payload: item.id })
                  }
                />
                <span
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.name}
                </span>
                <button onClick={() => handleEditItem(item.id, item.name)}>
                  Edit
                </button>
                <button onClick={() => handleRemoveItem(item.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      <button onClick={() => handleResetCart()}>Reset Cart</button>
    </div>
  );
};
export default ShoppingCart;
