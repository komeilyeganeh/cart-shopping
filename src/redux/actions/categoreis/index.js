import axios from "axios";
import { base_url } from "../../../config";

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${base_url}/categories`);
    dispatch({
      type: "GET_CATEGORIES",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};
