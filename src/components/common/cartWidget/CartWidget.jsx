import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import '../../navbar/navBar.css'

const CartWidget = () => {
    const {cart, getTotalQuantity} = useContext(CartContext);

    const totalItems = getTotalQuantity();

    return (
        <Link to="/cart" className="widgetLink">
            <div className="widget">
                <h3>🛒</h3>
                <span>{totalItems}</span>
            </div>
        </Link>
    );
};

export default CartWidget; 