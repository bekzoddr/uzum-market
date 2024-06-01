import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
function App() {
  return (
    <div className="app">
      <Navbar />
      <br />
      <Hero />
      <br />
      <br />
      <Products />
    </div>
  );
}

export default App;
