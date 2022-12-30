import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import { addItemToCart } from "../../redux/actions/cart";
import Slider from "../../components/Slider/Slider";
import Header from "../../components/Header";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import Cart from "../../components/Cart/Cart";

const Home = () => {
  // _-_-_-_-_- Variables -_-_-_-_-_
  const dispatch = useDispatch();
  const [cartIsShow, setCartIsShow] = useState(false);
  // _-_-_-_-_- Store -_-_-_-_-_
  const allProducts = useSelector((state) => state.products.data);
  const cartItems = useSelector(state => state.cart.cartItems);
  // _-_-_-_-_- Life Cycle -_-_-_-_-_
  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);
  // _-_-_-_-_- Functions -_-_-_-_-_
  const addToCartHandler = (item) => {
    const {id, category, title, price, image} = item;
    const cartItem = {id, category, title, price, image, count: 1};
    dispatch(addItemToCart(cartItem));
  }
  const countCartItems = cartItems.reduce((currentNum, item) => {
    return currentNum + item.count;
  }, 0);
  const onShowCartHandler = () => setCartIsShow(true);
  const onHideCartHandler = () => setCartIsShow(false);
  
  return (
    <div>
      {cartIsShow && <Cart onHideCart={onHideCartHandler}/>}
      <Header countCart={countCartItems} onShowCart={onShowCartHandler}/>
      <main>
        <Slider />
        <Products data={allProducts} addToCart={item => addToCartHandler(item)}/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
