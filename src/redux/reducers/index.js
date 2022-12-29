import { combineReducers } from "redux";
import categoriesReducer from "./categories/categoriesReducer";
import productsReducer from "./products";

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
});

export default reducers;