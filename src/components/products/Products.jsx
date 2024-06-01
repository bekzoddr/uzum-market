import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

const Products = () => {
  return (
    <section>
      <div className="container">
        <div className="products">
          <div className="product__card">
            <div className="product__image">
              <button>
                <FaRegHeart />
              </button>
              <img src="" alt="" />
            </div>
            <div className="card__body">
              <h4></h4>
              <div className="review">
                <p></p>
              </div>
              <p className="credit"></p>
              <div className="card__navigation">
                <div className="prices">
                  <p></p>
                  <h2></h2>
                </div>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
