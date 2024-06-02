import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { banners } from "../../static";
import icon1 from "../../assets/images/icon4.png";
import icon2 from "../../assets/images/icon3.png";
import icon3 from "../../assets/images/icon2.png";
import icon4 from "../../assets/images/icon1.png";
export default function Hero() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img src={banner.image} alt={`Slide ${banner.id}`} />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <ul className="nav__categories-response">
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
      </ul>
    </div>
  );
}
