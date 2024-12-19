import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/pages/cart/Cart';
import Checkout from './components/pages/checkout/Checkout';
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import { CartContextProvider } from "./context/CartContext";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App