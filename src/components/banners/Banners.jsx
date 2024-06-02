import React from "react";
import { banners } from "../../static";

const Banners = ({ bannerId }) => {
  const banner = banners.find((el) => el.id === bannerId);

  return (
    <div>
      <div className="banners container">
        {banner ? (
          <div key={banner.id} className="banner">
            <img src={banner.image} alt={banner.title} />
          </div>
        ) : (
          <p>Banner not found</p>
        )}
      </div>
    </div>
  );
};

export default Banners;
