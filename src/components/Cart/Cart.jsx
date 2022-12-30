import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../redux/actions/cart";
import Modal from "../Modal/Modal";
import "./Cart.scss";

const Cart = ({ onHideCart }) => {
    const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const { total } = cartState;
  const { cartItems } = cartState;

  const addItemHandler = (item) => {
    dispatch(addItemToCart({...item, count: 1}));
  }
  const removeItemHandler = (item) => {
    dispatch(removeItemFromCart(item));
  }
  return (
    <Modal onHideCart={onHideCart}>
      <div className="cart-items">
        {cartItems.length === 0 ? <p>The shopping cart is empty !</p> : ""}
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-product-info">
              <div className="cart-image">
                <img src={item.image} alt="cart-item" />
              </div>
              <div className="cart-product-title">
                <p>{item.title}</p>
                <span>$ {item.price}</span>
              </div>
            </div>
            <div className="cart-product-counter">
              <p>X {item.count}</p>
              <div className="cart-btn">
                <button onClick={() => removeItemHandler(item)}>-</button>
                <button onClick={() => addItemHandler(item)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-info">
        <p>
          Total : <span>$ {total}</span>
        </p>
      </div>
    </Modal>
  );
};

export default Cart;
