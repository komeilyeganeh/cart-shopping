import axios from "axios";
import { base_url } from "../../../config";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(base_url);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};
