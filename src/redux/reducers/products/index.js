
const initialState = {
    data: []
};

const productsReducer = (state = initialState, action) => {
    if (action.type === "GET_PRODUCTS") {
        return { data: action.payload }
    }
    return state;
}

export default productsReducer;