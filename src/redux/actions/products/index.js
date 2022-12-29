import axios from "axios";
import { base_url } from "../../../config";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(base_url);
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};
