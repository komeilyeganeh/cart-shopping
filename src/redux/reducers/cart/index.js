const initialState = {
  cartItems: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    let updateTotoal =
      state.total + action.payload.price * action.payload.count;
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );
    const itemExist = state.cartItems[itemIndex];
    let updateItems;
    if (itemExist) {
      const updateItem = {
        ...itemExist,
        count: itemExist.count + action.payload.count,
      };
      updateItems = [...state.cartItems];
      updateItems[itemIndex] = updateItem;
    } else {
      updateItems = state.cartItems.concat(action.payload);
    }
    return {
      cartItems: updateItems,
      total: +updateTotoal.toFixed(2),
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );
    const itemExist = state.cartItems[itemIndex];
    const updateTotoal = state.total - itemExist.price;
    let updateItems;
    if (itemExist.count === 1) {
      updateItems = state.cartItems.filter((item) => item.id !== itemExist.id);
    } else {
      const updatedItem = { ...itemExist, count: itemExist.count - 1 };
      updateItems = [...state.cartItems];
      updateItems[itemIndex] = updatedItem;
    }
    return {
      cartItems: updateItems,
      total: +updateTotoal.toFixed(2),
    };
  }
  return state;
};

export default cartReducer;
