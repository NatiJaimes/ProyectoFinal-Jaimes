import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./cart.css"

const Cart = () => {
  const {cart, resetCart, removeProduct, getTotalPrice} = useContext(CartContext);
  let totalAmount = getTotalPrice()
  return (
    <div>
      <h1>Pagina Carrito</h1>
      <div className="contCart">
      {
        cart.map((elemento) => {
          return (
            <div className="detailCart" key={elemento.id}>
              <img className="imgDetCart" src={elemento.img} alt="" />
              <div className="txtDetCart">
              <h3>{elemento.title}</h3>
              <h3>Cantidad: {elemento.quantity}</h3>
              <h3>Precio: ${elemento.price}</h3>
              </div>
              <button className="btnDetDel" onClick={()=>removeProduct(elemento.id)}>Eliminar</button>
            </div>);
        })}
        </div>
      {cart.length > 0 ? (
        <div className="endCart">
          <h2 className="totCart">El total del carrito es: ${totalAmount}</h2>
          <button className="btnCart" onClick={resetCart}>Limpiar Carrito</button>
          <Link className="btnCart" to="/checkout">Finalizar compra</Link>
        </div>
        ) : (
          <div>
            <h2>Tu carrito está vacío</h2>
            <Link className="btnCart" to="/">Volver al Home</Link>
          </div>
      )}
    </div>
  );
};

export default Cart;
