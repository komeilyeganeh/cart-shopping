import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import "./index.scss";

const Header = ({ countCart, onShowCart }) => {
    return <header className="header">
        <div className="container container-header">
            <div className="logo">
                <Link to="/"><span>E</span>Commerce</Link>
            </div>
            <div className="cart">
                <button onClick={onShowCart}>
                    <BiShoppingBag size={25}/>
                    <span>{ countCart }</span>
                </button>
            </div>
        </div>
    </header>
}

export default Header;