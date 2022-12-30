import { combineReducers } from "redux";
import categoriesReducer from "./categories/categoriesReducer";
import productsReducer from "./products";
import cartReducer from "./cart";

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer
});

export default reducers;