import { Route, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Home from "./pages/home";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="app">
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
