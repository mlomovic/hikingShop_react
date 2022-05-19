import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Single from "./pages/Single";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";



const App = () => {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Topbar />
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/single" element={<Single />}>
                <Route path=":id" element={<Single />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
