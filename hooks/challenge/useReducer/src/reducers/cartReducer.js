// Action Types
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
const RESET_CART = "RESET_CART";

// Initial State
export const initialState = {
  cartItems: [],
};

// Reducer Function
export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { id: Date.now(), name: action.payload, completed: false },
        ],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case EDIT_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, name: action.payload.updatedText }
            : item
        ),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case RESET_CART:
      return initialState;
    default:
      return state;
  }
};
