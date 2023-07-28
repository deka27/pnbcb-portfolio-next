"use client";

import Image from "next/image";
import bg1 from "../../../../public/assets/bg1.webp";
import bg2 from "../../../../public/assets/bg2.webp";
import bg3 from "../../../../public/assets/bg3.webp";
import bg4 from "../../../../public/assets/bg4.webp";
import bg5 from "../../../../public/assets/bg5.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export default function BgHome() {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={bg1}
            alt="Background Home"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bg2}
            alt="Background Home"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bg3}
            alt="Background Home"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bg4}
            alt="Background Home"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bg5}
            alt="Background Home"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-14 right-10 ml-10 p-4 text-2xl font-bold flex max-w-xl  sm:bg-transparent transition text-white z-40">
        <span className="text-center sm:text-right">
          May the God of hope fill you with all joy and peace as you trust in
          him, so that you may overflow with hope by the power of the Holy
          Spirit.
          <br />
          ~Romans 15:13
        </span>
      </div>
      <div className="h-7 bg-gradient-to-l from-neutral-200 via-amber-300 to-rose-400"></div>
    </div>
  );
}
