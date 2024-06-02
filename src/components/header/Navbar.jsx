import React, { memo } from "react";
import SubHeader from "../subHeader/SubHeader";
import logo from "../../assets/images/nav-logo.png";
import { GrShop } from "react-icons/gr";
import { BsPerson, BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { CiBoxList } from "react-icons/ci";
import icon1 from "../../assets/images/icon4.png";
import icon2 from "../../assets/images/icon3.png";
import icon3 from "../../assets/images/icon2.png";
import icon4 from "../../assets/images/icon1.png";
const Navbar = () => {
  return (
    <>
      <header>
        <SubHeader />
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img width={215} src={logo} alt="" className="nav__logo" />
            </div>
            <div className="navigations">
              <button className="category">
                <CiBoxList className="icon" /> Katalog
              </button>
              <div className="navbar__search">
                <input
                  placeholder="Mahsulotlar va turkumlar izlash"
                  type="search"
                />
                <button>
                  <BsSearch />
                </button>
              </div>
            </div>
            <ul className="nav__collection">
              <li className="nav__link">
                <BsPerson /> Kirish
              </li>
              <li className="nav__link">
                <FaRegHeart /> Saralanganlar
              </li>
              <li className="nav__link">
                {" "}
                <GrShop />
                Savat
              </li>
            </ul>
          </div>
          <div className="nav__footer">
            <ul className="nav__categories">
              <li>
                <img src={icon1} alt="" />
                Muddatli to'lov
              </li>
              <li>
                <img src={icon2} alt="" />
                Yozgi savdo
              </li>
              <li>
                <img src={icon3} alt="" />
                Uyda salqinlik
              </li>
              <li>
                <img src={icon4} alt="" />
                Hovuzlar
              </li>

              <div className="gray">
                <li>Elektronika</li>
                <li>Maishiy texnika</li>
                <li>Kiyim</li>
                <li>Poyabzallar</li>
                <li>Aksessuarlar</li>
                <li>Go'zallik va parvarish</li>
                <li>Yana </li>
              </div>
            </ul>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="navbar__responsive">
          <div className="search">
            <input
              placeholder="Mahsulotlar va turkumlar izlash"
              type="search"
            />
            <button>
              <BsSearch />
            </button>
          </div>
          <div className="navbar__responsive__links">
            <li>
              <BsPerson />
            </li>
            <li>
              <FaRegHeart />
            </li>
            <li>
              {" "}
              <GrShop />
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
