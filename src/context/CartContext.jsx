import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const addToCart = (product) => {
   let isInCart = cart.some((el) => el.id === product.id);

   if (isInCart) {
     let nuevoArray = cart.map((elemento) => {
       if (elemento.id === product.id) {
         return {
           ...elemento,
           quantity: elemento.quantity + product.quantity,
         };
       } else {
         return elemento;
       }
     });

     setCart(nuevoArray);
   } else {
     setCart([...cart, product]);
   }
};

  const resetCart = () => {
    setCart([]);
  };

  const removeProduct = (id) => {
    let filteredArray = cart.filter((elemento) => elemento.id !== id);
    setCart(filteredArray);
  };

  const getTotalPrice = () => {
    let total = cart.reduce((total, elemento) => {
      return total + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let cant = cart.reduce((cant, elemento) => {
    return cant + elemento.quantity}, 0);
    return cant;
  };

  let data = { cart, addToCart, resetCart, removeProduct, getTotalPrice, getTotalQuantity };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};