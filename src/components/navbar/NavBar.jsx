import { Link } from "react-router-dom";
import CartWidget from '../common/cartWidget/CartWidget';
import './navBar.css'

const NavBar = () => {
    return (
        <div className="nav">
            <Link to="/" className="noLinea"><h1>La cueva TCG</h1></Link>
            <ul className="ul">
                <Link to="/category/magic" className="noLinea">Magic The Gathering</Link>
                <Link to="/category/pokemon" className="noLinea">Pokemon</Link>
                <Link to="/category/one-piece" className="noLinea">One Piece</Link>
                <Link to="/category/accesorios" className="noLinea">Accesorios</Link>
            </ul>
            <CartWidget/>
        </div>
    );
};

export default NavBar;