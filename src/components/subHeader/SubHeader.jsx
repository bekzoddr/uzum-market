import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import i18n from "../../i18";

const languages = [
  {
    code: "uz",
    label: "O'zbekcha",
    flag: ["blue", "red", "white", "red", "green"],
  },
  {
    code: "ru",
    label: "На узбекском",
    flag: ["white", "blue", "red", "red", "blue"],
  },
  {
    code: "en",
    label: "English",
    flag: ["red", "white", "blue", "white", "red"],
  },
];
const SubHeader = () => {
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const handleLanguageChange = () => {
    const nextLangIndex = (currentLangIndex + 1) % languages.length;
    setCurrentLangIndex(nextLangIndex);
    i18n.changeLanguage(languages[nextLangIndex].code);
  };

  const currentFlag = languages[currentLangIndex].flag;
  const { t } = useTranslation();
  return (
    <nav>
      <div className="container">
        <div className="sub_header">
          <div className="header__delivery">
            <div className="city">
              <CiLocationOn />
              <div className="city__info">
                <p className="cityy">{t("city")}</p>
                <p className="city__name">{t("city_name")}</p>
              </div>
            </div>
            <p className="header__delivery__info">{t("delivery_points")}</p>
          </div>
          <p className="header__info"> {t("free_delivery")} </p>
          <div className="header__navigations">
            <p className="uzum">{t("grape_shopping")}</p>
            <p>{t("faq")}</p>
            <p>{t("my_orders")}</p>
            <button
              className="language"
              onClick={() => i18n.changeLanguage("uz")}
            >
              {/* <div className="flag"> */}
              {/* <div
                  className="flag__stripe"
                  style={{ backgroundColor: currentFlag[0] }}
                ></div>
                <div
                  className="flag__stripe"
                  style={{ backgroundColor: currentFlag[1] }}
                ></div>
                <div
                  className="flag__stripe"
                  style={{ backgroundColor: currentFlag[2] }}
                ></div>
                <div
                  className="flag__stripe"
                  style={{ backgroundColor: currentFlag[3] }}
                ></div>
                <div
                  className="flag__stripe"
                  style={{ backgroundColor: currentFlag[4] }}
                ></div>
              </div>
              {t("language")} */}
              uzb
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubHeader;
