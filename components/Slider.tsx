"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  const banners = [
    {
      name: "banner1",
      img: "/banner1.jpg",
    },
    {
      name: "banner2",
      img: "/banner2.jpg",
    },
    {
      name: "banner3",
      img: "/banner3.jpg",
    },
    {
      name: "banner4",
      img: "/banner4.jpg",
    },
  ];

  const mbanners = [
    {
      name: "mbanner1",
      img: "/mbanner1.jpg",
    },
    {
      name: "mbanner2",
      img: "/mbanner2.jpg",
    },
    {
      name: "mbanner3",
      img: "/mbanner3.jpg",
    },
    {
      name: "mbanner4",
      img: "/mbanner4.jpg",
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper w-[90%] rounded-2xl my-6"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.name}>
              <img src={banner.img} alt={banner.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="md:hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper w-[90%] rounded-2xl my-6"
        >
          {mbanners.map((banner) => (
            <SwiperSlide key={banner.name}>
              <img src={banner.img} alt={banner.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
