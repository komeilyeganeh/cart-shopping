
const initialState = {
    data: []
};

const categoriesReducer = (state = initialState, action) => {
    if (action.type === "GET_CATEGORIES") {
        return { data: action.payload }
    }
    return state;
}

export default categoriesReducer;