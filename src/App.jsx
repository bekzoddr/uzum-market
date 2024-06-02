import { Route, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Home from "./pages/home";
function App() {
  return (
    <div className="app">
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
