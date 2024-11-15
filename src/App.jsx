import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
