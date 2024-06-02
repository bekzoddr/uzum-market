import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";
import { GrShop } from "react-icons/gr";
import icon from "../../assets/images/cart-icon.png";
const Products = ({ data }) => {
  let products = data?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__image">
        <button>
          <FaRegHeart />
        </button>
        <img src={el.images[0]} alt={el.title} />
        <h2>{el.category}</h2>
      </div>
      <div className="card__body">
        <h2>{el.title}</h2>
        <div className="review">
          <MdOutlineStar color="gold" />
          <p>
            {el.rating} ({el.review} sharhlar)
          </p>
        </div>
        <p className="credit">{(el.price / 12).toFixed(2)} so'm/oyiga</p>
        <div className="card__navigation">
          <div className="prices">
            <p>{el.price + el.price}0 so'm</p>
            <h2>{el.price}0 so'm</h2>
          </div>
          <button>
            <img width={15} src={icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <section>
      <div className="container">
        <div className="products">{products}</div>
      </div>
    </section>
  );
};

export default Products;
