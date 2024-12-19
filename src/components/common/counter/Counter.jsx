import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import "./counter.css"

const Counter = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("minimo 1 ");
    }
  };

  const onAdd = () => {
    let productToCart = { ...product, quantity: count };
    addToCart(productToCart);
  };

  return (
    <div className="contenedor">
      <div className="div">
        <button onClick={handleDecrement} className="btn">
          -
        </button>
        <h1>{count}</h1>
        <button onClick={handleIncrement} className="btn">
          +
        </button>
      </div>
      <button className="btn" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;