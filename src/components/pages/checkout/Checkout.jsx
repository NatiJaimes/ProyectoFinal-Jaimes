import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./checkout.css"

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
    if (!userData.nombre || !userData.userEmail || !userData.telefono) { 
        alert("Por favor, complete todos los campos."); 
        return;
      }
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
      <h1>Formulario de Compra</h1>
      {orderId ? (
        <h2>Gracias por tu Compra. Tu número de ticket es: {orderId}</h2>
        ) : (
        <form onSubmit={funcionDelFormulario}>
          <h2>Ingrese los siguientes datos:</h2>
          <div className="datForm">
            <h3>Nombre</h3>
            <input type="text" placeholder="Ingrese su Nombre" name="nombre" onChange={capturarDatos} value={userData.nombre}/>
          </div>
          <div className="datForm">
            <h3>Email</h3>
            <input type="text" placeholder="Ingrese su email" name="userEmail" onChange={capturarDatos} value={userData.userEmail}/>
          </div>
          <div className="datForm">
            <h3>Telefono</h3>
            <input type="text" placeholder="Ingrese su telefono" name="telefono" onChange={capturarDatos} value={userData.telefono}/>
          </div>
          <div className="btnCheck">
            <button type="submit"> Enviar </button>
            <Link className="btnBack" to="/">Volver al Home</Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
