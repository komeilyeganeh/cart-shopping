import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import "./index.scss";

const Header = () => {
    return <header className="header">
        <div className="container container-header">
            <div className="logo">
                <Link to="/"><span>E</span>Commerce</Link>
            </div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="cart">
                <button>
                    <BiShoppingBag size={25}/>
                    <span>5</span>
                </button>
            </div>
        </div>
    </header>
}

export default Header;