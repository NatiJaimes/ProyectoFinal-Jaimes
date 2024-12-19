import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import {  } from "react";

const Checkout = () => {

  const {cart, getTotalPrice, resetCart} = useContext(CartContext)
  const [userData, setUserData] = useState({
    nombre: "",
    userEmail: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null)

  const capturarDatos = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const funcionDelFormulario = (e) => {
    e.preventDefault();
    let total = getTotalPrice()
    let order = {
      buyer: userData,
      items: cart,
      total,
    }
    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });
    let productsCollection = collection(db, "products");
    order.items.forEach(elemento => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, {stock: elemento.stock - elemento.quantity});
    })
  };

  return (
    <div>
      <h2>Aca el formulario de compra</h2>
      {orderId ? (
        <h2>Gracias por tu compra. Tu ticket es: {orderId}</h2>
      ) : (
        <form onSubmit={funcionDelFormulario}>
          <input
            type="text"
            placeholder="nombre"
            name="nombre"
            onChange={capturarDatos}
          />
          <input
            type="text"
            placeholder="email"
            name="userEmail"
            onChange={capturarDatos}
          />
          <input
            type="text"
            placeholder="telefono"
            name="telefono"
            onChange={capturarDatos}
          />
          <button> enviar </button>
          <button type="button"> cancelar </button>
        </form>
      )}
    </div>
    //agregar un boton que vuelva al home
  );
};

export default Checkout;
