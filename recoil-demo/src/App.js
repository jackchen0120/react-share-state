import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./pages/cart";
import Cart from "./pages/cart/Cart";
import "./App.less";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Header />
        <Routes>
          <Route exact path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </RecoilRoot>
    </div>
  );
}

export default App;
