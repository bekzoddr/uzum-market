import React, { memo } from "react";
import {
  FaInstagram,
  FaTelegram,
  FaFacebook,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__items">
            <h2 className="footer__title">Biz Haqimizda</h2>
            <ul className="footer__list">
              <li>Topshirish punktlari</li>
              <li>Vakansiyalar</li>
            </ul>
          </div>
          <div className="footer__items">
            <h2 className="footer__title">Foydalanuvchilarga</h2>
            <ul className="footer__list">
              <li>Biz bilan bog'lanish</li>
              <li>Savol-Javob</li>
            </ul>
          </div>
          <div className="footer__items">
            <h2 className="footer__title">Tadbirkorlarga</h2>
            <ul className="footer__list">
              <li>Uzumda soting</li>
              <li>Sotuvchi kabinetga kirish</li>
            </ul>
          </div>
          <div className="footer__items">
            <h2 className="footer__title">Ilovani yuklab olish</h2>
            <ul className="apps">
              <li>
                <FaApple className="icon apple-icon" />
                AppStore
              </li>
              <li>
                <FaGooglePlay className="icon googleplay-icon" />
                Google Play
              </li>
            </ul>
            <div className="footer__social">
              <h2 className="footer__title">Uzum ijtimoiy tarmoqlarda</h2>
              <ul className="socials">
                <FaInstagram className="icon instagram-icon" />
                <FaTelegram className="icon telegram-icon" />
                <FaFacebook className="icon facebook-icon" />
                <FaYoutube className="icon youtube-icon" />
              </ul>
            </div>
          </div>
        </div>
        <hr color="gray" />
        <div className="copyright">
          <h2> Maxfiylik kelishuvi Foydalanuvchi kelishuvi </h2>
          <p>
            {" "}
            «2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
            himoyalangan»{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
