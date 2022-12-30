export const addItemToCart = (item) => (dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: item,
  });
};
export const removeItemFromCart = (item) => (dispatch) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: item,
  });
};
