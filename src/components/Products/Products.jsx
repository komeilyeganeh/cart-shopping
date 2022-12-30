import EllipsisText from "react-ellipsis-text";
import { Link } from "react-router-dom";
import "./Products.scss";

const Products = ({ data, addToCart }) => {
  
  return (
    <section className="products">
      <div className="container">
        <div className="product-items">
          {data.map((product) => (
            <div className="product-item" key={product.id}>
              <Link to="/"><img src={product.image} alt="product" /></Link>
              <div className="product-info">
                <Link to="/"><p>
                  <EllipsisText text={product.title} length="25" />
                </p></Link>
                <div>
                  <span className="product-price">$ {product.price}</span>
                  <button className="add-cart" onClick={() => addToCart(product)}>Add +</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
