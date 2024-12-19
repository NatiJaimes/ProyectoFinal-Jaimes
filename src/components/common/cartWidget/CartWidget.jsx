import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import '../../navbar/navBar.css'

const CartWidget = () => {
    const {cart} = useContext(CartContext);

    return (
        <Link to="/cart" className="widgetLink">
            <div className="widget">
                <h3>🛒</h3>
                <span>{cart.length}</span>
            </div>
        </Link>
    );
};

export default CartWidget; 