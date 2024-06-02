import React, { useEffect, useState } from "react";
import axios from "../../api";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Banners from "../../components/banners/Banners";
const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(4);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products?limit=150`)
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [count]);
  return (
    <div>
      <Hero />
      <br />
      <br />
      <br />
      <Products data={data.slice(0, 15)} />
      <Banners bannerId={1} />
      <Products data={data.slice(15, 45)} />
      <Banners bannerId={2} />
      <Products data={data.slice(45, 60)} />
      <Banners bannerId={3} />
      <Products data={data.slice(60, 90)} />
      <Banners bannerId={4} />
      <Products data={data.slice(90, 105)} />
      <Banners bannerId={4} />
      <Products data={data.slice(105, 115)} />
      <Banners bannerId={5} />
      <Products data={data.slice(115, 125)} />
      <Banners bannerId={6} />
      <Products data={data.slice(125, 150)} />
    </div>
  );
};

export default Home;
