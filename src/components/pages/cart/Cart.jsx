import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const {cart, resetCart, removeProduct, getTotalPrice} = useContext(CartContext);
  let totalAmount = getTotalPrice()
  return (
    <div>
      <h1>Pagina carrito</h1>
      {
        cart.map((elemento) => {
          return (
            <div key={elemento.id}>
              <h3>{elemento.title}</h3>
              <h3>Cantidad: {elemento.quantity}</h3>
              <h3>Precio: {elemento.price}</h3>
              <button onClick={()=>removeProduct(elemento.id)}>Eliminar</button>
            </div>);
        })}
        
      {cart.length > 0 && (
        <div>
          <h3>El total del carrito es: ${totalAmount}</h3>
          <button onClick={resetCart}>Limpiar Carrito</button>
          <Link to="/checkout">Finalizar compra</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
