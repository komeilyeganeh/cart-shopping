import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../redux/actions/categoreis";
import { getProducts } from "../../redux/actions/products";
import Slider from "../../components/Slider/Slider";
import Header from "../../components/Header";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";

const Home = () => {
  // _-_-_-_-_- Variables -_-_-_-_-_
  const dispatch = useDispatch();
  // _-_-_-_-_- Store -_-_-_-_-_
  const allCategories = useSelector((state) => state.categories.data);
  // _-_-_-_-_- Life Cycle -_-_-_-_-_
  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    dispatch(getProducts())
  }, []);
  return (
    <div>
      <Header />
      <main>
        <Slider />
        <Categories categories={allCategories} />
        <Products />
      </main>
    </div>
  );
};

export default Home;
