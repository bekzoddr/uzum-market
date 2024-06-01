import React from "react";
import { CiLocationOn } from "react-icons/ci";

const SubHeader = () => {
  return (
    <nav>
      <div className="container">
        <div className="sub_header">
          <div className="header__delivery">
            <div className="city">
              <CiLocationOn />
              <div className="city__info">
                <p className="cityy">Shahar:</p>
                <p className="city__name">Toshkent</p>
              </div>
            </div>
            <p className="header__delivery__info">Topshirish punktlari</p>
          </div>
          <p className="header__info">
            {" "}
            Buyurtmangizni 1 kunda bepul yetkazib beramiz!{" "}
          </p>
          <div className="header__navigations">
            <p className="uzum">Uzumda soting</p>
            <p>Savol-javoblar</p>
            <p>Buyurtmalarim</p>
            <button className="language">
              <div className="flag">
                <div className="blue"></div>
                <div className="red"></div>
                <div className="white"></div>
                <div className="red"></div>
                <div className="green"></div>
              </div>
              Uzbekcha
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubHeader;
