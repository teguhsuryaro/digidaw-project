import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Mitra from "./pages/Mitra";
import Deals from "./pages/Deals";
import Merchant from "./pages/Merchant";
import Checkout from "./pages/Checkout";
import AIChat from "./pages/AIChat";
import Orders from "./pages/Orders";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-surface">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mitra" element={<Mitra />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/merchant" element={<Merchant />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/ai" element={<AIChat />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
