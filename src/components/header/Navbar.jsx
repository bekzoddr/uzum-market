import React, { memo } from "react";
import SubHeader from "../subHeader/SubHeader";
import logo from "../../assets/images/nav-logo.png";
import { GrShop } from "react-icons/gr";
import { BsPerson, BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import icon1 from "../../assets/images/icon4.png";
import icon2 from "../../assets/images/icon3.png";
import icon3 from "../../assets/images/icon2.png";
import icon4 from "../../assets/images/icon1.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
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
                <CiBoxList className="icon" /> {t("category")}
              </button>
              <div className="navbar__search">
                <input placeholder={t("search_placeholder")} type="search" />
                <button>
                  <BsSearch />
                </button>
              </div>
            </div>
            <ul className="nav__collection">
              <li className="nav__link">
                <BsPerson /> {t("login")}
              </li>
              <li className="nav__link">
                <FaRegHeart /> {t("favorites")}
              </li>
              <li className="nav__link">
                <GrShop /> {t("cart")}
              </li>
            </ul>
          </div>
          <div className="nav__footer">
            <ul className="nav__categories">
              <li>
                <img src={icon1} alt="" />
                {t("installment_payment")}
              </li>
              <li>
                <img src={icon2} alt="" />
                {t("summer_sale")}
              </li>
              <li>
                <img src={icon3} alt="" />
                {t("cool_home")}
              </li>
              <li>
                <img src={icon4} alt="" />
                {t("pools")}
              </li>
              <div className="gray">
                <li>{t("electronics")}</li>
                <li>{t("household_appliances")}</li>
                <li>{t("clothing")}</li>
                <li>{t("footwear")}</li>
                <li>{t("accessories")}</li>
                <li>{t("beauty_and_care")}</li>
                <li>{t("more")}</li>
              </div>
            </ul>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="navbar__responsive">
          <div className="search">
            <input placeholder={t("search_placeholder")} type="search" />
            <button>
              <BsSearch />
            </button>
          </div>
          <div className="navbar__responsive__links">
            <li>
              <FaHome className="nav__icon" />
              {t("home")}
            </li>
            <li>
              <IoSearch className="nav__icon" />
              {t("category")}
            </li>
            <li>
              <GrShop className="nav__icon" />
              {t("cart")}
            </li>
            <li>
              <FaRegHeart className="nav__icon" />
              {t("favorites")}
            </li>
            <li>
              <BsPerson className="nav__icon" />
              {t("profile")}
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
